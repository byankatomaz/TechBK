import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../app/Pages/Home";
import Login from "./Pages/Login";

const stack = createStackNavigator();

 function Router(){
    return(
    <NavigationContainer independent={true}>
        <stack.Navigator>
            <stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
            <stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        </stack.Navigator>
    </NavigationContainer>
    )
}

export default Router;