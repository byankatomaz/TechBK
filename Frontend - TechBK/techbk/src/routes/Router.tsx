import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler'
import React from "react";
import StatusBar from "../components/StatusBar/StatusBar";
import TechBkProvider from "../context/TechBkContext";
import Bag from "../screen/Bag";
import Login from "../screen/Login";
import ProductDetails from "../screen/ProductDetails";
import Home from "../screen/ProductList";
import Register from "../screen/Register";
import Welcome from "../screen/Welcome";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from "@expo/vector-icons";
import Requests from "../screen/Requests";
import User from "../screen/User";
import ProductList from "../screen/ProductList";

const stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
    return (

        <Tab.Navigator
            
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    if (route.name === 'Bag') {
                        color = focused ? '#009898' : "gray";
                        iconName = "shopping-cart"


                    } else if (route.name === 'ProductList') {
                        color = focused ? '#009898' : "gray";
                        iconName = "home"
                    }
                    else if (route.name === 'Requests') {
                        color = focused ? '#009898' : "gray";
                        iconName = "list"
                    }
                    else if (route.name === 'User') {
                        color = focused ? '#009898' : "gray";
                        iconName = "user"
                    }

                    return <Feather name={iconName} size={20} color={color} />;
                },


                tabBarStyle: {
                    backgroundColor: 'black',



                },



                tabBarItemStyle: {
                    margin: 5,
                }
            })}
            tabBarOptions={{
                labelStyle: { fontSize: 14, fontWeight: 'bold' },
                activeTintColor: '#009898',
                inactiveTintColor: 'gray',
            }}


        >
           
            <Tab.Screen
                name="ProductList"
                component={ProductList}  
                options={{
                    tabBarLabel: 'Produtos',
                    
                }}
            />
            <Tab.Screen
                name="Bag"
                component={Bag}
                options={{
                    tabBarLabel: 'Carrinho',


                }}
            />
            <Tab.Screen
                name="Requests"
                component={Requests}
                options={{
                    tabBarLabel: 'Pedidos',


                }}
            />
             <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarLabel: 'Usuário'

                }}
            />

        </Tab.Navigator>
    );
};



function StackNav() {

    return (
        <stack.Navigator initialRouteName="Welcome">
            <stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <stack.Screen name="Bag" component={Bag} options={{ headerShown: false }} />
            <stack.Screen name="ProductList" component={TabNavigator} options={{ headerShown: false }} />
            <stack.Screen name="Requests" component={Requests} options={{ headerShown: false }} />
            <stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
        </stack.Navigator>

    )


}

function Router() {
    return (
        <TechBkProvider>
            <StatusBar/>
            <NavigationContainer>
                <StackNav />
            </NavigationContainer>
        </TechBkProvider>
    )
}
export default Router;