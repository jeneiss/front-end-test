import React from 'react'
import { DestinationContext, DestinationContextProvider } from './DestinationContext'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Welcome from './Welcome'
import WelcomeWrapper from './WelcomeWrapper'
import StoreInfo from './StoreInfo'
import Survey from './Survey'
import EndScreen from './EndScreen'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Welcome />
          </Route>

          <DestinationContextProvider>
            <Route path='/store-info'>
              <WelcomeWrapper>
                <StoreInfo />
              </WelcomeWrapper>
            </Route>

            <Route path='/survey'>
              <WelcomeWrapper>
                <Survey />
              </WelcomeWrapper>
            </Route>
          </DestinationContextProvider>

          <Route path='/end-screen'>
            <EndScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

//Needs router
//3 buttons with paths to:
//  John: <StoreInfo /> => <Survey /> => <EndScreen />
//  Claire: <Survey /> => <EndScreen />
//  Paul: <EndScreen />
