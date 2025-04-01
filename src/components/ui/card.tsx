import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardHeaderProps {
  title?: ReactNode
  description?: ReactNode
  className?: string
}

interface CardFooterProps {
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
  fitPrimaryAction?: boolean
  className?: string
  children?: ReactNode
}

export function Card({
  title,
  description,
  primaryAction,
  secondaryAction,
  fitPrimaryAction,
  className,
  children,
}: CardHeaderProps & CardFooterProps) {
  return (
    <div
      data-slot="card"
      className={cn('text-card-foreground flex flex-col', className)}
    >
      <CardHeader title={title} description={description} />

      <div
        data-slot="card-content"
        className={cn(
          'bg-card border-x px-6 py-2',
          primaryAction && 'rounded-br-4xl border-b',
        )}
      >
        {children}
      </div>

      <CardFooter
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        fitPrimaryAction={fitPrimaryAction}
      />
    </div>
  )
}

function CardHeader({ title, description, className }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn('flex min-h-6 flex-col gap-1.5', className)}
    >
      {(title ?? description) && (
        <div className="pt-6">
          <CardTitle title={title} />
          <div
            data-slot="card-description"
            className="bg-card text-muted-foreground rounded-t-4xl border-x border-t px-6 pt-3 pb-4 text-sm"
          >
            {description}
          </div>
        </div>
      )}
    </div>
  )
}

function CardTitle({ title, className }: CardHeaderProps) {
  return (
    <div
      data-slot="card-title"
      className={cn('pb-1 pl-6 text-lg leading-none font-semibold', className)}
    >
      {title}
    </div>
  )
}

function CardFooter({
  primaryAction,
  secondaryAction,
  fitPrimaryAction,
  className,
}: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'relative flex items-center justify-between pb-6',
        !primaryAction && 'bg-card rounded-b-4xl border border-t-0',
        className,
      )}
    >
      {primaryAction && (
        <>
          <div
            className={cn(
              'card-footer-secondary',
              fitPrimaryAction && 'flex-auto',
            )}
          >
            {secondaryAction}
          </div>

          <div
            className={cn(
              'card-footer-primary',
              !fitPrimaryAction && 'flex-auto',
            )}
          >
            {primaryAction}
          </div>
        </>
      )}
    </div>
  )
}
