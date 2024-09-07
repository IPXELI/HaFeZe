import { useContext, useEffect, useState } from "react";
import AnswerBox from "./AnswerBox";
import { UserInfoContext } from "../../UserInfoContext";

function Test() {
    const wordsData = JSON.parse(localStorage.getItem("wordsdata"));

    const [time, setTime] = useState(0);
    const [randomWord, setRandomWord] = useState("");
    const [randomAnswer, setRandomAnswer] = useState("");
    const [refresh, setRefresh] = useState(false);

    const data = { randomAnswer };
    const { userInfo } = useContext(UserInfoContext);

    useEffect(() => {
        if (wordsData && wordsData.length > 0) {  // Check if wordsData is valid
            var randomIndex = Math.floor(Math.random() * wordsData.length);  // Fix random index calculation
            setRandomWord(wordsData[randomIndex].english);
            setRandomAnswer(wordsData[randomIndex].persian);
        } else {
            console.error("wordsData is empty or not available.");
        }
    }, [refresh]);

    const handleAnswerClick = () => {
        setRefresh(!refresh);  // Toggle refresh state
    };

    return (
        <div className="test">
            <div className="upper-test">
                <h2>{randomWord}</h2>
                <div style={{ width: `${time}%` }} className="upper-test-timer"></div>
            </div>
            <div className="lower-test">
                <AnswerBox data={data} onAnswerClick={handleAnswerClick} />  {/* Pass function */}
            </div>
            <div className="mb">
                <div className="home-chart-text">
                    <span style={{ color: "#3b82f6" }}>صحیح : {userInfo.good}</span>
                    <span style={{ color: "#8b5cf6" }}>غلط : {userInfo.bad}</span>
                </div>
            </div>
        </div>
    );
}

export default Test;