import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounder-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">
                Project Logo
            </p>
        </NavLink>
        <NavLink to="https://ubcigem.com/" className="w-10 h-10 rounder-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">
                UBC igem Logo 
            </p>
        </NavLink>
        <nav className="flex-text-lg gap-7 font-medium">
            <NavLink to="/project" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Project 
            </NavLink>
        </nav>
        <nav className="flex-text-lg gap-7 font-medium">
            <NavLink to="/wetlab" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Wetlab 
            </NavLink>
        </nav>
        <nav className="flex-text-lg gap-7 font-medium">
            <NavLink to="/drylab" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Drylab 
            </NavLink>
        </nav>
        <nav className="flex-text-lg gap-7 font-medium">
            <NavLink to="/human_practices" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Human Practice 
            </NavLink>
        </nav>
        <nav className="flex-text-lg gap-7 font-medium">
            <NavLink to="/safety" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Safety
            </NavLink>
        </nav>
        <nav className="flex-text-lg gap-7 font-medium">
            <NavLink to="/team" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Team
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar