import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Menu.css"
function Menu() {

  const Home = () => {
    return(<h2>this is home page </h2>);
  };
  
  const Theme = () => {
    return(<h2>this is theme page</h2>);
  };
  
    const task = useSelector((state) => state.tasks && state.tasks.selectedTask)

  return (
    <>
      {task.title}
      <ul>
        <li>
          <NavLink
            to="/page1"
            activeClassName="active"
            isActive={(_, { pathname }) =>
              pathname.match("/page1") || pathname === "/home"
            }
          >
            Home
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/page2" activeClassName="active">
            My tasks
          </NavLink>
          {/* <Link to="/tasks"> My tasks</Link> */}
        </li>
      </ul>
    </>
  )
}

export default Menu
