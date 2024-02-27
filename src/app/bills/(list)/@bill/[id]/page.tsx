'use client'
import Link from 'next/link'
import { useSuspenseQuery } from '@apollo/client'
import { InvoiceQueries } from '@/app/bills/queries/InvoiceQueries'
import {
  Cross2Icon,
  DownloadIcon,
  ExternalLinkIcon,
  OpenInNewWindowIcon,
  Pencil1Icon, Share1Icon,
  UpdateIcon
} from '@radix-ui/react-icons'
import { invoiceStatusColorMap } from '@/app/bills/constants/InvoiceColor'
import { invoiceStatus } from '@/constants/invoiceStatus'
import { InvoiceItem } from '@/generated/graphql'

export default function BillPage({ params: { id: invoiceId } }: { params: { id: string } }) {
  const { data } = useSuspenseQuery(InvoiceQueries.detailsById, {
    variables: { invoiceId }
  })

  const getTotalInvoiceValue = (invoiceItems: InvoiceItem[]) =>
    invoiceItems?.reduce((prev, current) => prev + current.price * current.quantity, 0)

  const getNetInvoiceAmount = (grossAmount: number, cgst: number, sgst: number) =>
    grossAmount + (grossAmount * cgst) / 100 + (grossAmount * sgst) / 100

  return (
    <div className="h-full w-full relative">
      <div className="flex w-full items-center p-4 border-b">
        <div>
          <p className="text-xs">Sneaking</p>
          <h1 className="text-xl font-semibold text-wrap break-all">
            Bill no: {data?.invoice?.no}
          </h1>
        </div>
        <Link className="btn btn-ghost btn-square ml-auto" href="/bills">
          <Cross2Icon className="w-6 h-6" />
        </Link>
      </div>
      <div
        className={`w-full font-semibold flex items-center gap-2 justify-center capitalize bg-${invoiceStatusColorMap.get(data?.invoice?.status)}/5 py-2`}
      >
        <span className={`text-${invoiceStatusColorMap.get(data?.invoice?.status)}`}>
          {data?.invoice?.status}
        </span>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} role="button" className="btn btn-xs btn-ghost btn-circle">
            <UpdateIcon />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            <p className="p-1 text-xs font-semibold">Change status to 👇</p>
            {Object.values(invoiceStatus).map((status) => (
              <li className={`text-${invoiceStatusColorMap.get(status)}`}>
                <a
                  className={`bg-${invoiceStatusColorMap.get(status)}/5 hover:bg-${invoiceStatusColorMap.get(status)}/10`}
                >
                  {status}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-b w-full p-4">
        <p className="text-xs">Party</p>
        <h1 className="text-xl font-bold">
          {data?.invoice?.party?.name}{' '}
          <span className="ml-1">
            <Link className="btn btn-circle btn-xs" href={`/parites/${data?.invoice?.party?.id}`}>
              <OpenInNewWindowIcon />
            </Link>
          </span>
        </h1>
        <div className="mt-4 flex w-full">
          <span className="flex-1">
            <p className="text-xs">Vehicle</p>
            <h1 className="text-sm font-bold">{data?.invoice?.vehicleNumber} </h1>
          </span>
          <span className="flex-1">
            <p className="text-xs">Date</p>
            <h1 className="text-sm font-bold">{data?.invoice?.date} </h1>
          </span>
        </div>
        <div className="flex-1 mt-4">
          <p className="text-xs capitalize">{data?.invoice?.bank?.name}</p>
          <h1 className="text-sm font-bold">{data?.invoice?.bank?.accountNumber} </h1>
        </div>
        <div className="flex-1 mt-4">
          <p className="text-xs">Gross Value</p>
          <h1 className="text-2xl font-bold">
            {getTotalInvoiceValue(data?.invoice?.invoiceItems)?.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            })}
          </h1>
        </div>
        <div className="flex-1 mt-4">
          <p className="text-xs">
            Gross value + [CGST{' '}
            {(
              (getTotalInvoiceValue(data?.invoice?.invoiceItems) *
                (data?.invoice?.tax?.cgst ?? 1)) /
              100
            )?.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            })}{' '}
            ] + [SGST{' '}
            {(
              (getTotalInvoiceValue(data?.invoice?.invoiceItems) *
                (data?.invoice?.tax?.sgst ?? 1)) /
              100
            )?.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            })}
            ]
          </p>
          <h1 className="text-2xl font-bold">
            {`${getNetInvoiceAmount(
              getTotalInvoiceValue(data?.invoice?.invoiceItems),
              data?.invoice?.tax?.cgst ?? 0,
              data?.invoice?.tax?.sgst ?? 0
            )?.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            })}`}
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text font-semibold text-wrap break-all flex items-center gap-2 px-4 pt-4">
          Invoice items{' '}
          <Link className="btn btn-xs" href={''}>
            <Pencil1Icon />
            Edit{' '}
          </Link>
        </h1>
        <div className="flex flex-col">
          {data?.invoice?.invoiceItems?.map((invoiceItem) => (
            <div className="p-4 border-b">
              <h1 className="text-xl font-semibold">{invoiceItem?.item?.name}</h1>
              <h1 className="text-lg font-semibold">
                <span className="text-xs font-bold italic opacity-60">
                  {invoiceItem.quantity} {invoiceItem?.item?.uom.abbreviation} X{' '}
                  {invoiceItem.price.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}{' '}
                  ={' '}
                </span>
                {(invoiceItem.quantity * invoiceItem.price).toLocaleString('en-IN', {
                  style: 'currency',
                  currency: 'INR'
                })}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t shadow-xl absolute bottom-0 left-0 flex justify-center w-full">
        <div className="join mx-auto">
          <button className="btn min-w-28 join-item">
            <Share1Icon />
            Share
          </button>
          <button className="btn min-w-28 btn-info join-item">
            <ExternalLinkIcon />
            Details
          </button>
          <button className="btn min-w-28 btn-primary join-item">
            <DownloadIcon />
            Download</button>
        </div>
      </div>
    </div>
  )
}
