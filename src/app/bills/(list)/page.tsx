'use client'
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { useCompanyStore } from '@/app/stores/Company'
import { useSuspenseQuery } from '@apollo/client'
import { InvoiceQueries } from '@/app/bills/queries/InvoiceQueries'
import { BillCard } from '@/app/bills/components/BillCard'

export default function Bills() {
  const companyStore = useCompanyStore()
  const { data: billsData } = useSuspenseQuery(InvoiceQueries.allByCompanyId, {
    variables: { companyId: companyStore().companies[0].id }
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
        {billsData?.invoices?.map((invoice) => (
          <BillCard className="mb-4" key={`bill-card-${invoice.id}`} invoice={invoice} />
        ))}
      </div>
    </div>
  )
}
