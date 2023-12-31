import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header",()=>{
    //load header component
    
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );
    // console.log(header);

    
    const logo = header.getAllByTestId("navLogo");
    // console.log(logo);

    // Check if logo is loaded 
    expect(logo[0].src).toBe("https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"); 

});

test("Online status should render on rendering header",()=>{
    //load header component
    
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    
    
    //testing the online status
    const onlineTest = header.getByTestId("onlineStatus");
    console.log(onlineTest.innerHTML);
    expect(onlineTest.innerHTML).toBe("🟢")

});


test("Cart should be empty on rendering header",()=>{
    //load header component
    
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    //testing the online status
    const cartTest = header.getByTestId("cartTesting");
    console.log(cartTest.innerHTML);
    expect(cartTest.innerHTML).toBe("Cart - 0")

});