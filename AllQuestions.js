import React from 'react';
import { View, StyleSheet } from 'react-native';
import Question from './Question';

const AllQuestions = ({ setAnswers, answers }) => {
    const questions = [
        {
            id: 'question1',
            questionText: 'What animal is this?',
            imageSource: require('./img/leopard.jpg'),
            options: [
                { label: 'Rhino', value: 'Rhino' },
                { label: 'Leopard', value: 'Leopard' },
                { label: 'Tiger', value: 'Tiger' },
            ],
        },
        {
            id: 'question2',
            questionText: 'What animal is this?',
            imageSource: require('./img/kingfisher.jpg'),
            options: [
                { label: 'Stork', value: 'Stork' },
                { label: 'Kingfisher', value: 'Kingfisher' },
                { label: 'Parrot', value: 'Parrot' },
            ],
        },
        {
            id: 'question3',
            questionText: 'What animal is this?',
            imageSource: require('./img/hummingbird.jpg'),
            options: [
                { label: 'Hummingbird', value: 'Hummingbird' },
                { label: 'Flamingo', value: 'Flamingo' },
                { label: 'Pelican', value: 'Pelican' },
            ],
        },
        {
            id: 'question4',
            questionText: 'What animal is this?',
            imageSource: require('./img/elephant.jpg'),
            options: [
                { label: 'Elephant', value: 'Elephant' },
                { label: 'Rhino', value: 'Rhino' },
                { label: 'Hippo', value: 'Hippo' },
            ],
        },
        {
            id: 'question5',
            questionText: 'What animal is this?',
            imageSource: require('./img/deer.jpg'),
            options: [
                { label: 'Deer', value: 'Deer' },
                { label: 'Moose', value: 'Moose' },
                { label: 'Antelope', value: 'Antelope' },
            ],
        },
        {
            id: 'question6',
            questionText: 'What Pokémon is this?',
            imageSource: require('./img/charmander.jpg'),
            options: [
                { label: 'Charmander', value: 'Charmander' },
                { label: 'Pikachu', value: 'Pikachu' },
                { label: 'Charmelon', value: 'Charmelon' },
            ],
        },
        {
            id: 'question7',
            questionText: 'What Pokémon is this?',
            imageSource: require('./img/bulbasaur.jpg'),
            options: [
                { label: 'Bulbasaur', value: 'Bulbasaur' },
                { label: 'Ivysaur', value: 'Ivysaur' },
                { label: 'Squirtle', value: 'Squirtle' },
            ],
        },
        {
            id: 'question8',
            questionText: 'What Pokémon is this?',
            imageSource: require('./img/metapod.jpg'),
            options: [
                { label: 'Metapod', value: 'Metapod' },
                { label: 'Butterfree', value: 'Butterfree' },
                { label: 'Weedle', value: 'Weedle' },
            ],
        },
        {
            id: 'question9',
            questionText: 'What Pokémon is this?',
            imageSource: require('./img/squirtle.jpg'),
            options: [
                { label: 'Squirtle', value: 'Squirtle' },
                { label: 'Blastoise', value: 'Blastoise' },
                { label: 'Wartortle', value: 'Wartortle' },
            ],
        },
        {
            id: 'question10',
            questionText: 'What Pokémon is this?',
            imageSource: require('./img/pidgey.jpg'),
            options: [
                { label: 'Pidgey', value: 'Pidgey' },
                { label: 'Pidgeotto', value: 'Pidgeotto' },
                { label: 'Spearow', value: 'Spearow' },
            ],
        },
    ];

    return (
        <View style={styles.container}>
            {questions.map((q) => (
                <Question
                    key={q.id}
                    questionText={q.questionText}
                    imageSource={q.imageSource}
                    options={q.options}
                    onAnswerSelect={(value) => setAnswers({ ...answers, [q.id]: value })}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    }
});

export default AllQuestions;
