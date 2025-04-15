import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardHeaderProps {
  title?: ReactNode
  headerSecondary?: ReactNode
  description?: ReactNode
  className?: string
}

interface CardTitleProps {
  title: ReactNode
  headerSecondary?: ReactNode
  className?: string
}

interface CardFooterProps {
  footerPrimary?: ReactNode
  footerSecondary?: ReactNode
  className?: string
  children?: ReactNode
}

export function Card({
  title,
  headerSecondary,
  description,
  footerPrimary,
  footerSecondary,
  className,
  children,
}: CardHeaderProps & CardFooterProps) {
  return (
    <div
      data-slot="card"
      className={cn('text-card-foreground flex flex-col', className)}
    >
      <CardHeader
        title={title}
        headerSecondary={headerSecondary}
        description={description}
      />

      <div
        data-slot="card-content"
        className={cn(
          'bg-card rounded-b-4xl border-x border-b px-6',
          footerPrimary && 'rounded-br-none',
        )}
      >
        <div className="bg-card relative z-[1] py-2">{children}</div>
      </div>

      <CardFooter
        footerPrimary={footerPrimary}
        footerSecondary={footerSecondary}
      />
    </div>
  )
}

function CardHeader({
  title,
  headerSecondary,
  description,
  className,
}: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn('flex min-h-6 flex-col', className)}
    >
      {title && (
        <CardTitlebar title={title} headerSecondary={headerSecondary} />
      )}
      <div
        data-slot="card-description"
        className={cn(
          'bg-card text-muted-foreground rounded-tr-4xl border-x border-t px-6 pb-4 text-sm',
          !title && 'rounded-tl-4xl',
        )}
      >
        <div className="bg-card relative z-[1] size-full pt-3">
          {description}
        </div>
      </div>
    </div>
  )
}

function CardTitlebar({ title, headerSecondary, className }: CardTitleProps) {
  return (
    <div data-slot="card-titlebar" className={cn('card-titlebar', className)}>
      <div className={cn('card-titlebar-title flex-auto')}>{title}</div>
      <div className={cn('card-titlebar-secondary')}>{headerSecondary}</div>
    </div>
  )
}

function CardFooter({
  footerPrimary,
  footerSecondary,
  className,
}: CardFooterProps) {
  return (
    <>
      {footerPrimary && (
        <div
          data-slot="card-footer"
          className={cn(
            'card-footer',
            !footerPrimary && 'bg-card rounded-b-4xl border border-t-0',
            className,
          )}
        >
          <div className="card-footer-secondary">{footerSecondary}</div>

          <div className="card-footer-primary">{footerPrimary}</div>
        </div>
      )}
    </>
  )
}
