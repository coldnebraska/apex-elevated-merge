export default function Navbar({ apexLinks, elevatedLinks }) {
  const pathname = window.location.pathname

  return (
    pathname === "/apex" ? (
      <nav>
        {apexLinks.map((link) => link)}
      </nav>
    ) : (
      <nav>
        {elevatedLinks.map((link) => link)}
      </nav>
    )
  )
}
