import React, {Fragment} from 'react';
import Homepage from './components/Page/Homepage'
import Navbar from './components/Layout/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SocialMedia from './components/Page/SocialMedia';
import Achievement from './components/Page/Achievement';
function App() {
  return (
    <Router basename={ProcessingInstruction.env.PUBLIC_URL}>
     <Fragment>
       <Navbar />
       <Switch>
         <Route exact path="/" component={Homepage} />
         <Route exact path="/socialmedia" component={SocialMedia} />
         <Route exact path="/achievement" component={Achievement} />
       </Switch>  
     </Fragment>
    </Router>
  );
}

export default App;
