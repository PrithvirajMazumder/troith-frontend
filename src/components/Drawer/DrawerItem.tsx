import React, { ReactElement } from 'react'
import Link from 'next/link'

type DrawerItemProps = {
  text: string
  icon?: ReactElement
  className?: string
  href: string
  active?: boolean
}
export const DrawerItem = ({ icon, text, className, href, active }: DrawerItemProps) => {
  const newElement = icon
    ? React.cloneElement(icon!, {
        className: 'h-5 w-5 group-hover:text-primary parent-state-change:text-primary'
      })
    : null

  return (
    <li className={`${active ? 'parent-state-change' : ''} group ${className ?? ''}`}>
      <Link
        href={href}
        className="text-xl hover:!bg-primary/0 focus:!bg-primary/0 flex items-center group-hover:gap-3 group-hover:font-semibold parent-state-change:font-semibold duration-300 transition-all ease-out border-none outline-none"
      >
        {newElement}
        {text}
      </Link>
    </li>
  )
}
