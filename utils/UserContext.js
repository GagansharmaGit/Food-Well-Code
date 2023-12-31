import { createContext } from "react";
const UserContext = createContext({ 
user:{
    name:"Gagan Sharma",
    email:"Sharmagagan192@gmail.com"
    },
});
UserContext.displayName="This is UserContext" // it has nothing to  do with code logic
// it is just use to see name ote the context because react dev tools doen not show name it only shows context
export default UserContext;