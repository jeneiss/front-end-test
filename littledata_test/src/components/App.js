import React from 'react'
import { DestinationContextProvider } from './DestinationContext'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Welcome from './Welcome'
import WelcomeWrapper from './WelcomeWrapper'
import StoreInfo from './StoreInfo'
import Survey from './Survey'
import EndScreen from './EndScreen'
import Destination from './Destination'

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

            <Route path='/destination'>
              <WelcomeWrapper>
                <Destination />
              </WelcomeWrapper>
            </Route>

            <Route path='/end-screen'>
              <EndScreen />
            </Route>
          </DestinationContextProvider>


        </Switch>
      </Router>
    </div>
  )
}

export default App
