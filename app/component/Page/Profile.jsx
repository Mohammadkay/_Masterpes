import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Share } from 'react-native';
import { COLORS } from '../../constants/'
import { useNavigation } from '@react-navigation/native';
import { UserInfoContext } from '../../context/UserInfo';
import { useContext } from 'react';

export default function Profile() {
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const navigation = useNavigation();
    let List
    if (userInfo !== null) {
        List = [
            {
                id: '1',
                title: 'Contact us',
                screen: 'ContactUs',
                image: require('../../assets/icons/Contactus.png'),
            },
            {
                id: '2',
                title: 'About',
                screen: 'About',
                image: require('../../assets/icons/About.png'),

            },
            {
                id: '3',
                title: 'Share Application ',
                shareText: 'Take a look at this application, it contains everything you want in your car and provides a lot of services',
                image: require('../../assets/icons/ShareApplication.png'),

            },
        ];
    } else {
        List = [
            {
                id: '1',
                title: 'Sing In | Sign Up',
                screen: 'SignIn',
                image: require('../../assets/icons/Sing.png'),
            },
            {
                id: '2',
                title: 'Contact us',
                screen: 'ContactUs',
                image: require('../../assets/icons/Contactus.png'),
            },
            {
                id: '3',
                title: 'About',
                screen: 'About',
                image: require('../../assets/icons/About.png'),

            },
            {
                id: '4',
                title: 'Share Application ',
                shareText: 'Take a look at this application, it contains everything you want in your car and provides a lot of services',
                image: require('../../assets/icons/ShareApplication.png'),

            },
        ];
    }

    const renderItemList = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={() => {
                if (item.screen) {
                    navigation.navigate(item.screen);
                } else if (item.shareText) {
                    Share.share({
                        message: item.shareText,
                    });
                }
            }}
        >
            <Image
                style={styles.imageCard}
                source={item.image}
            />
            <Text style={styles.card}>{item.title}</Text>
        </TouchableOpacity>
    );



    return (
        <View>
            <View style={styles.contanier}>
                <Image
                    source={require('../../assets/images/logoLarge.png')}
                />
            </View>

            <View style={styles.list}>
                <FlatList
                    data={List}
                    renderItem={renderItemList}
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View >
    )
}


const styles = StyleSheet.create({
    contanier: {
        height: 300,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        padding: 20,
       
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        elevation: 10,
        borderBottomWidth: 0.8,
        borderBottomColor: '#a0a0a0',
        backgroundColor: '#f2f2f2',
        color:"#BD9851"

    },
    imageCard: {
        width: 10,
        height: 10,
        marginRight: 10,
    },
    card: {
        
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        color:"#BD9851"

    },
});


