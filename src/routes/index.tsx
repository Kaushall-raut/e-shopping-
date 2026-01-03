/* eslint-disable import/order */
import { ProductCard } from '@/components/ProductCard'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { sampleProducts } from '@/db/seed'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
  loader: () => {
    console.log('Server')
    return { products: sampleProducts.slice(0, 3) }
  },
})

function App() {
  const { products } = Route.useLoaderData()
  console.log(products)
  return (
    <div className="space-y-12 bg-linear-to-b from-slate-50 via-white to-slate-50 p-6">
      <section>
        <Card className=" p-8 shadow-md bg-white/80 ">
          <p>Your favourite e-Shop store</p>
          <CardTitle className="text-4xl font-bold leading-tight text-slate-900 dark:text-white ">
            <h1>E-shop - Your one-stop shop for all your needs</h1>
          </CardTitle>
          <CardDescription>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Browser Products
              <ArrowRightIcon size={16} />
            </Link>
          </CardDescription>
        </Card>
      </section>

      <section className="space-y-4 max-w-6xl mx-auto  ">
        <Card className="p-6 shadow-md bg-white/80">
          <div className="flex items-center justify-between">
            <div>
              <CardHeader className="px-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Recommend
                </p>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  Starter picks from the catalog
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-sm text-slate-600">
                Curated items to try the cart and detail pages quickly .
              </CardDescription>
            </div>
            <div>
              <Link
                to="/products"
                className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 sm:inline-flex transition hover:-translate-y-0.5"
              >
                View All <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((curr, index) => {
              return <ProductCard product={curr} />
            })}
          </div>
        </Card>
      </section>
    </div>
  )
}
