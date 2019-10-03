import React, { Component } from 'react';
import Store from '../stores/Store'
import * as actions from '../scripts/actions'
import store from '../stores/Store';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Shareuser extends Component {
    state = {  }
    constructor(props)
    {
        super(props)
        this.state={
            id:props.match.params.id
        }
        console.log(this.state.id)
    }
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
                    onClick={()=>actions.shareuser(v.id,this.state.id)}>{v.name}</button></div>
                })
            }
        </div>
        
        );
    }
}
 
export default Shareuser;