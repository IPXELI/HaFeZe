import { useContext, useEffect, useState } from "react"
import { UserInfoContext } from "../../UserInfoContext"

function Profile() {
    const { userInfo, setUserInfo } = useContext(UserInfoContext)
    const [newUser, setNewUser] = useState("")
    useEffect(() => {
        setNewUser(userInfo.name || "")
    }, [])
    function updateName() {
        newUser && setUserInfo({ ...userInfo, name: newUser })
    }
    return (
        <>
            <div className="profile">
                <input onChange={(e) => setNewUser(e.target.value)}
                    type="text"
                    maxLength={9}
                    value={newUser}
                />
                <div onClick={updateName} className="btn">تایید</div>
            </div>
        </>
    )
}

export default Profile