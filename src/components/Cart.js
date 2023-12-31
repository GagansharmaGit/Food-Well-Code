import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../utils/cartSlice";
import FoodItem from "./FoodItem";
import { clearCart  } from "../../utils/cartSlice";
const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems[0]);
    const dispatchcart = useDispatch();
    const handleclearCart=()=>{
        dispatchcart(clearCart());
    }
    return(
        <div className="flex flex-col bg-purple-100">
            <div className="flex justify-center items-center p-4"><h1 className="font-bold text-3xl">Your Items</h1></div>
            <button className="bg-yellow-300 rounded-md p-2 m-2" onClick={()=>{
                handleclearCart();
            }}>Clear</button>
            <div className="flex justify-center items-center flex-col">
                
                <h1 className="font-bold text-2xl bg-red-200 rounded-lg p-4">Total items : <span className="text-3xl font-bold text-green-700">{cartItems.length}</span> </h1>
                
                <FoodItem items = {cartItems} />
            </div>

        </div>
        
    )
}
export default Cart;