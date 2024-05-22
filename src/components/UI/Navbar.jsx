export default function Navbar({ apexLinks, elevatedLinks }) {
  let pathname = window.location.pathname
  pathname = pathname.split('/')

  return (
    pathname.includes("apex") ? (
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
