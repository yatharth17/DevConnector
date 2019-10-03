import React, { Component } from 'react';
import Store from '../stores/Store'
import * as actions from '../scripts/actions'
import store from '../stores/Store';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Adduser extends Component {
    state = {  }
    componentDidMount(){
        actions.totalusersListener()
    }

    render() { 
        return (  
        <div>
        Users Page
            {
                store.total.map((v,i)=>{
                    return <div key={i}><img src={v.photoUrl} className="circle responsive-img" width={50}></img> <button
                    onClick={()=>actions.adduser(store.user.id,v.id,v.name,v.photoUrl)}>{v.name}</button></div>
                })
            }
        </div>
        
        );
    }
}
 
export default Adduser;