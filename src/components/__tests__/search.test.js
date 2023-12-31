import Body from "../Body"
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server";
import { RESTAURENT_MOCK_DATA } from "./data";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return  Promise.resolve(RESTAURENT_MOCK_DATA)
        }
    });
});
test("search result on homepage",()=>{
    
    render(
        <StaticRouter>
            <Provider store = {store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    

});