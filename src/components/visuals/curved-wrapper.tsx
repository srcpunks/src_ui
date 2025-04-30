import React, { ReactNode } from 'react'
import CurvedEdge from './curved-edge'

interface CurvedWrapperProps {
  remSize: number
  noLeftEdge?: boolean
  noRightEdge?: boolean
  inverted?: boolean
  children?: ReactNode
}

export default function CurvedWrapper({
  remSize,
  noLeftEdge,
  noRightEdge,
  inverted,
  children,
}: CurvedWrapperProps): React.ReactElement {
  return (
    <div data-slot="curved-wrapper" data-inverted={inverted}>
      {!noLeftEdge && (
        <CurvedEdge side="left" remSize={remSize} inverted={inverted} />
      )}
      {children}
      {!noRightEdge && (
        <CurvedEdge side="right" remSize={remSize} inverted={inverted} />
      )}
    </div>
  )
}
