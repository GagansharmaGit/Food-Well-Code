import { useContext, useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard.js";
import Shimmer from "./shimmerUi.js";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline.js";
import { filterData } from "../../utils/helper.js";
// import { restaurantList } from "../constants.js";
import UserContext from "../../utils/userContext.js";




const Body=()=>{
  // STATE HOOK
  const [searchText,setSearchText] = useState(""); //using it for create variables
  const [FilteredRestaurents,setFilteredRestaurents] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);

  const {user,setUser} = useContext(UserContext);

  useEffect(()=>{
    getRestaurants();
  },[]);
  async function getRestaurants(){
    const ApiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4743879&lng=77.50399039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
    const JsonData = await ApiData.json();

    // console.log(JsonData);
    setallRestaurants(JsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      JsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[7]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[8]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[9]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[10]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
      JsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      
      
      );
   setFilteredRestaurents(JsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    JsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[7]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[8]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[9]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[10]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    JsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    
    
    );
  
  }

  const offline = useOnline();
  if(offline == false ){
    return <h1>🔴Offline, Looks you are Not Connected to Internet</h1>
  }
  

  // if(!allRestaurants) return null;
  // if(FilteredRestaurents.length == 0) return <h1>No restaurent match to your results</h1>;

    return allRestaurants?.length == 0 ? (
    <Shimmer/>
    ):(
      <>
       <div className="search-container p-5 bg-pink-50 my-5 flex justify-center ">

            <div>
              <input 
                className="search-input p-3 rounded-lg bg-purple-200 w-[500px]" 
                type="text" 
                placeholder="Search..."
                value={searchText}
                onChange={(e)=> {
                  //e.target.value-> whatever we write in variable
                  // console.log(e.target.value)
                  setSearchText(e.target.value);
              
              }}
              />
              
              <button className="p-3 m-2 bg-purple-900 text-white rounded-md px-10" 
              onClick={ ()=>{
                //on click we need to filter the data
                // and update the variable-> restaurent
                const data = filterData(searchText,allRestaurants);
                // console.log(data);
                setFilteredRestaurents(data);
                
              }}>Search</button>
            </div>

            {/* <div>
              <input value = {user.name} onChange={(e)=>{
                  setUser({
                    ...user,
                    name:e.target.value,
                    
                    // email:user.email,
                  })
              }}></input>
              <input value = {user.email} onChange={(e)=>{
                  setUser({
                    ...user,
                    email:e.target.value,
                  
                  })
              }}></input>
            </div> */}

       </div>

          

       <div className=" flex flex-wrap pl-16">
            {
            FilteredRestaurents.map((rest)=>{
                    return (
                    <Link to={"/restaurant/" + rest.info?.id}><RestaurentCard {...rest.info} key={rest.info?.id} /></Link>
                    );
                })}
        </div>
      </>
    );
};

export default Body;