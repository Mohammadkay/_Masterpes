import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { UserInfoContext } from '../../context/UserInfo';
import axios from 'axios';
import { ScrollView } from 'native-base';

export default function ProductDetails () {
    const [isThankYouVisible, setIsThankYouVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const product = route.params.product;
  const { userInfo, setUserInfo, fetchUserInfo } = useContext(UserInfoContext);

  const showThankYouAlert = () => {
    setIsThankYouVisible(true);

    // Optionally, you can set a timeout to close the alert automatically
    setTimeout(() => {
      setIsThankYouVisible(false);
    }, 3000); // 3 seconds in this example
  };


  // Function to handle the "Buy Now" button click
  const handleBuyNow = () => {
    // Show an alert message
    if(userInfo!=null){ 
       Alert.alert(
      'Purchase Confirmation',
      'Do you want to buy this product?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'), // You can customize this action
          style: 'cancel',
        },
        {
          text: 'Buy Now',
          onPress: async() => {
            // You can customize the action when the user presses "Buy Now"
            const ob={
              product:product.id,
              user:userInfo._id
            }
           
             await axios.post("http://10.0.2.2:8000/api/orders",ob)
            showThankYouAlert()
            // Navigate to the Home screen
            setTimeout(() => {
                navigation.navigate('Home');;
              }, 2000);
            
          },
        },
      ],
      { cancelable: false }
    )}else{
      navigation.navigate('SignIn');

    }
  
  };

  return (
    <View  style={styles.container}>
      <Image style={styles.image} source={{uri:product.image.url}}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Button title="Buy Now" onPress={handleBuyNow} />

      <Modal isVisible={isThankYouVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Thank You for Your Purchase!</Text>
          <Button
            title="Ok"
            onPress={() => setIsThankYouVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "80%",
    height: "60%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    marginVertical: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
