import React from 'react';
import { TextInput } from 'react-native';

const InputField = (props) => {
    return (
        <TextInput
            style={{
                height: 40,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                margin: 15,
                fontSize: 20
            }}
            onChangeText={text => props.onChange(text)}
            value={props.value}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType ? props.keyboardType : "default"}
            secureTextEntry={props.secureTextEntry ? true : false}
            onFocus={props.onFocus ? () => props.onFocus() : null}
        />
    );
}

export default InputField;