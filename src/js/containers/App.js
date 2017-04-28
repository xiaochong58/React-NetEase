import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Wrap} from 'app/components'
import Home from './Home'
import Content from './Home/content'
import Hot from './Hot'
import Me from './Me'

export default (props) => (
  <BrowserRouter>
    <Wrap>
      <Switch>
        <Route exact path="/" location={location} component={Home}/>
        <Route path="/content/:id" location={location} component={Content}/>
        <Route path="/hot" location={location} component={Hot}/>
        <Route path="/me" location={location} component={Me}/>
      </Switch>
    </Wrap>
  </BrowserRouter>
)
