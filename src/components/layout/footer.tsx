import Icon from '../ui/icon'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <nav className='flex justify-between'>
        <div className="flex">
          <span className="text-muted px-3.5 py-3">find me in:</span>
          <ul className="flex">
            <li>
              <Link
                href="https://www.linkedin.com/in/leonardocastro-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-r border-l px-3.5 py-3 flex group"
              >
                <Icon
                  icon="linkedin"
                  className="group-hover:fill-white transition-colors duration-200"
                  currentColor="var(--muted)"
                />
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="https://github.com/leonardocastro-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted border-l px-3.5 py-3 flex hover:text-white gap-2 group transition-colors duration-200"
        >
          @leonardocastro-dev
          <Icon
            icon="github"
            className="group-hover:fill-white transition-colors duration-200"
            currentColor="var(--muted)"
          />
        </Link>
      </nav>
    </footer>
  )
}
