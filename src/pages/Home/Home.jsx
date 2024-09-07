import { Link } from "react-router-dom"
import HomeChart from "./Components/HomeChart"
import { UserInfoContext } from "../../UserInfoContext";
import { useContext } from "react";

function Home() {
    const { userInfo, } = useContext(UserInfoContext);
    return (
        <>
            <HomeChart />
            <div className="home-chartes">
                <h1>آمار کل</h1>
                <div className="home-chart-text">
                    <span style={{ color: "#3b82f6" }}>صحیح : {userInfo.good}</span>
                    <span style={{ color: "#8b5cf6" }}>غلط : {userInfo.bad}</span>
                </div>
                <Link to="/test" className="link">
                    <div className="home-start outlineStart">شروع</div>
                </Link>
            </div>
        </>
    )
}

export default Home