import React, {Component} from 'react';
import axios from 'axios';

export default class CreateQuiz extends Component {
    constructor(props) {
        super(props);

        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeAnswers1 = this.onChangeAnswers1.bind(this);
        this.onChangeAnswers2 = this.onChangeAnswers2.bind(this);
        this.onChangeAnswers3 = this.onChangeAnswers3.bind(this);
        this.onChangeAnswers4 = this.onChangeAnswers4.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChangeQuestion(e) {
        this.setState( {
            question: e.target.value
        });
    }

    onChangeAnswers1(e) {

        this.setState({
            answer1: e.target.value
        });
    }
    onChangeAnswers2(e) {

        this.setState({
            answer2: e.target.value
        });
    }
    onChangeAnswers3(e) {

        this.setState({
            answer3: e.target.value
        });
    }
    onChangeAnswers4(e) {

        this.setState({
            answer4: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const qna = {
            question: this.state.question,
            answers: [this.state.answer1,this.state.answer2,this.state.answer3,this.state.answer4]
        }
        console.log(qna);

        axios.post('http://localhost:5000/qna/add', qna)
        .then(res => console.log(res.data));

        //window.location = '/';
    }

    render() {
        return (
            <div>
      <h3>Quiz</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Question: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.question}
              onChange={this.onChangeQuestion}
              />
        </div>
        <div className="form-group">
          <label>Answer</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.answers}
              onChange={this.onChangeAnswers1}
              />
        </div>
        <div className="form-group">
          <input 
              type="text" 
              className="form-control"
              value={this.state.answers}
              onChange={this.onChangeAnswers2}
              />
        </div>
        <div className="form-group">
          <input 
              type="text" 
              className="form-control"
              value={this.state.answers}
              onChange={this.onChangeAnswers3}
              />
        </div>
        <div className="form-group">
          <input 
              type="text" 
              className="form-control"
              value={this.state.answers}
              onChange={this.onChangeAnswers4}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Question" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
}