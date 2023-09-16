import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/'

export default function About() {
    return (
        <ScrollView >
            <View style={styles.contanier}>
                <Image
                    source={require('../../assets/images/logoLarge.png')}
                />
            </View>

            <View style={styles.contanierText}>
                <Text style={styles.text}>
                    At <Text style={styles.bold}>CarServ</Text>, we are committed to being your trusted companion on the
                    road and beyond. With a deep understanding of the diverse needs of
                    drivers, we have crafted a one-stop destination for all things automotive.
                </Text>

                <Text style={styles.text}>
                    Whether you're a seasoned car enthusiast, a heavy machinery operator, or
                    simply in search of quality parts and accessories, we've got you covered.
                </Text>

                <Text style={styles.text}>
                    Our mission is to simplify the journey for drivers by offering a comprehensive
                    range of services and products that enhance your driving experience.
                </Text>

                <Text style={styles.text}>
                    From top-notch maintenance supplies to cutting-edge technology solutions,
                    we are dedicated to ensuring your vehicle operates at its best.
                </Text>

                <Text style={styles.text}>
                    <Text style={styles.bold}>CarServ</Text> is not just a store; it's a place where your automotive dreams come to life.
                    Trust us to keep you on  the road, safely and reliably, every step of the way.
                </Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    contanier: {
        height: 300,
        backgroundColor: COLORS.lightWhite,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contanierText: {
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 10,
        marginTop: 10,
    },
    bold: {
        fontWeight: '700',
    }
});