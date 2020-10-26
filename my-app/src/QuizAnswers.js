import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import React, { Component } from 'react';

class QuizAnswers extends React.Component {
    render() {
        return (
        <div className="quizAnswers">
        <ButtonGroup vertical>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
        </ButtonGroup>
          </div>
        );
      }
      
    }
    export default QuizAnswers;