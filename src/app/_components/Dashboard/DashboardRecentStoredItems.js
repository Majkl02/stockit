import Item from '../Item/Item'
// TODO: Replace with actual data fetching logic
export default function DashboardRecentStoredItems() {
  const recentItems = [
    {
      id: 1,
      name: 'Dell Latitude 5490',
      location: 'Lab A',
      organization: 'FIIT STU'
    },
    {
      id: 2,
      name: 'Logitech Mouse',
      location: 'Storage B',
      organization: 'FEI STU'
    },
    {
      id: 3,
      name: 'HP EliteBook',
      location: 'Room C101',
      organization: 'STUBA'
    },
    {
      id: 4,
      name: 'Asus Monitor',
      location: 'Office 22',
      organization: 'FMFI UK'
    },
    {
      id: 5,
      name: 'Lenovo Dock',
      location: 'Sklad 5',
      organization: 'STU Central'
    }
  ]

  return (
    <div className='rounded-2xl bg-white p-8 text-gray-700 shadow-lg'>
      <h2 className='mb-6 text-3xl font-bold'>Recently Stored Items</h2>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
        {recentItems.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            location={item.location}
            organization={item.organization}
          />
        ))}
      </div>
    </div>
  )
}
