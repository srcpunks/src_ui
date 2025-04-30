import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn, getChildrenOfType } from '@/lib/utils'
import CurvedWrapper from '../visuals/curved-wrapper'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const triggerList = getChildrenOfType(props.children, TabsList)
  const contents = getChildrenOfType(props.children, TabsContent)

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col', className)}
      {...props}
    >
      {triggerList}
      <div data-slot="tabs-content-wrapper">{contents}</div>
    </TabsPrimitive.Root>
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const triggers = getChildrenOfType(props.children, TabsTrigger).map(
    (child) => {
      const typedChild =
        child as React.ReactElement<TabsPrimitive.TabsTriggerProps>
      return (
        <div data-slot="tabs-trigger-wrapper" key={typedChild.key}>
          {child}
        </div>
      )
    },
  )

  return (
    <TabsPrimitive.List data-slot="tabs-list" className={className} {...props}>
      {triggers}
    </TabsPrimitive.List>
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <CurvedWrapper remSize={2.5} accent>
      <TabsPrimitive.Trigger
        data-slot="tabs-trigger"
        className={className}
        {...props}
      />
    </CurvedWrapper>
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
