import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="z-10 header">
        <NavLink to="/" className="flex items-center justify-center w-10 h-10 font-bold bg-white shadow-md rounder-lg">
            <p className="blue-gradient_text">
                Project Logo
            </p>
        </NavLink>
        <NavLink to="https://ubcigem.com/" className="flex items-center justify-center w-10 h-10 font-bold bg-white shadow-md rounder-lg">
            <p className="blue-gradient_text">
                UBC igem Logo 
            </p>
        </NavLink>
        <nav className="font-medium flex-text-lg gap-7">
            <NavLink to="/project" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Project 
            </NavLink>
        </nav>
        <nav className="font-medium flex-text-lg gap-7">
            <NavLink to="/wetlab" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Wetlab 
            </NavLink>
        </nav>
        <nav className="font-medium flex-text-lg gap-7">
            <NavLink to="/drylab" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Drylab 
            </NavLink>
        </nav>
        <nav className="font-medium flex-text-lg gap-7">
            <NavLink to="/human_practices" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Human Practice 
            </NavLink>
        </nav>
        <nav className="font-medium flex-text-lg gap-7">
            <NavLink to="/safety" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Safety
            </NavLink>
        </nav>
        <nav className="font-medium flex-text-lg gap-7">
            <NavLink to="/team" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Team
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar