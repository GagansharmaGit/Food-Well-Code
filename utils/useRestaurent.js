import { useState ,useEffect} from "react";
import { FETCH_MENU } from "../src/constants";

const useRestaurent=(ResId)=>{
    const [Restaurant,setRestaurant] = useState(null);
    //Get data from api
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch( FETCH_MENU + ResId );
        const jsonData = await data.json();
        setRestaurant(jsonData.data);
        console.log(Restaurant?.cards[0]?.card?.card?.info)



    } 
    // Resturent data
    return Restaurant;

}

export default useRestaurent;