import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import Quiz from './components/Quiz';
import CreateQuiz from './components/CreateQuiz';
import userInfo from './components/userInfo/userInfo';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Quiz} />
        <Route path="/create" component={CreateQuiz} />
              <Route path="/user" component={CreateUser} />
              <Route path="/devInfo" component={userInfo} />
    </div>
    </Router>
  );
}

export default App;
