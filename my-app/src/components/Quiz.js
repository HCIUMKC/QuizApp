import React, {Component} from 'react';
import axios from 'axios';
import QuizQuestion from './QuizQuestion'

export default class Quiz extends Component {

    
    constructor(props) {
        super(props);
    this.state = {
        questions: [],
        total: 0,
        questionsAttempted: 0

    }
    this.updateTotal = this.updateTotal.bind(this);
}
    updateTotal(ifRight) {
        if (ifRight)
        {
        let tempTotal = this.state.total;
        tempTotal+=1;
        this.setState({total: tempTotal});
        }
        let tempAttempts = this.state.questionsAttempted;
        tempAttempts+=1;
        this.setState({questionsAttempted: tempAttempts});
        
    }

    componentDidMount() {
        axios.get('http://localhost:5000/qna/')
        .then(res => {
            const questions = res.data;
            //console.log(questions);
            this.setState({questions});
        });

    
    }

    updateState(something) {
        console.log(something);
    }
    render() {
        return (
            <div>
                <h4>Score: {this.state.total} / {this.state.questionsAttempted}</h4>
                { this.state.questions.map(questionprop => <QuizQuestion {...questionprop} action={this.updateTotal}/>)}
                

 
            </div>
        )
    }
}
