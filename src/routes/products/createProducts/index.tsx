import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/createProducts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/products/createProducts/"!</div>
}
