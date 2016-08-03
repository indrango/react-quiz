import React, {Component} from 'react';

class ScoreBox extends Component {
    render() {
        return (
            <div className="well">
                Question {this.props.current} out of {this.props.questions.length} 
                <div className="pull-right"><strong>Score: {this.props.score}</strong></div>
            </div>
        );
    }
}

export default ScoreBox;