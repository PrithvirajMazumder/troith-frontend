import { TwoColumnLayout } from '@/components/TwoColumnLayout'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  bill: ReactNode
}
export default function BillsLayout({ bill, children }: Props) {
  return <TwoColumnLayout leftPanel={children} rightPanel={bill} />
}
