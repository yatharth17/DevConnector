import React, {Component, Fragment} from'react';
import {observer} from 'mobx-react';
import LoginButton from './LoginButton';
import store from '../stores/Store';

@observer
class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">Chatting</a>
					<ul id="nav-mobile" className="right">
						<li><LoginButton /></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header;

