import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import registerServiceWorker from './registerServiceWorker'
import firebase from './firebase'
import Spinner from './Spinner'

import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { composeWithDevTools } from  'redux-devtools-extension'
import rootReducer from './reducers';
import { setUser, clearUser } from './actions'

const store = createStore(rootReducer, composeWithDevTools())

class Root extends React.Component {
  componentDidMount(){
    // 網頁reloading完work唔work
    // console.log(this.props.isLoading)
    firebase.auth().onAuthStateChanged(user => {
      // 如果有用户資料 (work)
      if (user) {
        //console.log(user)
        this.props.setUser(user)
        this.props.history.push("/")
      } else {
        //console.log('sdfsdjhfakfgak')
        this.props.history.push("/login")
        this.props.clearUser()
      }
    })
  }

  render() {
    console.log(this.props)
    return this.props.isLoading ? (<Spinner />)
    : (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    )
  }
}

const mapStateFromProps = state => ({
  isLoading: state.user.isLoading
})

const RootWithAuth = withRouter(
  connect(mapStateFromProps,{ setUser, clearUser })(Root))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById("root"))
// localhost
registerServiceWorker()
