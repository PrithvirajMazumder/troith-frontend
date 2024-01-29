import React, { PropsWithChildren } from 'react'
import { elementIDs } from '@/constants/elementIDs'
import {
  ArchiveIcon,
  AvatarIcon,
  BarChartIcon,
  FileIcon,
  FileTextIcon,
  HomeIcon,
  RocketIcon,
  RulerHorizontalIcon
} from '@radix-ui/react-icons'
import { Navbar } from '@/components/Navbar'
import { DrawerItem } from '@/components/Drawer/DrawerItem'
import Link from 'next/link'

const DrawerMenu = () => (
  <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
    <div className="mb-4">
      <Link href="/" className="btn btn-ghost text-2xl gap-0">
        <span className="text-primary">T</span>roith
      </Link>
    </div>
    <DrawerItem href="/" icon={<HomeIcon />} text="Dashboard" />
    <DrawerItem href="/bills" icon={<FileTextIcon />} text="Bills" />
    <DrawerItem href="/challans" icon={<FileIcon />} text="Challans" />
    <DrawerItem href="/items" icon={<ArchiveIcon />} text="Items" />
    <DrawerItem href="/parties" icon={<RocketIcon />} text="Parties" />
    <DrawerItem href="/companies" icon={<BarChartIcon />} text="Companies" />
    <DrawerItem href="/units" icon={<RulerHorizontalIcon />} text="Units" />
    <DrawerItem href="/" icon={<AvatarIcon />} text="Profile" className="mt-auto" />
  </ul>
)
export const Drawer = ({ children }: PropsWithChildren) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id={elementIDs.mainDrawer} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content border-r overflow-x-scroll">
        <Navbar />
        {children}
      </div>
      <div className="drawer-side border-r">
        <label
          htmlFor={elementIDs.mainDrawer}
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <DrawerMenu />
      </div>
    </div>
  )
}
