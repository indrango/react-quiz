import React, {Component} from 'react';

class Results extends Component {
    render() {
        let percent = (this.props.score / this.props.questions.length * 100);
        let message;
        if (percent > 80) {
            message = 'Awesome Job!';
        } else if (percent < 80 && percent > 60) {
            message = 'You Did Ok!';
        } else {
            message = 'You Did Horrible!';
        }

        return (
            <div className="well">
                <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
                <h1>{percent}% - {message}</h1>
                <h4 />
                <a href="/app">Take Again</a>
            </div>
        );
    }
}

export default Results;