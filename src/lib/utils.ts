import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
  Children,
  ComponentClass,
  FunctionComponent,
  isValidElement,
  ReactNode,
} from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hasComponentInChildren(
  children: ReactNode,
  componentType: FunctionComponent,
): boolean {
  const componentName = componentType.name // Extract component name

  return Children.toArray(children).some((child) => {
    if (!isValidElement(child)) return false

    // Check both .name (for functional/class components) and displayName (for wrapped components)
    const childName =
      (child.type as FunctionComponent).name ||
      (child.type as ComponentClass).displayName ||
      'Unknown'

    return childName === componentName
  })
}
