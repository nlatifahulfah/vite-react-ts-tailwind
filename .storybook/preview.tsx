import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Preview } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initialize, mswLoader } from 'msw-storybook-addon'

import '../src/index.css'

import React from 'react'

// Initialize MSW
initialize()

const customViewports = {
  galaxys9: {
    name: 'Galaxy S9',
    styles: {
      width: '360px',
      height: '740px'
    }
  }
}

const queryClient = new QueryClient()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      toc: true
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports
      }
    }
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ]
}

export default preview
