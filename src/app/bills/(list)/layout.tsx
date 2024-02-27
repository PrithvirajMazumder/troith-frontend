import { TwoColumnLayout } from '@/components/TwoColumnLayout'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  bill: ReactNode
}
export default function BillsLayout({ bill, children }: Props) {
  return (
    <TwoColumnLayout
      leftPanel={<div className="w-full h-full relative">{children}</div>}
      rightPanel={<div className="w-full h-full relative">{bill}</div>}
    />
  )
}
