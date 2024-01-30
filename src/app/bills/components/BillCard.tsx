'use client'
import { Invoice, InvoiceItem } from '@/generated/graphql'
import { MagicWandIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { invoiceStatusColorMap } from '@/app/bills/constants/InvoiceColor'

export type Props = { invoice: Invoice, className?: string }
export const BillCard = ({ invoice, ...propsToFwd }: Props) => {
  const pathname = usePathname()

  const getTotalPrice = (invoiceItems: InvoiceItem[]): string => {
    return invoiceItems
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
        0
      )
      .toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
      })
  }

  const isInvoiceSelected = (invoiceId: string): boolean => pathname.includes(invoiceId)

  return (
    <Link
      className={`${propsToFwd.className ?? ''} bg-${invoiceStatusColorMap.get(invoice.status)}/5 flex items-center flex-row gap-4 group hover:border-${invoiceStatusColorMap.get(invoice.status)} hover:border-1 hover:bg-${invoiceStatusColorMap.get(invoice.status)}/10 card border transition-all duration-300 ease-in-out p-4 rounded-lg overflow-hidden relative ${isInvoiceSelected(invoice?.id) ? `parent-state-change border-${invoiceStatusColorMap.get(invoice.status)} bg-${invoiceStatusColorMap.get(invoice.status)}/5` : ''}`}
      href={`/bills/sneak/${invoice.id}`}
    >
      <div
        className={`min-w-40 rounded-b-lg min-h-4 absolute left-1/2 -translate-x-1/2 -top-10 bg-${invoiceStatusColorMap.get(invoice.status)}/40 border-b border-r border-l px-2 border-${invoiceStatusColorMap.get(invoice.status)} ease-in-out group-hover:top-0 parent-state-change:top-0 transition-all duration-300 flex items-center gap-4`}
      >
        <span>Value: {getTotalPrice(invoice?.invoiceItems)}</span>
        <span>|</span>
        <span className="capitalize">Status: {invoice.status}</span>
      </div>
      <div className="avatar placeholder">
        <div
          className={`bg-${invoiceStatusColorMap.get(invoice.status)}/20 text-${invoiceStatusColorMap.get(invoice.status)}-content rounded-lg w-16`}
        >
          <span className="text-2xl uppercase">{invoice.party.name.substring(0, 2)}</span>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Bill Number: {invoice.no}</h1>
        <span className="flex items-center gap-2">
          <p className="text-sm">{invoice.party.name}</p>
          <p className="text-sm">/</p>
          <p className="text-sm">{invoice.invoiceItems.length} items</p>
          <p className="text-sm">/</p>
          <p className="text-sm">{invoice.date}</p>
        </span>
      </div>
      <div
        className={`absolute top-1/2 -translate-y-1/2 right-2 opacity-0 group-hover:right-4 ${isInvoiceSelected(invoice.id) ? 'opacity-0' : 'group-hover:opacity-100'} transition-all duration-300 ease-in-out text-xs flex items-center rotate-0 group-hover:-rotate-6 gap-1`}
      >
        <MagicWandIcon />
        click to sneak
      </div>
    </Link>
  )
}
