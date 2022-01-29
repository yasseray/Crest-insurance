import React from 'react'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import HeaderCrest from '../components/HeaderCrest'
import FooterCrest from '../components/FooterCrest'
import Premium from '../Views/Premium'
import Premium2 from '../Views/Premiumstep2'
import Premium3 from '../Views/Premiumstep3'
import Premium4 from '../Views/Premiumstep4'
import Premium5 from '../Views/Premiumstep5'

const Router = () => {
  return (
    <AppRouter basename={"test"}>
      <HeaderCrest />
      <Switch>
        <Route exact path='/' render={() => { return <div>10</div> }} />
        <Route exact path='/1' render={() => { return <Premium/> }} />
        <Route exact path='/2' render={() => { return <Premium2/>  }} />
        <Route exact path='/3' render={() => { return <Premium3/> }} />
        <Route exact path='/4' render={() => { return <Premium4/> }} />
        <Route exact path='/5' render={() => { return <Premium5/> }} />
      </Switch>
      <FooterCrest/>
    </AppRouter>
  )
}

export default Router
