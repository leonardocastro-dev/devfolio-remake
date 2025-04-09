import SnakeGame from '@/components/snake-game/snake-game'

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-grow">
      <div className="flex max-w-7xl w-full justify-between flex-grow gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-foreground mb-2">Hi all. I am</p>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Leonardo Castro
          </h1>
          <p className="text-chart-1 text-xl">&gt; Full-stack developer</p>

          <div className="space-y-2 mt-20">
            <p className="text-muted">// complete the game to continue</p>
            <p className="text-muted">
              // you can also see it on my Github page
            </p>
            <p>
              <span className="text-chart-1">const</span>{' '}
              <span className="text-chart-2">githubLink</span> ={' '}
              <span className="text-chart-5">
                &quot;https://github.com/leonardodecastro-dev&quot;
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
