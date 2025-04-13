import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardHeaderProps {
  title?: ReactNode
  description?: ReactNode
  className?: string
}

interface CartTitleProps {
  title: ReactNode
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
      className={cn('flex min-h-6 flex-col', className)}
    >
      {(title ?? description) && (
        <>
          {title && <CardTitlebar title={title} />}
          <div
            data-slot="card-description"
            className={cn(
              'bg-card text-muted-foreground rounded-tl-4xl border-x border-t px-6 pt-7 pb-4 text-sm',
              !title && 'rounded-tr-4xl',
            )}
          >
            {description}
          </div>
        </>
      )}
    </div>
  )
}

function CardTitlebar({ title, className }: CartTitleProps) {
  return (
    <div data-slot="card-titlebar" className={cn('card-titlebar', className)}>
      <div className={cn('card-titlebar-title flex-auto')}>{title}</div>
      <div className={cn('card-titlebar-secondary')}></div>
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
        'card-footer',
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
