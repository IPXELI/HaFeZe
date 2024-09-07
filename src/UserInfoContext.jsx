import { createContext, useEffect, useState } from "react";


export const UserInfoContext = createContext(null);



export function UserInfoProvider({ children }) {

    const [userInfo, setUserInfo] = useState(() => {
        const storedUserInfo = localStorage.getItem("userinfo");

        return storedUserInfo ? JSON.parse(storedUserInfo) : {
            name: `Guest${Math.floor(Math.random() * 99999)}`,
            good: 0,
            bad: 0
        };
    });
    function addGood() {
        setUserInfo(prev => ({ ...prev, good: prev.good + 1 }))
    }
    function addBad() {
        setUserInfo(prev => ({ ...prev, bad: prev.bad + 1 }))
    }
    useEffect(() => {
        localStorage.setItem("userinfo", JSON.stringify(userInfo))
        console.log(userInfo);
    }, [userInfo])

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo, addGood, addBad }}>
            {children}
        </UserInfoContext.Provider>
    );
}