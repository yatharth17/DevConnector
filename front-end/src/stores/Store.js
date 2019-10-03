import {observable, action, computed} from 'mobx';
import { getMessagesRecievedBy } from '../scripts/actions';


class Store {

	@observable isLoggedIn = false;

	@observable user = null

	@observable chatlist=[]

	@observable totalusers=[]

	@observable messagesSent=[]

	@observable messagesRecieved=[]

	


	@action addMessageSent(msg)
	{
		this.messagesSent.push(msg)
	}

	

	@action addMessageReceived(msg)
	{
		this.messagesRecieved.push(msg)
	}
	@action setUser(user) {
		this.isLoggedIn = true
		this.user = user;
		
	}
	@computed get messages(){
		let msgList=[...this.messagesSent,...this.messagesRecieved]
		let newmsgList=[]
		newmsgList=msgList.sort((a,b)=>{
			
			return (a.time>b.time) ? 1:-1
		})
		
		return newmsgList
	}
	@action unsetUser() {
		this.isLoggedIn = false
		this.user = null
		this.messagesSent=[]
		this.messagesRecieved=[]
	}

	@action settotalusers(doc){
		
		this.totalusers=[]
		doc.map((v,i)=>{
			this.totalusers.push(v.data())
		
		})
		
	}

	@computed get total(){

		let userslist=[...this.totalusers]
	
		return userslist
	}

// 	@computed get setchatlist(){

// 		this.userfirestore.collection('users').doc(this.user.id).get().then(doc=>{
// 			if(doc.exists){
// 						var x=doc.data()
// 							x={
// 									id:x.id,
// 									name:x.name,
// 									photoUrl:x.photoUrl
// 							}
				
// 					}
		
// 	})
		
// }
	
	@action unsetchat(){
		this.chatlist=[]
	}

	@action unsetmessage(){
		
		this.messagesSent=[]
		this.messagesRecieved=[]
	}
}

const store = new Store()
export default store;


