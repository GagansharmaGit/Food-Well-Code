import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Cart from "./components/Cart.js";
import Footer from "./components/Footer.js";
// import About from "./components/AboutUs.js";
import Error from "./components/Error.js";
import Contact from "./components/contact.js";
import Profile from "./components/Profile.js";
import RestaurentMenu from "./components/RestaurentMenu.js";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
// import Instamart from "./components/instamart.js";
import { lazy , Suspense} from "react";
import Shimmer from "./components/shimmerUi.js";
import UserContext from "../utils/userContext.js";
import { Provider } from "react-redux";
import store from "../utils/store.js";

const Instamart  = lazy(()=>import("./components/instamart.js")); // it is on demand loading.
const About = lazy(()=> import("./components/AboutUs.js"));       // it is on demand loading.
// Upon On Demand Loading → upon render → suspend loading →

//Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import


const AppLayout=()=>{
    const [user1,setUser1] = useState({
        name:"Gagan Sharma",
        email:"Sharmagagan192@gmail.com",
    });
    return(
        <Provider store = {store}>
            <UserContext.Provider value={{
            user:user1,
            setUser:setUser1,
            }}>
                <Header/>
                <Outlet/>
                <Footer/>
            {/* <About/> */}
            </UserContext.Provider>
        </Provider>
        );
     
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                
            },
            {
                path:"/about",
                element:(<Suspense fallback={<h1>Loading...</h1>}>
                           <About/>
                        </Suspense>),
                children:[
                    {
                        path:"profile",  //localhost:1244/about/profile
                        element:<Profile/>

                }]
                
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:ResId",
                element:<RestaurentMenu/>,
            },
            {
                path:"/instamart",
                element:(
                  <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                  </Suspense>
                ),
            },
            {
                path:"/cart",
                element:<Cart/>,
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider  router={appRouter}/>);