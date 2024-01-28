import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export const ThemeToggle = ({ className }: { className?: string }) => (
  <label className={`swap swap-rotate${className?.length ? ' ' + className : ''}`}>
    {/* this hidden checkbox controls the state */}
    <input type="checkbox" className="theme-controller" value="night" />
    <SunIcon className="swap-on fill-current w-6 h-6" />
    <MoonIcon className="swap-off fill-current w-6 h-6" />
  </label>
)
