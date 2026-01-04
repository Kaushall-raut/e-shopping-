/* eslint-disable import/order */
/* eslint-disable sort-imports */
import { createRouter, Link } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {
      queryClient: new QueryClient(),
    },

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: 'intent',
    defaultNotFoundComponent: () => (
      <div>
        Not Found <Link to="/">Go back</Link>
      </div>
    ),
  })

  return router
}
