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
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            users: [],
            correctAnswer: '',
            checkboxOneChecked: false,
            checkboxTwoChecked: false,
            checkboxThreeChecked: false,
            checkboxFourChecked: false
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

    handleCheckBox(x, e) {
        if (x==="1")
        {
            this.setState({ checkboxOneChecked: e.target.checked });
        }
        if (x==="2")
        {
            this.setState({ checkboxTwoChecked: e.target.checked });
        }
        if (x==="3")
        {
            this.setState({ checkboxThreeChecked: e.target.checked });
        }
        if (x==="4")
        {
            this.setState({ checkboxFourChecked: e.target.checked });
        }
     
    }

    onSubmit(e) {
        e.preventDefault();
        const checkBoxess = {
            one: this.state.checkboxOneChecked,
            two: this.state.checkboxTwoChecked,
            three: this.state.checkboxThreeChecked,
            four: this.state.checkboxFourChecked
        }
        console.log(checkBoxess);
        
        let tempArray = []

        if (checkBoxess.one === true)
        {
            tempArray.push(this.state.answer1);
        }
        if (checkBoxess.two === true) 
        {
            tempArray.push(this.state.answer2);
        }
        if (checkBoxess.three === true)
        {
            tempArray.push(this.state.answer3);

        }
        if (checkBoxess.four === true)
        {
            tempArray.push(this.state.answer4);
        }

        const qna = {
            question: this.state.question,
            answers: [this.state.answer1,this.state.answer2,this.state.answer3,this.state.answer4],
            correctanswers: tempArray
        }
        console.log(qna);
       console.log(tempArray);
      

        axios.post('http://localhost:5000/qna/add', qna)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
      <h3>Quiz</h3>
      <form onSubmit={this.onSubmit} style={{display: 'flex', 'flexWrap': 'wrap'}}>
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
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}> 
        <h2>Question</h2>
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}> 
        
    
              
          <input  type="text"
              required
              className="form-control"
              value={this.state.question}
              onChange={this.onChangeQuestion}
              />
        </div>
        <div>
            <h2>Answers</h2>
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}>
          <input 
              type="text" 
              className="form-control"
              value={this.state.answers}
              onChange={this.onChangeAnswers1}
              />
           <input
                type="Checkbox"
                className="form-control"
                checked={this.state.checkboxChecked}
                onChange={(e) => this.handleCheckBox("1", e)}
           />

              
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}>
          <input 
              type="text" 
              className="form-control"
              value={this.state.answers}
              onChange={this.onChangeAnswers2}
              />
           <input
                type="Checkbox"
                className="form-control"
                checked={this.state.checkboxChecked}
                onChange={(e) => this.handleCheckBox("2", e)}
           />
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}>
          <input 
              type="text" 
              className="form-control"
              value={this.state.answers}
              onChange={this.onChangeAnswers3}
              />
          <input
              type="Checkbox"
                className="form-control"
                checked={this.state.checkboxChecked}
                onChange={(e) => this.handleCheckBox("3", e)}
           />
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}>
          <input 
              type="text" 
              className="form-control"
              value={this.state.answers}
              onChange={this.onChangeAnswers4}
              />
                        <input
              type="Checkbox"
                className="form-control"
                checked={this.state.checkboxChecked}
                onChange={(e) => this.handleCheckBox("4", e)}
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