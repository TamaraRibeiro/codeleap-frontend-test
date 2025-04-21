import { useNavigate } from "react-router";
import { useUser } from "../contexts/userContext"

export default function Home() {
    const {username, logout} = useUser();
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/")
    }
    return(
        <div className="flex justify-between">
            <h2>Hello, {username} 👋</h2>
            <button className="cursor-pointer" onClick={handleLogout}>logout</button>
        </div>
    )
}