import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserInfoContext = createContext();

const UserInfoProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);


    const fetchUserInfo = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userInfo');
            setUserInfo(jsonValue != null ? JSON.parse(jsonValue) : null);
        } catch (error) {
            console.error('Error fetching userInfo:', error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const saveUserInfo = async () => {
        try {
            await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        } catch (error) {
            console.error('Error saving userInfo:', error);
        }
    };

    useEffect(() => {


        if (userInfo !== null) {
            saveUserInfo();
        }
    }, [userInfo]);

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo, fetchUserInfo, saveUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
};

export { UserInfoContext, UserInfoProvider };
