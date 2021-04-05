import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import InputField from '../components/inputField';
import { Button } from "react-native-paper";
import { IconButton } from 'react-native-paper';
import BackIcon from "./../assets/Images/back2.png";
import CustomIconButton from "./../components/iconButton";

const Signup = ({ navigation }) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={'position'}
            enabled={flag}
            style={{ backgroundColor: "white" }}
        >
            <View
                style={{
                    width: "100%",
                    height: "30%",
                    backgroundColor: "#FC1616",
                }}
            >
                <CustomIconButton
                    source={BackIcon}
                />

                <Text
                    style={{
                        color: "white",
                        fontSize: 60,
                        fontWeight: "bold",
                        textAlign: "center"
                    }}
                >
                    Let's Start
                </Text>

            </View>

            <View
                style={{
                    height: "70%",
                    backgroundColor: "red",
                }}
            >

                <View
                    style={{
                        height: "100%",
                        backgroundColor: "white",
                        borderTopWidth: 5,
                        borderColor: "red",
                        borderTopLeftRadius: 45,
                        borderTopRightRadius: 45,
                        marginTop: 10
                    }}
                >

                    <Text
                        style={{
                            fontSize: 40,
                            margin: 20,
                            fontWeight: "bold"
                        }}
                    >
                        Sign up
                    </Text>

                    <View
                        style={{
                            marginTop: 20
                        }}
                    >
                        <InputField
                            value={name}
                            onChange={(val) => { setName(val) }}
                            placeholder="Full Name"
                            onFocus={() => { setFlag(false) }}
                        />

                        <InputField
                            value={phone}
                            onChange={(val) => { setPhone(val) }}
                            placeholder="Phone"
                            keyboardType="number-pad"
                            onFocus={() => { setFlag(false) }}
                        />

                        <InputField
                            value={email}
                            onChange={(val) => { setEmail(val) }}
                            placeholder="Email"
                            keyboardType="email-address"
                            onFocus={() => { setFlag(false) }}
                        />

                        <InputField
                            value={password}
                            onChange={(val) => { setPassword(val) }}
                            placeholder="Password"
                            secureTextEntry
                            onFocus={() => { setFlag(true) }}
                        />

                        <View
                            style={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <IconButton
                                icon="login-variant"
                                color="#FC1616"
                                size={50}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>

                    </View>

                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: 'flex-end',
                            marginLeft: 10,
                            marginBottom: 20,
                            marginRight: 10,
                            alignItems: "center"
                        }}
                    >
                        <Button
                            mode="text"
                            color="#FC1616"
                            labelStyle={{
                                fontSize: 17
                            }}
                            onPress={() => { navigation.navigate("Home") }}
                        >
                            Already Have Account?
                        </Button>

                    </View>

                </View>

            </View>
        </KeyboardAvoidingView>
    );
}

export default Signup;
