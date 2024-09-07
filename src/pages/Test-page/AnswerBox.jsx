import { useContext, useState, useEffect } from "react";
// import { wordsData } from "../../Data/wordsData";
import { UserInfoContext } from "../../UserInfoContext";

function AnswerBox({ data, onAnswerClick }) {
    const { userInfo, addGood, addBad } = useContext(UserInfoContext);
    const { randomAnswer } = data;

    const wordsData = JSON.parse(localStorage.getItem("wordsdata"))
    // State to store shuffled answers
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    // Shuffle the answers only once when the component mounts or when randomAnswer changes
    useEffect(() => {

        const answers = [
            <div className="test-answer" key={1} onClick={(t) => handleAnswerClick(t, true)}>{randomAnswer}</div>,
            <div className="test-answer" key={2} onClick={(t) => handleAnswerClick(t, false)}>{wordsData[Math.floor(Math.random() * wordsData.length)].persian}</div>,
            <div className="test-answer" key={3} onClick={(t) => handleAnswerClick(t, false)}>{wordsData[Math.floor(Math.random() * wordsData.length)].persian}</div>,
            <div className="test-answer" key={4} onClick={(t) => handleAnswerClick(t, false)}>{wordsData[Math.floor(Math.random() * wordsData.length)].persian}</div>,
        ];

        // Shuffle the answers array using the Fisher-Yates algorithm
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }

        setShuffledAnswers(answers);
    }, [randomAnswer]);  // Depend on randomAnswer so it only shuffles when the answer changes

    // Handle answer click with delay
    function handleAnswerClick(t, isCorrect) {
        if (isCorrect) {
            addGood();
            t.target.style.boxShadow = "0 3px 20px 2px #06b632b9";
            t.target.style.borderColor = "#06b632b9";
        } else {
            addBad();
            t.target.style.boxShadow = "0 3px 20px 2px #b93602cb";
            t.target.style.borderColor = "#b93602cb";
        }

        setTimeout(() => {
            onAnswerClick();  // Trigger re-render in Test component after delay
            t.target.style.boxShadow = "0 3px 20px 2px #fb87592a";
            t.target.style.borderColor = "var(--secondry1-color)";
        }, 500);  // 1-second delay
    }

    // Render the shuffled array
    return (
        <>
            {shuffledAnswers.map(a => a)}
        </>
    );
}

export default AnswerBox;