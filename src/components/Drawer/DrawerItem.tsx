import React, { ReactElement } from 'react'
import Link from 'next/link'

type DrawerItemProps = { text: string; icon?: ReactElement; className?: string; href: string }
export const DrawerItem = ({ icon, text, className, href }: DrawerItemProps) => {
  const newElement = icon
    ? React.cloneElement(icon!, {
        className: 'h-5 w-5 group-hover:text-primary'
      })
    : null

  return (
    <li className={`group ${className ?? ''}`}>
      <Link
        href={href}
        className="text-xl flex items-center group-hover:gap-3 group-hover:font-semibold duration-300 transition-all ease-out border-none outline-none"
      >
        {newElement}
        {text}
      </Link>
    </li>
  )
}
