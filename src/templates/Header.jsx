import { Link, Outlet } from 'react-router-dom'

function Header () {
  return (
    <>
    <nav>
      <Link to={"/projects"}> Proyectos</Link> | 
      <Link to={"/resume"}> Curriculum</Link>
    </nav>
    <Outlet />
    </>

  )
}

export default Header