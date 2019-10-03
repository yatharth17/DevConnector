import React, {Component, Fragment} from'react';
import {observer} from 'mobx-react';
import Header from '../components/Header';
import store from '../stores/Store';
import Chat from '../components/Chat'
import ClassicFormPage from '../components/Formpage'
import {Link} from 'react-router-dom'
import LoginButton from '../components/LoginButton'
import * as actions from '../scripts/actions'
import CardExample from '../components/Card'


import  './index.css'
@observer
class MainPage extends Component {
	

	render() {
	
		return (
			<div className="bg">
			<LoginButton/>
		
				
				{
					store.user?
						<div>
							<p>{store.user.name}</p>
							<p>{store.user.email}</p>
							<Link to='/adduser' ><button>ADD USER</button></Link>
							
						<br/><br/>
						<button onClick={()=>actions.makegroup(store.user.id)}>Make Group</button>
						<br/><br/>
						<button onClick={()=>actions.makedoc(store.user.id)}>MAKE DOC</button>


						{
							store.user.docsid.map((v,i)=>{
								return(
									<Link to={'/Docs/'+v} key={i}>
									<CardExample text={v} type='Doc'/>
									</Link>
								)
							})
						}

						{
							store.user.Groupsid.map((v,i)=>{
								return(
									<Link to={'/Group/'+v} key={i}>
									<CardExample text={v} type='Group'/>
									</Link>
								)
							})
						}


						{
								store.user.chats.map((v,i)=>{
									return(
									<Link to={'/messages/'+v.id} key={i}>
									<CardExample text={v.name} image={v.photoUrl} type='Chat'/>
									</Link>
									)
								})
							}

							{/* {
							store.chatlist.map((v,i)=>{
								return(
									<Link to={'/messages/'+v.id} key={i}>
									<div className="card-panel teal"><span className="white-text"><img src={v.photoUrl} width={50} className="circle responsive-img"></img>:{v.name}
									
									</span></div>
									</Link>
								)
							})
						} */}

						{/* {
							store.user.chats.map((v,i)=>{
								return(
									<Link to={'/messages/'+v} key={i}>
									<div className="card-panel teal"><span className="white-text">{v}
									
									</span></div>
									</Link>
								)
							})
						} */}
						
						</div>
						:null
				}
				
			</div>
		)
	}
}

export default MainPage;

