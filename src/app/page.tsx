'use client'

import SnakeGame from '@/components/layout/snake-game'
import TextType from '@/components/ui/text-type'
import { useIsMobile } from './hooks/useIsMobile'

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <section className="flex flex-col pt-24 pb-20 lg:py-0 justify-center items-center overflow-hidden px-8 h-full">
      <div className="relative flex max-w-7xl w-full items-center lg:justify-between justify-center flex-grow gap-8">
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
            <p className="lg:text-chart-1 text-chart-2 text-xl lg:text-3xl">
              &gt; Full-stack developer
            </p>
          </div>

          <div className="lg:space-y-2 space-y-4 lg:mt-20">
            <p className="lg:block hidden text-muted-foreground">
              {'// complete the game to continue'}
            </p>
            <p className="text-muted-foreground">
              {isMobile
                ? '// find my profile on Github:'
                : '// you can also see it on my Github page'}
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
        <section className="lg:relative absolute">
          <div className="blur-effect-1">
            <svg
              className="w-full h-full"
              width="516"
              height="436"
              viewBox="0 0 516 436"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M499.469 84.4819L515.984 303.861L481.759 408.726L311.295 435.598L239.003 274.57L123.588 313.343L10.0585 137.368L-5.74887e-05 3.74637L278.567 0.827732L349.099 111.846L499.469 84.4819Z"
                fill="#43D9AD"
              />
            </svg>
          </div>
          <div className="blur-effect-2">
            <svg
              className="w-full h-full"
              width="534"
              height="483"
              viewBox="0 0 534 483"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M303.946 482.519L90.0317 431.132L0.663448 366.469L27.2261 195.957L202.649 176.39L201.041 54.6473L403.309 0.391736L533.602 31.6911L451.165 297.797L323.892 330.987L303.946 482.519Z"
                fill="#4D5BCE"
              />
            </svg>
          </div>
          <SnakeGame />
        </section>
      </div>
    </section>
  )
}
