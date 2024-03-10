import { expect, test } from 'vitest'

import { cn } from './cn'

test('combination of tailwind-merge with clsx', () => {
  expect(cn(['p-5 p-2 p-4', true && 'bottom-auto'])).toBe('p-4 bottom-auto')
})
