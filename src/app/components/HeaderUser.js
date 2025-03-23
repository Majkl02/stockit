export default function HeaferUser() {
  return (
    <div className='flex w-46 flex-col rounded-md bg-blue-800'>
      <span className='px-4 py-2'>Michal Januska</span>
      <div className='flex w-full gap-5'>
        <a href='#' className='rounded-md bg-blue-700 px-4 py-2'>
          Profile
        </a>
        <a href='#' className='rounded-md bg-blue-700 px-4 py-2'>
          Log out
        </a>
      </div>
    </div>
  )
}
