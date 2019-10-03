import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Adduser from './components/Adduser'
import MainPage from './pages/MainPage';
import Chat from './components/Chat'
import Docs from './components/Docs'
import Shareuser from './components/Shareuser'
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
class App extends Component {
	state={
		isOpen:true
	}
	toggle=()=>{this.setState(!isOpen)}
	render(){
		return (
			
			<Router>
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route path='/adduser' component={Adduser}/>
					<Route path='/messages/:id' component={Chat}/>
					<Route path='/Docs/:id' component={Docs}/>
					<Route path='/share/:id' component={Shareuser}/>
				</Switch>
				
			</Router>
			
			
		)
	}
}

export default App;




