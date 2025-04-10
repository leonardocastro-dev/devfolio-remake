import Icon from '@/components/ui/icon'
import { Button } from '../../ui/button'
import { TOTAL_FOOD } from './constants'
import { GameControlsProps } from './types'

export function GameControls({ foodCollected, onSkip }: GameControlsProps) {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="rounded-lg bg-secondary-foreground/19 px-3 py-4">
          <p className="text-sm">// use keyboard</p>
          <p className="text-sm">// arrows to play</p>

          <div className="mt-4 grid grid-cols-3 gap-1">
            <div></div>
            <div className="arrow-key">
              <Icon icon="arrow" />
            </div>
            <div></div>
            <div className="arrow-key">
              <Icon icon="arrow" className="rotate-270" />
            </div>
            <div className="arrow-key">
              <Icon icon="arrow" className="rotate-180" />
            </div>
            <div className="arrow-key">
              <Icon icon="arrow" className="rotate-90" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm">// food left</p>
          <div className="inline-grid grid-cols-5 gap-2 mt-2">
            {Array.from({ length: TOTAL_FOOD }).map((_, i) => (
              <div
                key={i}
                className={`p-[3px] bg-chart-2/10 rounded-full ${i >= foodCollected && 'opacity-30'}`}
              >
                <div className="p-[3.35px] bg-chart-2/20 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-chart-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button onClick={onSkip} variant="outline" className="self-end">
        skip
      </Button>
    </div>
  )
}
