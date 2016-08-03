import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';   
import Results from './quiz/Result.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'John'
                        },
                        {
                            id: 'b',
                            text: 'Doe'
                        },
                        {
                            id: 'c',
                            text: 'Laila'
                        },
                    ],
                    correct: 'b'
                },{
                    id: 2,
                    text: 'Where you live?',
                    choices: [
                        {
                            id: 'a',
                            text: 'New York'
                        },
                        {
                            id: 'b',
                            text: 'Miami'
                        },
                        {
                            id: 'c',
                            text: 'Boston'
                        },
                    ],
                    correct: 'b'
                },{
                    id: 3,
                    text: 'What is your father?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Jhon'
                        },
                        {
                            id: 'b',
                            text: 'Brian'
                        },
                        {
                            id: 'c',
                            text: 'Ardial'
                        },
                    ],
                    correct: 'a'
                },{
                    id: 4,
                    text: 'What is your mother?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Frane'
                        },
                        {
                            id: 'b',
                            text: 'Monica'
                        },
                        {
                            id: 'c',
                            text: 'Lena'
                        },
                    ],
                    correct: 'c'
                },
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({current});
    }

    setScore(score) {
        this.setState({score});
    }

    render() {
        let scorebox;
        let results;

        if (this.state.current > this.state.questions.length) {
            scorebox = '';
            results = <Results {...this.state} /> 
        } else {
            scorebox = <Scorebox {...this.state} />
            results = '';
        }

        return (
            <div>
                {scorebox}                
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
                {results}
            </div>
        );
    }
}

export default App;