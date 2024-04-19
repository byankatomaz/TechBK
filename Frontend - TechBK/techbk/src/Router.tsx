import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import Welcome from "./screen/Welcome";
import Login from "./screen/Login";
import Register from "./screen/Register";
import Home from "./screen/ProductList";
import TechBkProvider from "./context/TechBkContext";
import StatusBar from "./components/StatusBar/StatusBar";
import ProductDetails from "./screen/ProductDetails";
import Bag from "./screen/Bag";

const stack = createStackNavigator();

function Router() {

    return (

        <NavigationContainer independent={true}>
            <TechBkProvider>
                <StatusBar />
                <stack.Navigator>
                    <stack.Screen name="ProductList" component={Home} options={{ headerShown: false }} />
                    <stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                    <stack.Screen name="Bag" component={Bag} options={{ headerShown: false }} />

                    <stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />

                    <stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />



                </stack.Navigator>
            </TechBkProvider>
        </NavigationContainer>

    )


}

export default Router;