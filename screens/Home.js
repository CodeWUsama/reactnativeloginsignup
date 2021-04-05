import React from 'react';
import { View, ImageBackground, SafeAreaView, Text, Image } from 'react-native';
import Cart from "./../assets/Images/cart.jpg";
import Logo from "./../assets/Images/logo.png";
import { Button } from 'react-native-paper';

const Home = ({navigation}) => {

    return (
        <SafeAreaView

        >
            <ImageBackground
                source={Cart}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%"
                }}
            >

                <View
                    style={{
                        width: "100%",
                        height: 200,
                        display: "flex",
                        alignItems: "center",
                        marginTop: 30
                    }}
                >
                    <Image
                        source={Logo}
                        resizeMode="cover"
                        style={{
                            width: "80%",
                            height: "100%",
                        }}
                    />

                </View>

                <View
                    style={{
                        width: "100%",
                        height:60,
                        display: "flex",
                        alignItems: "center",
                        marginTop:50,
                        justifyContent: "center",
                    }}
                >
                    <Button
                        mode="outlined"
                        style={{
                            width:"60%"
                        }}
                        contentStyle={{
                            borderWidth:1
                        }}
                        labelStyle={{
                            fontSize: 30,
                            color:"black"
                        }}
                        onPress={() =>{navigation.navigate("Signup")}}
                    >
                        Let's Shop
                </Button>
                </View>

            </ImageBackground>

        </SafeAreaView>
    );
}

export default Home;