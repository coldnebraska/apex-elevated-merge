export default function Navbar({ links }) {
  return (
    <nav>
      {links.map((link) => link)}
    </nav>
  )
}
