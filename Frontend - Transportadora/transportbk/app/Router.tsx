import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import Welcome from "./Screen/Welcome";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import Home from "./Screen/Home";
import Requests from './Screen/Requests' 
import DeliveryDone from "./Screen/DeliveryDone";
import TechBkProvider from "./context/TechBkContext";
const stack = createStackNavigator();


 function Router(){
  
  
    return(
   
        <NavigationContainer independent={true}>
            <TechBkProvider>
            <stack.Navigator> 
                <stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
         
            <stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}}/>
            <stack.Screen name="DeliveryDone" component={DeliveryDone}  options={{headerShown:false}}/>
            <stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
          
            <stack.Screen name="Register" component={Register}  options={{headerShown:false}}/>
            <stack.Screen name="Requests" component={Requests}  options={{headerShown:false}}/>
            </stack.Navigator>
            </TechBkProvider>
        </NavigationContainer>
  
    )
    

}

export default Router;