import Header from './components/Header';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/page3'
import Form from './pages/Form';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
function App() {
  return (
    
      <BrowserRouter>
        <Router>
          <div className="App">
            {/* <Header/> */}
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Page3/>
                </Route>
                <Route path="/page2">
                  <Page2/>
                </Route>
                <Route path="/page3">
                  <Page1/>
                </Route>
                <Route path="/form">
                 <Form/>
              </Route>
              <Route path="/signup">
                 <SignUp/>
              </Route>
              <Route path="/login">
                 <LogIn/>
              </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </BrowserRouter>
  );
}

export default App;
