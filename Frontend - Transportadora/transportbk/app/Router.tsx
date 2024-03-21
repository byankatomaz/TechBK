import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import Welcome from "./screen/Welcome";
import Login from "./screen/Login";
import Register from "./screen/Register";
import Home from "./screen/Home";
import Requests from './screen/Requests'
import DeliveryDone from "./screen/DeliveryDone";
import TechBkProvider from "./context/TechBkContext";
import StatusBar from "./components/StatusBar";

const stack = createStackNavigator();

function Router(){

    return(

        <NavigationContainer independent={true}>
            <TechBkProvider>
            <StatusBar/>
                <stack.Navigator>
                    <stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}}/>
                    <stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
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