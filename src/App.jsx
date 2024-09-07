import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Nav from "./pages/Nav/Nav"
import { UserInfoProvider } from "./UserInfoContext"
import Footer from "./pages/Footer/Footer"
import Profile from "./pages/Profile/Profile"
import Test from "./pages/Test-page/Test"
import Add from "./pages/Add/Add"

function App() {


    return (
        <UserInfoProvider>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/hafeze/" element={<Home />} />
                    <Route path="/hafeze/profile" element={<Profile />} />
                    <Route path="/hafeze/test" element={<Test />} />
                    <Route path="/hafeze/add" element={<Add />} />
                </Routes>
                <Footer />
            </Router>
        </UserInfoProvider>
    )
}

export default App
