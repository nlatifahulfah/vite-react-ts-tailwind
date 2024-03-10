import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// https://askides.com/articles/create-react-components-with-tailwind-like-a-pro#:~:text=The%20function%20cn%20is%20a,styling%20more%20consistent%20and%20maintainable
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
