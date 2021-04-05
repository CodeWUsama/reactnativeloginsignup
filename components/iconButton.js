import React from 'react';
import { Image, TextInput, TouchableOpacity } from 'react-native';

const IconButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                padding: 20,
            }}
            onPress={() => navigation.navigate("Home")}
        >
            <Image
                style={{
                    height: 35,
                    width: 35
                }}
                source={props.source}
            />
        </TouchableOpacity>
    );
}

export default IconButton;