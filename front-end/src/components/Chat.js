import React, { Component } from 'react';
import store from '../stores/Store'
import * as actions from '../scripts/actions'
import { observer } from 'mobx-react';
import Docs from './Docs'

@observer
class Chat extends Component {
    state = { 
        msg:null,
        id:null
     }

    componentDidMount(){
        
        store.unsetmessage()
       let  {id}=this.props.match.params
       this.setState({
           id
       })
        actions.setMessagesSentListener(store.user.id,id)
        actions.setMessagesReceivedListener(store.user.id,id)
        
    }
    _handlechange(e)
    {
        this.setState({
            msg:e.target.value
        })
    }
    render() { 
        let  {id}=this.props.match.params
        return ( 
            <div style={{backgroundColor:'blue'}}>
            
            <div  style={S.chat}>
            <div className='row'>
            <div className='col l12 12 s12'>
        {
            store.messages.map((v,i)=>{
                return(
                    
                            <p key={i}>{v.author}:{v.body}</p>
                    
                )
            })
        }
        <span style={{position:'fixed',bottom:0,left:0}}>
        <input onChange={(e)=>this._handlechange(e)} width='100%'></input>
        <button onClick={()=>actions.sendMessage(store.user.id,this.state.id,this.state.msg,store.user.name)}>SEND</button>
        </span>
        </div> 
        </div>
        </div>
        </div>
        );
    }
}
const S={
    chat:{
        position:'absolute',
        width:'100%',
        height:'100%',
        
    }
}
export default Chat;