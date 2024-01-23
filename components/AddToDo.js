import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddToDo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="add note"
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => submitHandler(text)}
                title="add note"
                color= 'coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
