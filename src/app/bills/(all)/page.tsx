'use client'
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { useCompanyStore } from '@/app/stores/Company'
import Link from 'next/link'
import { useSuspenseQuery } from '@apollo/client'
import { InvoiceQueries } from '@/app/bills/queries/InvoiceQueries'

export default function Bills() {
  const companyStore = useCompanyStore()
  console.log('companyStore().companies[0].id', companyStore().companies[0].id)
  const { data: billsData } = useSuspenseQuery(InvoiceQueries.allByCompanyId, {
    variables: { companyId: companyStore().companies[0].id },

  })

  return (
    <div>
      <div className="border-b p-4 flex w-full gap-4">
        <div className="join w-full">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Search by party name and item name"
          />
          <button className="btn join-item">
            <MagnifyingGlassIcon />
          </button>
        </div>
        <button className="btn btn-primary">
          <PlusIcon />
          New
        </button>
      </div>
      <div className="p-4">
        <h1 className="text-2xl">Bills</h1>
        {billsData?.invoices?.map((invoice) => (
          <Link
            href={`/bills/sneak/${invoice.id}`}
            key={`bill-id-${invoice.id}`}
            className="text-2xl"
          >
            {invoice?.party?.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
