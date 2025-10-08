'use client'

import SnakeGame from '@/components/layout/snake-game'
import TextType from '@/components/ui/text-type'
import { useIsMobile } from './hooks/useIsMobile'

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <section className="flex flex-col pt-24 pb-20 lg:py-0 justify-center items-center overflow-hidden px-8 h-full">
      <div className="flex max-w-7xl w-full items-center lg:justify-between justify-center flex-grow gap-8">
        <header className="flex flex-col h-full justify-between lg:justify-center">
          <div>
            <p className="text-lg text-primary-foreground mb-2">
              Hello everyone. I am
            </p>
            <TextType
              text="Leonardo Castro"
              typingSpeed={75}
              className="font-retina text-6xl mb-4 -ml-1.5"
              as="h1"
              cursorCharacter="_"
            />
            <p className="lg:text-chart-1 text-chart-2 text-xl lg:text-3xl">&gt; Full-stack developer</p>
          </div>

          <div className="lg:space-y-2 space-y-4 lg:mt-20">
            <p className="lg:block hidden text-muted-foreground">
              // complete the game to continue
            </p>
            <p className="text-muted-foreground">
              {isMobile ? '// find my profile on Github:' : '// you can also see it on my Github page'}
            </p>
            <p className="font-medium">
              <span className="text-chart-1">const</span>{' '}
              <span className="text-chart-2">githubLink</span> ={' '}
              <span className="text-chart-5">
                &quot;
                <a
                  href="https://github.com/leonardocastro-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  https://github.com/leonardocastro-dev
                </a>
                &quot;
              </span>
            </p>
          </div>
        </header>
        <SnakeGame />
      </div>
    </section>
  )
}
