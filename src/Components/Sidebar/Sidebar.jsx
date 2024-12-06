import React from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom"
import {
  TrendingUp,
  Inventory2,
  TrendingDown
} from "@mui/icons-material"


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* <Link to="/" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebarListItem">
                <Inventory2 className="sidebarIcon" />
                Products
              </li> */}
            {/* </Link> */}
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Inventory2 className="sidebarIcon" />
                Items
              </li>
            </Link>
            <Link to="/pichart" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Graphical representation
              </li>
            </Link>
            
            <Link to="/mostreq" className="link">
              <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
                Most Required
              </li>
            </Link>
            <Link to="/leastavai" className="link">
              <li className="sidebarListItem">
                <TrendingDown className="sidebarIcon" />
                Least Availabel
              </li>
            </Link>


          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
