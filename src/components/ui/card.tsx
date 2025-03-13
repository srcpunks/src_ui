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
          'bg-card border-x px-6 pt-3 pb-2',
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
      className={cn(
        'bg-card flex min-h-6 flex-col gap-1.5 rounded-t-4xl border border-b-0',
        className,
      )}
    >
      {(title ?? description) && (
        <div className="p-6 pb-3">
          <div data-slot="card-title" className="leading-none font-semibold">
            {title}
          </div>
          <div
            data-slot="card-description"
            className="text-muted-foreground text-sm"
          >
            {description}
          </div>
        </div>
      )}
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
