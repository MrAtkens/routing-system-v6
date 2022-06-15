import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <h1>Sticky Header Pow 242134234234!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/app">About</Link>
                <Link to="/sec">Gallery</Link>
                <Link to="/product/24?name=rere">Contact</Link>
            </nav>
        </header>
    )
}