import React from 'react';
import { Contact } from './pages/contact'
import { Otp } from './pages/otp'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
   <div className="container">
     <Switch>
        <Route path='/' exact component={Contact} />
        <Route path='/otp' exact component={Otp} />
        </Switch>
</div>

  );
}

export default App;
