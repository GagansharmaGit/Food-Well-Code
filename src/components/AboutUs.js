import { Outlet } from "react-router-dom";
import Profile from "./Profile";
// import Profclass from "./ProfileClass";
import {Component} from "react";
import UserContext from "../../utils/userContext";

// const About2=()=>{

//     return (<div>
//         <h1>About us</h1>
//         <p>This is the about us section 🔥</p>
//         <Profile name={"Gagagag"}/>
//         <Profclass name={"gagan"} xyz = {"sharma"}/>
//     </div>
//     );
// }

// export default About2;

class About extends Component{
    constructor(props){
        super(props);
        
        console.log("Parent-constructor");
    }
     componentDidMount(){
        

        console.log("Parent-componentDidMount");
    }
    render(){
        console.log("Parent-render");
        return(
           <div>
             <h1>About us</h1>
             <p>This is the about us section using class based comp 🔥</p>
             <UserContext.Consumer>
                {({user})=> <h4 className="text-lg font-bold text-green-900">{user.name} - {user.email}</h4>
                }
             </UserContext.Consumer>
             {/* <Profile name={"Gagagag"}/> */}
             <Profile name={"first"}/>
             {/* <Profclass name={"second"} /> */}
           </div>
        )
    }
}

export default About;