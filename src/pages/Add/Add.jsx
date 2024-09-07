import { useState } from "react"
import { wordsDataDefalut } from "../../Data/wordsData"

function Add() {
    const [newWord, setNewWord] = useState({ english: null, persian: null })
    const wordsData = JSON.parse(localStorage.getItem("wordsdata"))
    function addWord() {
        wordsData.push(newWord)
        localStorage.setItem("wordsdata", JSON.stringify(wordsData))
        console.log(JSON.parse(localStorage.getItem("wordsdata")));
    }
    function removeWord() {
        localStorage.setItem("wordsdata", JSON.stringify(wordsDataDefalut))
        window.location.reload()
    }
    return (
        <>
            <div className="profile">
                <h1>اضافه کردن کلمه</h1>
                <h2>انگلیسی</h2>
                <input
                    type="text"
                    maxLength={9}
                    onChange={(t) => setNewWord({ ...newWord, english: t.target.value })}
                />
                <h2>فارسی</h2>
                <input
                    type="text"
                    maxLength={9}
                    onChange={(t) => setNewWord({ ...newWord, persian: t.target.value })}
                />
                <div style={{ textAlign: "center", marginTop: "10px" }} onClick={() => addWord()} className="btn">تایید</div>
                <div style={{ textAlign: "center", marginTop: "10px" }} onClick={() => removeWord()} className="btn">حذف همه کلمات<br />اضافه شده</div>
            </div>
        </>
    )
}

export default Add