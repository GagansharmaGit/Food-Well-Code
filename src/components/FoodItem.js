import {ING_CDN_URL} from "../constants.js"
import { useDispatch } from "react-redux";


// import { RestaurantList } from "../constants.js";

const FoodItem=({items})=>{//, lastMileTravelString
    // const dispatch = useDispatch();

    // const handleAddItem = (item) => {
    //   // dispatch an action
    //   dispatch(addItem(item)); 
    // };
   return(
    <div className="pb-24" >
    {items.map((item) => (
      <div className="p-2 m-2 border-gray-300 border-b-2 " key={item.card.info.id}>
        <h3 className="text-xl font-semibold">{item.card.info.name}</h3>
        <span className="my-10">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
        <img className="w-[400px]" src={ING_CDN_URL + item.card.info.imageId} />
        {/* <h3>{item.cart.info.description}</h3> */}
      </div>
    ))}
  </div>
   );
};
export default FoodItem;