import { useContext } from "react";
import UserContext from "../../utils/userContext";
const Footer=()=>{
    const {user} = useContext(UserContext);
    return(
        <div>
            <img className="w-screen" src="https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg" alt="" />
            {/* <h4>Footer</h4>
             <h6 className="text-sm font-bold text-green-900">{user.name}</h6>
            <h6 className=" text-xs font-bold text-green-700">{user.email}</h6> */}
        </div>
     );
};

export default Footer;