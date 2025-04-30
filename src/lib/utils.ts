import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
  Children,
  FunctionComponent,
  isValidElement,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ReactChild =
  | string
  | number
  | bigint
  | ReactElement<unknown, string | JSXElementConstructor<unknown>>
  | Iterable<ReactNode>
  | ReactPortal
  | Promise<unknown>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FComponent = FunctionComponent<any>

export function isChildOfType(
  child: ReactChild,
  componentType: FComponent,
): boolean {
  const componentName = componentType.displayName || componentType.name
  if (!isValidElement(child)) return false

  const childName =
    (child.type as FunctionComponent).displayName ||
    (child.type as FunctionComponent).name ||
    'Unknown'

  return childName === componentName
}

export function hasComponentInChildren(
  children: ReactNode,
  componentType: FComponent,
): boolean {
  return Children.toArray(children).some((child: ReactChild) =>
    isChildOfType(child, componentType),
  )
}

export function getChildrenOfType(
  children: ReactNode,
  componentType: FComponent,
): ReturnType<typeof Children.toArray> {
  return Children.toArray(children).filter((child: ReactChild) =>
    isChildOfType(child, componentType),
  )
}
