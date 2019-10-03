import fire, {firebase, firestore} from './fire';
import store from '../stores/Store';

export function login() {
	fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
	.then(function() {
		return loginHelper()
	})
	.catch(function(error) {
		console.log(error)
	});
}
export function signOut()
    {
        firebase.auth().signOut().then(function() {
            console.log("Signed Out")
          }).catch(function(error) {
            console.log("Could not sign Out")
          });
          
    }
function loginHelper() {
	var provider = new firebase.auth.GoogleAuthProvider();
	var promise = fire.auth().signInWithPopup(provider)
	.then(function(result) {
		var user = result.user;
		createUserIfNotExists(user)
	}).catch(function(error) {
		console.log(error)
	});
	return promise;
}

export function setAuthListener() {
	fire.auth().onAuthStateChanged(user=>{
		if (user) {
			setListenerOnUser(user.uid)
			} else {
			if (unsetListener) {
				unsetListener()
			}
			store.unsetUser()
		}
	})
}

export function createUserIfNotExists(loginUser){
	let uid = loginUser.uid
	firestore.collection('users').doc(uid).get().then(doc=>{
		if (!doc.exists) {
			return firestore.collection('users').doc(uid).set({
				id: uid,
				email: loginUser.email,
				name: loginUser.displayName,
				photoUrl: loginUser.photoURL,
				chats:[],
				docsid:[]
			})
		}
	})
}

var unsetListener = null;
export function setListenerOnUser(userId) {
	unsetListener = firestore.collection('users').doc(userId).onSnapshot(doc=>{
		if(doc.exists){
			let user = doc.data()
			user.id = doc.id
			store.setUser(user)
			
			
		}
	})


}

export function sendMessage(senderId,receiverId,body,author)
{
	
		
var promise=firestore.collection('messages').add({
	senderId,
	receiverId,
	body,
	author,
	time:firebase.firestore.FieldValue.serverTimestamp()

})
return promise
}

export function setMessagesSentListener(senderId,receiverId)
{
	firestore.collection('messages').where('senderId','==',senderId).where('receiverId','==',receiverId).onSnapshot(snap=>{
		if(snap)
		{
			snap.docChanges().forEach(change=>{
				if(change.type=='added'){

				let msg=change.doc.data()
				msg.id=change.doc.id
				store.addMessageSent(msg)
				}
			})
			
				
		
		}
	})
}
export function setMessagesReceivedListener(receiverId,senderId)
{
	firestore.collection('messages').where('receiverId','==',receiverId).where('senderId','==',senderId).onSnapshot(snap=>{
		if(snap)
		{
			snap.docChanges().forEach(change=>{
				if(change.type=='added'){

				let msg=change.doc.data()
				msg.id=change.doc.id
				store.addMessageReceived(msg)
				}
			})
		}
	})
}


export function totalusersListener(){
	
	firestore.collection('users').get().then(doc=>{
		if(doc)
			store.settotalusers(doc.docs)
	})
		
}

export function makegroup(userId){

	store.unsetchat()
	
	
	firestore.collection("Groups").add({
		receiverId:[]
	})
	.then(groupRef=>{
		
		firestore.collection('users').doc(userId).get().then(doc=>{
			if(doc.exists){
				var x=doc.data()
				x.Groupsid.push(groupRef.id)
				firestore.collection('users').doc(userId).set({
				...x
				})
			}
		})
	})



	
}

export function adduser(userId,id,name,photoUrl)
{

	firestore.collection('users').doc(userId).get().then(doc=>{
		if(doc.exists){
			var x=doc.data()
			x.chats.push({
				id,
				name,
				photoUrl
			})
			firestore.collection('users').doc(userId).set({
			...x
			})
		}
	})
	

}

export function chatlistrender(user)
{
	
	store.unsetchat()
	var chatlist=user.chats.map((v)=>{
			
			firestore.collection('users').doc(v).get().then(doc=>{
					if(doc.exists){
								var x=doc.data()
									x={
											id:x.id,
											name:x.name,
											photoUrl:x.photoUrl
									}
						
							}
				store.setchatlist(x)
			})
				
			
		})
		
}

export function makedoc(userId)
{

	
store.unsetchat()
firestore.collection("document").add({
    body:null
})
.then(docRef=>{
	
	firestore.collection('users').doc(userId).get().then(doc=>{
		if(doc.exists){
			var x=doc.data()
			x.docsid.push(docRef.id)
			firestore.collection('users').doc(userId).set({
			...x
			})
		}
	})
})
.catch(function(error) {
    console.error("Error adding document: ", error);
})
store.unsetchat()

}


export function shareuser(userId,docId)
{
	firestore.collection('users').doc(userId).get().then(doc=>{
		if(doc.exists){
			var x=doc.data()
			x.docsid.push(docId)
			firestore.collection('users').doc(userId).set({
			...x
			})
		}
	})
}






















