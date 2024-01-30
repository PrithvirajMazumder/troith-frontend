import Link from 'next/link'

export default function BillPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-2xl">Bill {params?.id}</h1>
      <Link href={`/bills/${params.id}`} className="btn btn-primary">
        Details
      </Link>
    </div>
  )
}
