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
              <WelcomeWrapper title='Welcome to littledata' hasProgress={true} fill={50}>
                <StoreInfo />
              </WelcomeWrapper>
            </Route>

            <Route path='/survey'>
              <WelcomeWrapper title='Welcome to littledata' hasProgress={true} fill={100}>
                <Survey />
              </WelcomeWrapper>
            </Route>

            <Route path='/destination'>
              <WelcomeWrapper title='Choose Destination' hasProgress={false} fill={0}>
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
