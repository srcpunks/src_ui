import React, { ReactNode } from 'react'
import CurvedEdge from './curved-edge'

interface CurvedWrapperProps {
  remSize: number
  noLeftEdge?: boolean
  noRightEdge?: boolean
  inverted?: boolean
  children?: ReactNode
  accent?: boolean
}

export default function CurvedWrapper({
  remSize,
  noLeftEdge,
  noRightEdge,
  inverted,
  children,
  accent,
}: CurvedWrapperProps): React.ReactElement {
  return (
    <div
      data-slot="curved-wrapper"
      data-inverted={inverted}
      data-accent={accent}
    >
      {!noLeftEdge && (
        <CurvedEdge
          side="left"
          remSize={remSize}
          inverted={inverted}
          accent={accent}
        />
      )}
      {children}
      {!noRightEdge && (
        <CurvedEdge
          side="right"
          remSize={remSize}
          inverted={inverted}
          accent={accent}
        />
      )}
    </div>
  )
}
