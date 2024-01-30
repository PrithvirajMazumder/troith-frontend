'use client'
import Link from 'next/link'
import { useSuspenseQuery } from '@apollo/client'
import { InvoiceQueries } from '@/app/bills/queries/InvoiceQueries'

export default function BillPage({ params: { id: invoiceId } }: { params: { id: string } }) {
  const { data } = useSuspenseQuery(InvoiceQueries.detailsById, {
    variables: { invoiceId }
  })

  return (
    <div className="relative h-full w-full">
      <h1 className="text-2xl">Bill {data?.invoice?.id}</h1>
      <Link href={`/bills/${data?.invoice.id}`} className="btn btn-primary">
        Details
      </Link>
    </div>
  )
}
