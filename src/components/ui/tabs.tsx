import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn, getChildrenOfType } from '@/lib/utils'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const triggerList = getChildrenOfType(props.children, TabsList)
  const contents = getChildrenOfType(props.children, TabsContent)

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-1', className)}
      {...props}
    >
      {triggerList}
      <div>{contents}</div>
    </TabsPrimitive.Root>
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const triggers = getChildrenOfType(props.children, TabsTrigger).map(
    (child) => <div data-slot="tabs-trigger-wrapper">{child}</div>,
  )

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'text-muted-foreground inline-flex h-9 w-fit items-center gap-3 rounded-lg',
        className,
      )}
      {...props}
    >
      {triggers}
    </TabsPrimitive.List>
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={className}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={className}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
