import React from 'react'

interface CurvedEdgeProps {
  side: 'right' | 'left'
  remSize: number
  inverted?: boolean
}

export default function CurvedEdge({
  side,
  remSize,
  inverted,
}: CurvedEdgeProps): React.ReactElement {
  const sizeHalf = remSize / 2
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    height: `${remSize}rem`,
    width: `${remSize}rem`,
    borderBottomLeftRadius:
      !inverted && side === 'right' ? `${sizeHalf}rem` : undefined,
    borderBottomRightRadius:
      !inverted && side === 'left' ? `${sizeHalf}rem` : undefined,
    borderTopLeftRadius:
      inverted && side === 'right' ? `${sizeHalf}rem` : undefined,
    borderTopRightRadius:
      inverted && side === 'left' ? `${sizeHalf}rem` : undefined,
  }

  const fgStyle: React.CSSProperties = {
    ...baseStyle,
    zIndex: 2,
    bottom: !inverted ? '-1px' : undefined,
    top: inverted ? '-1px' : undefined,
    right: side === 'right' ? `1px` : undefined,
    left: side === 'left' ? `1px` : undefined,
    boxShadow: `0 ${inverted ? sizeHalf * -1 : sizeHalf}rem var(--card)`,
  }

  const bgStyle: React.CSSProperties = {
    ...baseStyle,
    zIndex: 1,
    bottom: !inverted ? 0 : undefined,
    top: inverted ? 0 : undefined,
    right: side === 'right' ? `${remSize * -1}rem` : undefined,
    left: side === 'left' ? `${remSize * -1}rem` : undefined,
    boxShadow: `0 ${inverted ? sizeHalf * -1 : sizeHalf}rem var(--border)`,
  }

  return (
    <div style={bgStyle} data-slot={`${side}-curved-edge`}>
      <div style={fgStyle} />
    </div>
  )
}
