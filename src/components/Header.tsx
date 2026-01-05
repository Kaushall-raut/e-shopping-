import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { ShoppingBag } from 'lucide-react'

const getCartItemsCount = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { getCartItemsCount } = await import('@/data/cart.server')
    const data = await getCartItemsCount()
    return data
  },
)

export default function Header() {
  const {data:cartItemsData}=useQuery({
    queryKey:['cart-items-count'],
    queryFn:()=> getCartItemsCount()
  })
  return (
    <header
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 
      backdrop-blur dark:border-slate-800 dark:bg-slate-950/80
      "
    >
      <div className="flex mx-auto max-w-6xl items-center gap-3 py-4 px-3  justify-between ">
        <div className="flex gap-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-800">
              <ShoppingBag size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                E-Shop
              </span>
            </div>
          </Link>
          <nav className=" hidden items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200 sm:flex ">
            <Link
              className="rounded-lg px-3 py-1 transition  hover:bg-slate-100 dark:hover:bg-slate-800"
              to="/"
            >
              Home
            </Link>
            <Link
              className="rounded-lg px-3 py-1 transition  hover:bg-slate-100 dark:hover:bg-slate-800"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="rounded-lg px-3 py-1 transition  hover:bg-slate-100 dark:hover:bg-slate-800"
              to="/products/create-product"
            >
              Create Product
            </Link>
          </nav>
        </div>
        <div className="  flex items-center gap-2">
          <Link
            to="/cart"
            className=" inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span>cart</span>
            <span className="flex  h-6 min-w-6 items-center justify-center rounded-full bg-slate-900 text-white px-2 text-[11px] font-bold">
              {cartItemsData?.count ?? 0}
            </span>
            <span className="hidden text-[11px] font-medium text-slate-500 sm:inline ">
              ${
                cartItemsData?.total.toFixed(2) ?? 0
              }
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
