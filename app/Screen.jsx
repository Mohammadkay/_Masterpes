// In App.js in a new project

import * as React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native'
import { COLORS } from './constants/index'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer'
import { Home, Shop, Profile,  About, ContactUs } from './component/Page/index'

import { User,   Settings, ChangePassword, EditProfile } from './component/User'
import { SignIn, SignUp, Formation } from './component/Auth'
import { UserInfoContext } from './context/UserInfo';
import ProductDetails from './component/Product/ProductDetails';
import FilterProduct from './component/Product/FilterProduct';


const Stack = createNativeStackNavigator();

function Screen() {
    const { userInfo, setUserInfo } = React.useContext(UserInfoContext);

    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <StatusBar barStyle="light-content" />
                <Stack.Navigator >

                    <Stack.Screen name="Home" component={Home}
                        options={({ navigation }) => ({
                            title: 'Home',
                            headerTitleAlign: 'center',
                            headerStyle: {
                                backgroundColor: COLORS.nav,
                            },
                            headerTintColor: COLORS.white,
                            headerRight: () => (
                                <Header />
                            ),
                        })}
                    />

                    

                    <Stack.Screen name="Shop" component={Shop}
                        options={{
                            title: 'Collection',
                            headerTitleAlign: 'center',
                            headerStyle: {
                                backgroundColor: COLORS.nav,
                            },
                            headerTintColor: COLORS.white,
                            headerRight: () => (
                                <Header />
                            ),
                        }}
                    />
                         <Stack.Screen name="ProductDetails" component={ProductDetails}
                        options={{
                            title: 'ProductDetails',
                            headerTitleAlign: 'center',
                            headerStyle: {
                                backgroundColor: COLORS.nav,
                            },
                            headerTintColor: COLORS.white,
                            headerRight: () => (
                                <Header />
                            ),
                        }}
                    />

            <Stack.Screen name="FilterProduct" component={FilterProduct}
                        options={{
                            title: 'FilterProduct',
                            headerTitleAlign: 'center',
                            headerStyle: {
                                backgroundColor: COLORS.nav,
                            },
                            headerTintColor: COLORS.white,
                            headerRight: () => (
                                <Header />
                            ),
                        }}
                    />
              

                    <Stack.Screen name="Profile" component={Profile}
                        options={{
                            header: () => {
                                <Profile />
                            }
                        }}
                    />

                    <Stack.Screen name="ContactUs" component={ContactUs}
                        options={{
                            header: () => {
                                <ContactUs />
                            }
                        }}
                    />

                    <Stack.Screen name="About" component={About}
                        options={{
                            header: () => {
                                <ContactUs />
                            }
                        }}
                    />

                

                 

                

            
                 


                    {/* Start User Router  */}
                    {
                        userInfo !== null ? (
                            <>
                                <Stack.Screen name="User" component={User}
                                    options={{
                                        title: 'User',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                            backgroundColor: COLORS.nav,
                                        },
                                        headerTintColor: COLORS.white,
                                        headerRight: () => (
                                            <Header />
                                        ),
                                    }} />

                            

                                <Stack.Screen name="Settings" component={Settings}
                                    options={{
                                        title: 'Settings',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                            backgroundColor: COLORS.nav,
                                        },
                                        headerTintColor: COLORS.white,
                                        headerRight: () => (
                                            <Header />
                                        ),
                                    }} />

                                <Stack.Screen name="ChangePassword" component={ChangePassword}
                                    options={{
                                        title: 'Change Password',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                            backgroundColor: COLORS.nav,
                                        },
                                        headerTintColor: COLORS.white,
                                        headerRight: () => (
                                            <Header />
                                        ),
                                    }} />

                                <Stack.Screen name="EditProfile" component={EditProfile}
                                    options={{
                                        title: 'Edit Profile',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                            backgroundColor: COLORS.nav,
                                        },
                                        headerTintColor: COLORS.white,
                                        headerRight: () => (
                                            <Header />
                                        ),
                                    }} />
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="SignIn" component={SignIn}
                                    options={{
                                        title: 'Sign in',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                            backgroundColor: COLORS.nav,
                                        },
                                        headerTintColor: COLORS.white,
                                        headerRight: () => (
                                            <Header />
                                        ),
                                    }} />

                                <Stack.Screen name="SignUp" component={SignUp}
                                    options={{
                                        title: 'Sign up',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                            backgroundColor: COLORS.nav,
                                        },
                                        headerTintColor: COLORS.white,
                                        headerRight: () => (
                                            <Header />
                                        ),
                                    }} />

                                <Stack.Screen name="Formation" component={Formation}
                                    options={{
                                        title: 'Formation',
                                        headerTitleAlign: 'center',
                                        headerStyle: {
                                            backgroundColor: COLORS.nav,
                                        },
                                        headerTintColor: COLORS.white,
                                        headerRight: () => (
                                            <Header />
                                        ),
                                    }} />
                            </>
                        )
                    }
             
                   

                    {/* End Scrap Router */}
                </Stack.Navigator>
                <Footer />
            </NavigationContainer >
        </NativeBaseProvider>
    );
}

export default Screen;

