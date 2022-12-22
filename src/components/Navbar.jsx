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
           //TODO: avatar del usuario
        </div>
    </nav>
  )
}

export default Navbar