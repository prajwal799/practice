import {Link} from "react-router-dom";
const NavBar = () => {
    return(
        <>
        <Link to="/">Login</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/todolist">TodoList</Link>
        </>
    )
}
export default NavBar;