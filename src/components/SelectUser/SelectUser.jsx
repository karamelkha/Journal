import { UserContext } from "../../context/user.context"
import { useContext } from "react"

function SelectUser() {
    const {userId, setUserId} = useContext(UserContext)

    const changeUser = (e) => {
        setUserId(Number(e.target.value))
    }

    return (

        <select name="user" id="user" value={userId} onChange={changeUser}>
            <option value="1">Ксю</option>
            <option value="2">Кир</option>
        </select>

    )
}

export default SelectUser