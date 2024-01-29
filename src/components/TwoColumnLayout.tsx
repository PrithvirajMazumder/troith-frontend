import { ReactNode } from 'react'

type Props = {
  leftPanel: ReactNode
  rightPanel: ReactNode
}
export const TwoColumnLayout = (props: Props) => {
  return (
    <div className="flex h-full w-full items-start">
      <div className="flex-1 overflow-scroll border-r h-full">{props.leftPanel}</div>
      <div className="w-96 overflow-scroll h-full">{props.rightPanel}</div>
    </div>
  )
}
