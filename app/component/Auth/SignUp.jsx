import React, { useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Button, Text, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignUp = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async () => {
        if (!username || !email || !password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://10.0.2.2:8000/api/auth/register', {
                username: username,
                email: email,
                password: password,
                phone:phone
            });

            navigation.navigate('SignIn');
        } catch (error) {
            console.log(error);
            setErrorMessage('user already exist');
        }
    };

    return (
        <ScrollView>
        <Center flex={1} w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }} fontWeight="semibold">
                    Create An Account
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="medium" size="xs">
                    Sign up to get started shop
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input onChangeText={text => setEmail(text)} value={email} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Username</FormControl.Label>
                        <Input onChangeText={text => setUsername(text)} value={username} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input onChangeText={text => setPassword(text)} value={password} secureTextEntry />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Phone Number</FormControl.Label>
                        <Input onChangeText={text => setPhone(text)} value={phone}  />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo"
                        backgroundColor="#BD9851"
                        onPress={handleSignUp}>
                        Sign up
                    </Button>
                    {errorMessage ? (
                        <Text mt="2" color="red.500">
                            {errorMessage}
                        </Text>
                    ) : null}
                </VStack>
            </Box>
        </Center>
        </ScrollView>
    );
};

export default SignUp;
