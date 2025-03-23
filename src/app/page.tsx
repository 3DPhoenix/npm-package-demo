'use server'

export default async function Home() {
  return (
    <ul>
      <li>
        <a href='/sidebar'>Sidebar</a>
      </li>
      <li>
        <a href='/navbar'>Navbar</a>
      </li>
    </ul>
  )
}
