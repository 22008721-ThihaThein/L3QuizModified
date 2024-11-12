import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Question = ({ questionText, imageSource, options, onAnswerSelect }) => {
    return (
        <View style={styles.Parent}>
            <Text style={styles.Text}>{questionText}</Text>
            <Image source={imageSource} style={styles.Image}/>
            <RNPickerSelect
                onValueChange={onAnswerSelect}
                items={options}
                text={{ label: "Select an answer...", value: null }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Parent: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    Text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    Image: {
        width: 300,
        height: 250
    }
});

export default Question;
