import {SiYourtraveldottv } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <SiYourtraveldottv/> Travel Social Network
        </div>
        <div className="search">
            <input type="text" />
            <button>Search</button>
        </div>
        <div className="actions">
            <Link>Logout</Link>
            <div className="actions__avatar">
              
            </div>
        </div>
    </nav>
  )
}

export default Navbar