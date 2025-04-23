import EditOrganizationForm from '@/app/_components/EditOrganizationForm'

export default async function EditPage({ params }) {
  const { id } = await params

  return <EditOrganizationForm orgId={id} />
}
