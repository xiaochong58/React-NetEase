import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Bundle from './Bundle';
import {Wrap} from 'app/components'

import Home from './Home'
import loadContent from 'bundle-loader?lazy!./Home/content'
import loadHot from 'bundle-loader?lazy!./Hot'
import loadMe from 'bundle-loader?lazy!./Me'

const Content = (props) => (
  <Bundle load={loadContent}>
    {Content => <Content {...props}/>}
  </Bundle>
);

const Hot = () => (
  <Bundle load={loadHot}>
    {(Hot) => <Hot/>}
  </Bundle>
);


const Me = () => (
  <Bundle load={loadMe}>
    {(Me) => <Me/>}
  </Bundle>
);

export default () =>
  <BrowserRouter>
    <Wrap>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/content/:id" component={Content}/>
        <Route path="/hot" component={Hot}/>
        <Route path="/me" component={Me}/>
      </Switch>
    </Wrap>
  </BrowserRouter>