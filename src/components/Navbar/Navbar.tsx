'use client'
import { ThemeToggle } from '@/components/ThemeToggle'
import { AvatarIcon, DotsHorizontalIcon, ExitIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full">
      <div className="navbar bg-base-100 w-full border-b gap-4">
        <ThemeToggle className="ml-auto" />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-link">
            <DotsHorizontalIcon className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow mt-2 bg-base-100 rounded-lg w-52"
          >
            <li>
              <Link href="/bills/details/123">
                <AvatarIcon />
                Profile
              </Link>
            </li>
            <li>
              <a className="text-error">
                <ExitIcon />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
