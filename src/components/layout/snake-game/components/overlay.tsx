import { Button } from '../../../ui/button'
import { GRID_SIZE, config } from '../constants'
import { OverlayProps } from '../types'
import { cn } from '@/lib/utils'
export function Overlay({ type, onAction }: OverlayProps) {
  const { title, buttonText, titleColor } = config[type]

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {(type === 'gameOver' || type === 'gameWon') && (
        <div
          className={cn(
            'bg-primary-500/84 py-3 rounded-lg text-2xl w-full text-center absolute text-nowrap left-1/2 transform -translate-x-1/2',
            titleColor
          )}
          style={{
            boxShadow: 'inset 1px 5px 11px 0 rgba(2, 18, 27, 0.71)',
            bottom: `${7 * GRID_SIZE + 44}px`
          }}
        >
          {title}
        </div>
      )}

      {type === 'start' ? (
        <Button
          onClick={onAction}
          variant="secondary"
          className="absolute"
          style={{
            bottom: `${7 * GRID_SIZE}px`
          }}
        >
          {buttonText}
        </Button>
      ) : (
        <button
          onClick={onAction}
          className={cn(
            'text-sm cursor-pointer absolute left-1/2 transform -translate-x-1/2',
            type === 'gameWon' && 'text-muted-foreground'
          )}
          style={{
            bottom: `${7 * GRID_SIZE}px`
          }}
        >
          {buttonText}
        </button>
      )}
    </div>
  )
}
