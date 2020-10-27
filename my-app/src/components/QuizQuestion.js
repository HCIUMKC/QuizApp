import React, {Component} from 'react';

export default class QuizQuestion extends Component {

    constructor(props) {

        super(props);

        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
        this.state = {
            question: props.question,
            answer1: props.answers[0],
            answer2: props.answers[1],
            answer3: props.answers[2],
            answer4: props.answers[3],
            users: [],
            correctAnswers: props.correctanswers,
            checkboxOneChecked: false,
            checkboxTwoChecked: false,
            checkboxThreeChecked: false,
            checkboxFourChecked: false,
            buttonDisabled: false
        }

    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const checkBoxess = {
            one: this.state.checkboxOneChecked,
            two: this.state.checkboxTwoChecked,
            three: this.state.checkboxThreeChecked,
            four: this.state.checkboxFourChecked
        }
        
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

    
        if (JSON.stringify(tempArray) === JSON.stringify(this.state.correctAnswers))
        {
            this.props.action(true);
        }
        else {
            this.props.action(false);
        }

        this.setState({disabled: true});
      

        //window.location = '/';
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


    render() {
        return (
    <div>
      <form onSubmit={this.onSubmit} style={{display: 'flex', 'flexWrap': 'wrap'}}>
        
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}> 
        <label style={{width: '100%'}}> <h2>Question: {this.state.question}</h2> </label> 
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}>
        <label style={{width: '10%'}}>{this.state.answer1}</label>
                        <input
                type="Checkbox"
                disabled={this.state.disabled}
                className="form-control"
                checked={this.state.checkboxChecked}
                onChange={(e) => this.handleCheckBox("1", e)}
           />
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}>
        <label style={{width: '10%'}}>{this.state.answer2}</label>
                        <input
                type="Checkbox"
                disabled={this.state.disabled}
                className="form-control"
                checked={this.state.checkboxChecked}
                onChange={(e) => this.handleCheckBox("2", e)}
           />
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}>
        <label style={{width: '10%'}}>{this.state.answer3}</label>
                        <input
                type="Checkbox"
                className="form-control"
                disabled={this.state.disabled}
                checked={this.state.checkboxChecked}
                onChange={(e) => this.handleCheckBox("3", e)}
           />
        </div>
        <div className="form-group" style={{display: 'inline-flex', flexDirection: 'row', width: '100%'}}>
        <label style={{width: '10%'}}>{this.state.answer4}</label>
                        <input
                type="Checkbox"
                className="form-control"
                disabled={this.state.disabled}
                checked={this.state.checkboxChecked}
                onChange={(e) => this.handleCheckBox("4", e)}
           />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit Answer" className="btn btn-primary" disabled={this.state.disabled}/>
        </div>
      </form>
    </div>
        )
    }
}