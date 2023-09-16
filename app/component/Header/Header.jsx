import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserInfoContext } from '../../context/UserInfo';

export default function Header() {
    const { userInfo, setUserInfo } = React.useContext(UserInfoContext);
    const navigation = useNavigation();

    return (
        userInfo !== null ? (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('User')}
            >
                <Image
                    source={require('../../assets/images/profile.png')}
                    style={{ width: 50, height: 50 }}
                />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Image
                    source={require('../../assets/images/profile.png')}
                    style={{ width: 50, height: 50 }}
                />
            </TouchableOpacity>
        )
    );
}
