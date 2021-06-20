import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './redux/store'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import Join from './components/join/Join'
import Chat from './components/chat/Chat'
import Messages from './components/messages/Messages'

import PrivateRoute from './components/routing/PrivateRoute'

import './App.css'
import io from 'socket.io-client'

// redux action
import { loadUser } from './redux/actions/auth'
import { getAllUsers } from './redux/actions/user'

let socket
const URL_SERVER = 'http://localhost:9008'

function App() {
	useEffect(() => {
		store.dispatch(loadUser())
		store.dispatch(getAllUsers())
	}, [])

	useEffect(() => {
		// socket = io(URL_SERVER)
		// socket.on('connection', () => {
		// 	console.log('Client', socket.id)
		// })
	}, [])
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<PrivateRoute exact path='/dashboard' component={Dashboard} />
					<PrivateRoute exact path='/join' component={Join} />
					<PrivateRoute exact path='/chat' component={Chat} />
					<PrivateRoute exact path='/chat/:id' component={Messages} />
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
