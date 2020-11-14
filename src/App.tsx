import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';
import Navigation from './components/navigation';
import ProsecutorsOffices from './screens/prosecutors-offices';
import ProsecutorsOfficesForm from './screens/prosecutors-offices-form';
import SimpleMap from './screens/simple-map';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Navigation />

          <main role="main" className="px-5 bg-dark w-100">
            <Switch>
              <Route path="/prosecutorsOffices" component={ProsecutorsOffices} exact />
              <Route path="/prosecutorsOffices/add" component={ProsecutorsOfficesForm} />
              <Route path="/prosecutorsOffices/edit/:id" component={ProsecutorsOfficesForm} />
              <Route path="/googleMaps" component={SimpleMap} />
              <Redirect from="/" to="/prosecutorsOffices" />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
