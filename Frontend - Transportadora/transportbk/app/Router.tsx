import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React, {useState} from "react";
import Welcome from "./Screen/Welcome";
import Login from "./Screen/Login";

import Register from "./Screen/Resgister";
import Home from "./Screen/Home";
import Requests from './Screen/Requests' 
import DeliveryDone from "./Screen/DeliveryDone";
const stack = createStackNavigator();


 function Router(){
  
  
    return(
        <>
       
   
    <NavigationContainer independent={true}>
   
        <stack.Navigator>
        <stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}}/>
        <stack.Screen name="DeliveryDone" component={DeliveryDone}  options={{headerShown:false}}/>
        <stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
         
            <stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
            <stack.Screen name="Register" component={Register}  options={{headerShown:false}}/>
          
            <stack.Screen name="Requests" component={Requests}  options={{headerShown:false}}/>
          
         
        </stack.Navigator>
    </NavigationContainer>
    </>
    )
    

}

export default Router;