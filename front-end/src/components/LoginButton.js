import React, {Component, Fragment} from'react';
import { observer } from 'mobx-react';
import fire, {firebase} from '../scripts/fire';
import * as actions from '../scripts/actions';
import store from '../stores/Store';
import { Link } from 'react-router-dom';
import FormPage from './Formpage'
@observer
class LoginButton extends Component {
	componentDidMount() {
		actions.setAuthListener()
		
	}
	render() {
		return (
			<Fragment>
				{
					store.isLoggedIn?
						<div>
						<img src={store.user.photoUrl} className="circle responsive-img" width={50} />
						<button onClick={()=>actions.signOut()}>Sign Out</button><br/><br/>
						</div>

						:
						<FormPage/>
						
				}
			</Fragment>
		)
	}
}

export default LoginButton;

