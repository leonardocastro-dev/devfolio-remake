import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex border-b border-border">
      <div className="flex-none px-6 py-4 border-r border-border">
        leonardo-castro
      </div>
      <Link href="#" className="nav-link active">
        _hello
      </Link>
      <Link href="#" className="nav-link">
        _about-me
      </Link>
      <Link href="#" className="nav-link">
        _projects
      </Link>
      <div className="flex-grow"></div>
      <Link href="#" className="nav-link border-l">
        _contact-me
      </Link>
    </nav>
  )
}
