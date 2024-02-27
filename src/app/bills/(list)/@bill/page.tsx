import SelectFromListSVG from '@/root/public/select-from-list.svg'
import Image from 'next/image'

export default function BillPageDefault() {
  return (
    <div className="pt-28">
      <div className="flex flex-col justify-center items-center text-center">
        <Image
          priority
          src={SelectFromListSVG}
          alt="Select from list image"
          className="w-40 h-auto mb-4"
        />
        <h1 className="text-xl mb-2 font-semibold">Empty here</h1>
        <p className="text-sm">👈 Select a bill form the list to sneek it!</p>
      </div>
    </div>
  )
}
