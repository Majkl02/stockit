import EditLocationForm from '@/app/_components/Management/EditLocationForm'

export default async function EditPage({ params }) {
  const { id } = await params

  return <EditLocationForm locationId={id} />
}
