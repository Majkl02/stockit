import OrganizationDetail from '@/app/_components/Management/OrganizationDetail'
import { getOrganizationById } from '@/app/_lib/data'

export default async function OrganizationDetailPage({ params }) {
  const { id } = await params
  const organization = await getOrganizationById(id)
  console.log('Organization detail:', organization)

  if (!organization) return <p>Loading...</p>

  return <OrganizationDetail organization={organization} />
}
