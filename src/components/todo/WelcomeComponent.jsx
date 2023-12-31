import { useParams, Link } from "react-router-dom"

function WelcomeComponent() {

    const {username} = useParams()

    return (
        <div className="WelcomeComponent">
            <h1>반가워 {username}!!</h1>
            <div>
                {username}의 할일. - <Link to='/todos'>여기를 눌러!</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent