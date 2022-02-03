import {Routes , Route} from "react-router-dom";
import Login from "../Pages/Login";
import Todo from "../Pages/Todo";
import TodoList from "../Pages/TodoList";
const AllRoutes = () => {
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/todo" element={<Todo />} />
            <Route exact path="/todolist" element={<TodoList />} />
        </Routes>
        </>
    )
}
export default AllRoutes