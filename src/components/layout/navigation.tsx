import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex border-b border-border">
      <span className="flex items-center text-muted px-6 py-4">
        leonardo-castro
      </span>
      <div className="flex justify-center flex-grow">
        <div className="max-w-7xl w-full">
          <ul className="flex">
            <li>
              <Link href="#" className="nav-link active">
                _hello
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link">
                _about-me
              </Link>
            </li>
            <li>
              <Link href="#" className="border-r nav-link">
                _projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link href="#" className="nav-link">
        _contact-me
      </Link>
    </nav>
  )
}
