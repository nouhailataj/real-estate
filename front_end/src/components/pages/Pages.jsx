import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Login from "../Login/Login"
import Register from "../Login/Register"
import ParentComponent from "../ParentComponent"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path='/login' >
      <ParentComponent />
    </Route>
      <Route exact path='/register'>
        <ParentComponent />
      </Route>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
