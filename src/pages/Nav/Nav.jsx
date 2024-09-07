import { useContext, useState } from "react"
import { UserInfoContext } from "../../UserInfoContext";
import Menu from "./Components/Menu";
import { Link } from "react-router-dom";

function Nav() {
    const [welcome, setWelecome] = useState(true)
    function welcomefun() {
        setWelecome(false)
    }


    const [menuOpened, setMenuOpened] = useState(true)

    function openMenu() {
        setMenuOpened(t => t = !t)
        const menu = document.querySelector(".menu")
        if (menuOpened) {
            menu.style.visibility = "visible"
            menu.style.left = "0px"
            menu.style.filter = "blur(0px)"
        } else {
            menu.style.left = "-50%"
            menu.style.filter = "blur(5px)"
            menu.style.visibility = "hidden"
        }
    }
    const { userInfo } = useContext(UserInfoContext)
    return (
        <>
            <Menu data={{ openMenu }} />

            <div className="nav">
                <div onClick={openMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <h1>HaFeZe</h1>
            </div>
            {welcome && <div className="welecome">
                <span>{userInfo.name} خوش اومدی</span>

                <div className="wel-icon-box">
                    <svg onClick={welcomefun} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="wel-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>}

        </>
    )
}

export default Nav