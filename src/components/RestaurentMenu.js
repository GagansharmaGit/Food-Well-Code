import { useParams } from "react-router-dom"
import { useEffect ,useState} from "react";
import {ING_CDN_URL} from "../constants"
import Shimmer from "./shimmerUi";

import useRestaurent from "../../utils/useRestaurent";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurentMenu = () => {

    // How to read the DYNAMIC URL
    
    // const [Restaurant,setRestaurant] = useState(null);
    
    const { ResId } = useParams();
    // console.log(ResId + "this is param")

    const Restaurant = useRestaurent(ResId);  // Custom Hooks

    
    // const dispatch = useDispatch();
    // const handleAddItems = () =>{
    //     dispatch(addItem("Grapes"));
    // }

    const dispatch2 = useDispatch();
    const addFoodItem=(item)=>{
        dispatch2(addItem(item));
    }
    if (Restaurant == null) return <Shimmer />
    return(
          

        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
            <img className="pt-5 rounded-xl rounded-t-xl w-[600px]" src={ING_CDN_URL + Restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId}></img>
            <div className="pt-2"><h1 className="text-4xl font-bold h-[50px] rounded-xl p-2 bg-purple-300 w-[600px] justify-center items-center flex">{Restaurant?.cards[0]?.card?.card?.info.name}</h1></div>
            <h1>Rest id:{ResId}</h1>
            
            <p className="font-bold text-2xl">{Restaurant?.cards[0]?.card?.card?.info.cuisines.join(", ")}</p>
            <h3 className="bg-yellow-200 p-3 rounded-xl  font-bold text-xl ">{Restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
            {/* <h3>{Restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId}</h3> */}
            </div>


            {/* <div>
                <button className="text-white p-2 bg-purple-900 font-bold rounded-lg m-5" onClick={()=>{
                    handleAddItems();
                }}>Add Items</button>
            </div> */}


            <div className="pb-20 p-5 flex flex-col justify-center items-center">
            <h2 className="w-[600px] text-4xl font-bold h-[50px] rounded-xl p-3 font-bold text-3xl m-3 bg-red-300 justify-center items-center flex">Menu</h2>
            <ul>
                {
                Restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards.map((item) => (
                    <li className="font-bold pl-5"  key={item.card.info.id}>
                        {item.card.info.name} - ₹
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}/- 
                        <button className="text-white  p-2 w-[80px] bg-green-800 font-bold rounded-lg m-1" onClick={
                            ()=>addFoodItem(item) // sending full item object to identify and customization
                        }>Add</button>
                  </li>
            
                ))}
            </ul>
            </div>
        </div>
    );
};

export default RestaurentMenu;
