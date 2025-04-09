import SnakeGame from '@/components/layout/snake-game/snake-game'

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-grow">
      <div className="flex max-w-7xl w-full justify-between flex-grow gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-lg text-foreground mb-2">Hi all. I am</p>
          <h1 className="font-retina text-6xl mb-4 -ml-1.5">
            Leonardo Castro
          </h1>
          <p className="text-chart-1 text-3xl">&gt; Full-stack developer</p>

          <div className="space-y-2 mt-20">
            <p className="text-muted">// complete the game to continue</p>
            <p className="text-muted">
              // you can also see it on my Github page
            </p>
            <p className="font-medium">
              <span className="text-chart-1">const</span>{' '}
              <span className="text-chart-2">githubLink</span> ={' '}
              <span className="text-chart-5">
                &quot;<a href="https://github.com/leonardocastro-dev" target="_blank" className="hover:underline">https://github.com/leonardocastro-dev</a>&quot;
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <SnakeGame />
        </div>
      </div>
    </main>
  )
}
