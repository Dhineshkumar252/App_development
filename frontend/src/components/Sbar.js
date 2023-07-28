import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./side.css";
import { IconContext } from "react-icons";
import "./Navbar.css";
import Show from "./Show";
function Sbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className="wra">
        <div className="side">
    <div class="ico">
        <h2 class="loo">Scheduler</h2>
           
    </div>
    <div className="crud">

            <ol>
                <li className="task">
                 <a><Link to='/PerTask'>Add Task</Link></a>
                </li>
                <li className="task"><a><Link to='/Update'>Edit Task</Link></a></li>
                <li className="task"><a><Link to='/Delete'>Delete Task</Link></a></li>

            </ol>
    </div>
        </div>
        <div className="show">
            <Show/>
        </div>
    </div>
    </>
  );
}

export default Sbar;