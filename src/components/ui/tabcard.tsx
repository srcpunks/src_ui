import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn, getChildrenOfType } from '@/lib/utils'
import CurvedWrapper from '../visuals/curved-wrapper'

function Tabcard({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const triggerList = getChildrenOfType(props.children, TabcardList)
  const contents = getChildrenOfType(props.children, TabcardContent)

  return (
    <TabsPrimitive.Root
      data-slot="tabcard"
      className={cn('flex flex-col', className)}
      {...props}
    >
      {triggerList}
      <div data-slot="tabcard-content-wrapper">{contents}</div>
    </TabsPrimitive.Root>
  )
}

function TabcardList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const triggers = getChildrenOfType(props.children, TabcardTrigger).map(
    (child) => {
      const typedChild =
        child as React.ReactElement<TabsPrimitive.TabsTriggerProps>
      return (
        <div data-slot="tabcard-trigger-wrapper" key={typedChild.key}>
          {child}
        </div>
      )
    },
  )

  return (
    <TabsPrimitive.List
      data-slot="tabcard-list"
      className={className}
      {...props}
    >
      {triggers}
    </TabsPrimitive.List>
  )
}

function TabcardTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <CurvedWrapper remSize={2}>
      <TabsPrimitive.Trigger
        data-slot="tabcard-trigger"
        className={className}
        {...props}
      />
    </CurvedWrapper>
  )
}

function TabcardContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabcard-content"
      className={className}
      {...props}
    />
  )
}

export { Tabcard, TabcardList, TabcardTrigger, TabcardContent }
