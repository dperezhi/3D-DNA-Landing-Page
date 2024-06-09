import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Home, Project, Wetlab, Drylab, Human_Practices, Safety, Team } from "./pages"
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <main className="bg-slate-300/20">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/wetlab" element={<Wetlab/>}/>
                    <Route path="/drylab" element={<Drylab/>}/>
                    <Route path="/human_practices" element={<Human_Practices/>}/>
                    <Route path="/safety" element={<Safety/>}/>
                    <Route path="/team" element={<Team/>}/>
                </Routes>
            </Router>
        </main>
    )
}

export default App