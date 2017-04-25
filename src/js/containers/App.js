import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Wrap} from 'app/components'
import Home from './Home'
import Content from './Home/content'
import Hot from './Hot'
import Me from './Me'

/*import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();*/

/*export default class index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch key={location.key}>
          <Route exact path="/" location={location} component={Home}/>
          <Route path="/content/:id" location={location} component={Content}/>
          <Route path="/hot" location={location} component={Hot}/>
          <Route path="/me" location={location} component={Me}/>
        </Switch>
      </BrowserRouter>
    )
  }
}*/

export default (props) => (
  <BrowserRouter>
    <Wrap>
      <Switch key={location.key}>
        <Route exact path="/" location={location} component={Home}/>
        <Route path="/content/:id" location={location} component={Content}/>
        <Route path="/hot" location={location} component={Hot}/>
        <Route path="/me" location={location} component={Me}/>
      </Switch>
    </Wrap>
  </BrowserRouter>
)
