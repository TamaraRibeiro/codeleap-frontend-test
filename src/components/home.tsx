import { useUser } from "../contexts/userContext"

export default function Home() {
    const {username} = useUser();
    return(
        <div>
            <h2>Hello, {username} 👋</h2>
        </div>
    )
}