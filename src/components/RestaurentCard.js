 import {ING_CDN_URL} from "../constants.js"
 import { useContext } from "react";
 import UserContext from "../../utils/userContext.js";

// import { RestaurantList } from "../constants.js";

 const RestaurentCard=({name , cuisines , cloudinaryImageId })=>{//, lastMileTravelString
    const {user} = useContext(UserContext);
    return(
       
        <div className=" w-[200px] rounded-md p-2 m-2 shadow-lg h-[300px] overflow-scroll">
             
            <img className="py-2"  src={ING_CDN_URL + cloudinaryImageId}></img>
            <h2 className="py-2 flex justify-center bg-pink-300 font-bold text-xl">{name}</h2>
            {/* {cuisines}; */}
             <h3 className="flex py-3 justify-start text-black font-bold ">{cuisines.join(", ")}</h3>
              {/* <h6 className="text-sm font-bold text-green-900">{user.name}</h6>
              <h6 className=" text-xs font-bold text-green-700">{user.email}</h6>
             */}
        </div>


    );
};
export default RestaurentCard;