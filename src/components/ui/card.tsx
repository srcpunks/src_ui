import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('text-card-foreground flex flex-col', className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'bg-card flex flex-col gap-1.5 rounded-t-4xl border border-b-0 px-6 pt-6 pb-3',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        'bg-card rounded-br-4xl border border-t-0 px-6 pt-3 pb-2',
        className,
      )}
      {...props}
    />
  )
}

interface CardFooterProps extends React.ComponentProps<'div'> {
  leftSlot?: React.ReactNode
  rightSlot: React.ReactNode
  fitRight?: boolean
}

function CardFooter({
  className,
  leftSlot,
  rightSlot,
  fitRight,
  ...props
}: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'relative flex items-center justify-between pb-6',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'card-footer-left flex items-center justify-center rounded-br-4xl rounded-bl-4xl px-4 py-2.5',
          fitRight && 'flex-auto',
        )}
      >
        {leftSlot}
      </div>

      <div
        className={cn(
          'card-footer-right px-4 py-2.5',
          !fitRight && 'flex-auto',
        )}
      >
        {rightSlot}
      </div>
    </div>
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
