import { View, ScrollView, Text, FlatList, ImageBackground, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/';

export default function ContactUs() {
    const contact = [
        {
            id: '1',
            title: '+962 7762 02831',
            image: require('../../assets/icons/phone-call.png'),
        },
        {
            id: '2',
            title: 'MK@ORG.com',
            image: require('../../assets/icons/email-icon.png'),
        },
        {
            id: '3',
            title: 'Jordan / Amman - Na`ur',
            image: require('../../assets/icons/addres-icone.png'),
        },
    ];

    const renderItemContact = ({ item }) => (
        <View style={styles.item}>
            <Image
                style={styles.imageCard}
                source={item.image}
            />
            <Text style={styles.card}>{item.title}</Text>
        </View>
    );

    return (
        <ScrollView   >
            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/logoLarge.png')}
                />
            </View>

            <View style={styles.list}>
                <ImageBackground
                    source={require('../../assets/images/bg-ContactUs.png')}
                    style={styles.bgImage}
                    imageStyle={styles.bgImageStyle}
                >
                    <Text style={styles.title}>Contact Information</Text>
                    <Text style={styles.subTitle}>Say something to start a live chat!</Text>

                    <FlatList
                        data={contact}
                        renderItem={renderItemContact}
                        keyExtractor={(item) => item.id}
                    />
                </ImageBackground>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    header: {
        height: 300,
        backgroundColor: COLORS.lightWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage: {
        padding: 20,
    },
    bgImageStyle: {
        borderRadius: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: COLORS.white,
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#C9C9C9',
        marginBottom: 20,
    },
    list: {
        padding: 30,
        borderRadius: 20
    },
    item: {
        alignItems: 'center',
        paddingBottom: 45,
    },
    imageCard: {
        width: 25,
        height: 25,
    },
    card: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
        color: 'white',
        paddingTop: 5
    },
});
