import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Wrap} from 'app/components'
import Home from './Home'
import Content from './Home/content'
import Hot from './Hot'
import Me from './Me'

export default (props) => (
  <BrowserRouter>
    <Route render={({location}) => (
      <Wrap>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <Switch key={location.key}>
            <Route exact path="/" location={location} component={Home}/>
            <Route path="/content/:id" location={location} component={Content}/>
            <Route path="/hot" location={location} component={Hot}/>
            <Route path="/me" location={location} component={Me}/>
          </Switch>
        </CSSTransitionGroup>
      </Wrap>
    )} />
  </BrowserRouter>
)
