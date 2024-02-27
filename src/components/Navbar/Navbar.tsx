'use client'
import { ThemeToggle } from '@/components/ThemeToggle'
import { AvatarIcon, DotsHorizontalIcon, ExitIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  const getHeroPath = (pathname: string): string => {
    const splittedPathname = pathname.split('/')
    return splittedPathname[1] ?? ''
  }

  return (
    <div className="sticky top-0 left-0 w-full z-20">
      <div className="navbar bg-base-100 w-full border-b gap-4">
        <h1 className="text-2xl ml-2 capitalize font-semibold">{getHeroPath(pathname)}</h1>
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
              <a>
                <AvatarIcon />
                Profile
              </a>
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
