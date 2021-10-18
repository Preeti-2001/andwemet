import "bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom"
import "../pages/home.css"
import { AiOutlineHome} from "react-icons/ai";
import { CgLoadbarSound} from "react-icons/cg"; 
import { FaRegHeart} from "react-icons/fa";
import { BiMessageRounded} from "react-icons/bi";

const Navbar = () => {

    return (
        <>
      <header className="nav-menu">
      <ul className="nav-links ">
        <li >
          <Link className="nav-link active" aria-current="page" to="/"> <div className="icon-color"><AiOutlineHome /><br />Home</div></Link>
        </li>
        <li >
          <Link className="nav-link" to="/polls"><div className="icon-color"><CgLoadbarSound /><br />Polls</div></Link>
        </li>
        <li>
          <Link className="nav-link" to="/favourites"><div className="icon-color"><FaRegHeart/><br />Favourites</div></Link>
        </li>
        <li>
          <Link className="nav-link" to="/chats"><div className="iconColor"><BiMessageRounded /><br />Chats</div></Link>
        </li>
      </ul>
      </header>
        </>
    )
}

export default Navbar;





{/* <nav class="navbar navbar-expand-lg">
       <a class="navbar-brand"> tincat </a>
       <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbardropdown" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbardropdown">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item ">
             <a class="nav-link" href="#footer">Contact </a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#pricing">Price </a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#cta">Download </a>
           </li>
         </ul>
       </div>
     </nav> */}