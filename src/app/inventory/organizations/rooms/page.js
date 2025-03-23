import BackButton from '@/app/components/BackButton'
import Room from '@/app/components/Room'

export default function Rooms() {
  return (
    <>
      <BackButton />
      <div className='flex gap-2 p-10'>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </>
  )
}
