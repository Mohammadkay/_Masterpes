import React from 'react';
import { ScrollView, Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Formation = () => {
    const navigation = useNavigation();

    const handleFormation = () => {
        alert("Formation");
    };

    return (
        <ScrollView style={{ paddingLeft: 20 }}>
            <Box safeArea p="2" py="8" w="100%" maxW="370">
                <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Complete the rest of the information
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Full Name</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Phone Number</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>City</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Country</FormControl.Label>
                        <Input />
                    </FormControl>
                    <Button
                        mt="2"
                        colorScheme="indigo"
                        backgroundColor="#3B5998"
                        onPress={handleFormation}
                    >
                        Confirm
                    </Button>
                </VStack>
            </Box>
        </ScrollView>
    );
};

export default Formation;
