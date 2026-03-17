import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "./MainOutlet";
import Login from "./components/Login";
import Signup from "./components/Signup";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainOutlet/>,
        errorElement:<>error page</>,
        children:[
            {index:true, element:<Login/>},
             {path:"login", element:<Login/>},
              {path:"signup", element:<Signup/>}
        ]
    }
])
export default router
