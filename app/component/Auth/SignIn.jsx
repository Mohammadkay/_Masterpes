import { useContext, useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserInfoContext } from '../../context/UserInfo';


const SignIn = () => {
    const { userInfo, setUserInfo, fetchUserInfo } = useContext(UserInfoContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        if (!email || !password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://10.0.2.2:8000/api/auth/login', {
                email: email,
                password: password
            });

            await AsyncStorage.setItem("userInfo", JSON.stringify(response.data));

            fetchUserInfo()

            navigation.navigate('Home');

        } catch (error) {
            setErrorMessage('Invalid email or password');
        }
    };


    return (
        <Center flex={1}>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Sign in to your account
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="medium" size="xs">
                    Login to access your Account
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            type="password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </FormControl>
                    <Button
                        mt="2"
                        colorScheme="indigo"
                        backgroundColor="#3B5998"
                        onPress={handleSignIn}
                    >
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            I'm a new user.
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default SignIn;
