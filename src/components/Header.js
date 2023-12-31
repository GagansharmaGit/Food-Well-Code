// import { useState } from "react";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useCheckOnline from "../../utils/useCheckOnline";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";
import store from "../../utils/store"

// import store1 from "../../utils/store";

const Title = () => (
    <img
      data-testid="navLogo"
      className="h-28 p-2"
      alt="logo"
      src="https://drive.google.com/file/d/1sImAO5BLiXXsUXPkI7BswTZKptiAPlYB/view?usp=drive_link"
    />
  );

  
  const loggedIn=()=>{
    // call Api for user authentication
    return true; // return true is user verified
  };
  const Header = () =>{

    const [isLoggedin,setisLoggedin] = useState(false);
    const checkOnline = useCheckOnline();
    const { user } = useContext(UserContext);
    const cartItems1 = useSelector( (store2) => store2.cart.items);
    console.log(cartItems1)
    return(
        <div className="flex justify-between bg-orange-200 shadow-lg ">
            <Title/>
            <h1>{Title}</h1>
              <div >
                <ul className="flex py-10">
                    <li className="mx-2 px-3 font-bold bg-purple-300 rounded-lg p-3"><Link to="/">Home</Link></li>
                    <li className="mx-2 px-3 font-bold bg-purple-300 rounded-lg p-3"><Link to="/about">About us</Link></li>
                    <li className="mx-2 px-3 font-bold bg-purple-300 rounded-lg p-3"><Link to="/Contact">Contact</Link></li>
                    <li className="mx-2 px-3 font-bold bg-purple-300 rounded-lg p-3"><Link to="/instamart">Instamart </Link></li>
                    <li className="mx-2 px-3 font-bold bg-purple-300 rounded-lg p-3"><Link to="/Cart"  data-testid="cartTesting">Cart - {cartItems1.length}</Link></li>
                    
                </ul>
                
            </div>
            
            {}
            <div className="pt-10 flex">
             
                <span className="px-3 font-bold text-orange-500">Welcome, <span className="text-black">{user.name}</span></span>
                {/* <span className="  font-bold text-red-900">{user.email}</span> */}
              
            </div>
            <div className="pt-10 pr-5">
              {
                isLoggedin ? (
                  <button className="flex justify-center h-[30px] items-center p-4 bg-red-600 text-white rounded-lg" onClick={()=>{setisLoggedin(false)}}> Logout </button>
                ):(
                  <button className="flex justify-center h-[30px] items-center p-4 bg-green-600 text-white rounded-lg" onClick={()=>{setisLoggedin(true)}}> Login </button>
                )

                // (loggedIn == true ? <button onClick={()=>{setisLoggedin(false)}}> Logout </button> : <button onClick={()=>{setisLoggedin(true)}}>Login</button>)
              }
            </div>
            {/* <div>
            <h1 className="pt-10 pr-5" data-testid="onlineStatus">{checkOnline == true ? "🟢" : "🔴"}</h1>
            </div> */}
                
                
        </div>
    );
};
  export default Header;