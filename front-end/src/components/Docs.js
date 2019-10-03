import React, { Component } from 'react';
import AceEditor from "react-ace";
import Select from "react-dropdown-select"
import store from '../stores/Store'
import "brace/mode/c_cpp";
import "brace/mode/python";
import "brace/mode/javascript";
import "brace/mode/html";
import "brace/mode/ruby";
import "brace/mode/json";
import "brace/mode/mysql";
import "brace/theme/tomorrow_night_blue";
import "brace/theme/monokai";
import temp from './intial';
import "brace/theme/github";
import "brace/theme/terminal";
import fire, {firebase, firestore} from '../scripts/fire';
import { Link } from 'react-router-dom'

class Docs extends Component {
    
    
     options_mode = [
      { value: 'c_cpp', label: 'C++' },
      { value: 'python', label: 'Python' },
      { value: 'javascript', label: 'Javascript' },
      { value: 'html', label: 'HTML' },
      { value: 'ruby', label: 'Ruby' },
      { value: 'mysql', label: 'MySql' },
      
      ]
      options_theme = [
        { value: 'tomorrow_night_blue', label: 'Tomorrow Night Blue' },
        { value: 'monokai', label: 'Monokai' },
        { value: 'github', label: 'Github' },
        { value: 'terminal', label: 'Terminal' },
        ]

      
      
    constructor(props)
    {
      super(props);
      this.state={
        code:'',
        language:'c_cpp',
        theme:'github',
        id:props.match.params.id
      }
      

    }
    componentDidMount()
    {
      console.log('Avikant')
      
      
      firestore.collection('document').doc(this.state.id).onSnapshot(doc=>{
        if(doc.exists){
          if(doc.data().body)
          this.setState({
            code:doc.data().body
          })
        }
      })
        
      }
    
     _langchange(item) {
       if(item[0])
            this.setState({
              language: item[0].value
            })
        }
    
     
     onChange(newValue) {
        
      firestore.collection('document').doc(this.state.id).set({
          body:newValue
        
        })

        
      }
      handleClick()
      {
        this.setState({
          code:''
        })
      }
      _themechange(item)
      {
        if(item[0])
        this.setState({
          theme:item[0].value
        })
        
      }
      _loadtemp()
      {
        this.setState({
          code:temp[this.state.language]
        })
       
      }
      
    render() { 
      
      
        return (  
    <div>    
    
          
            <Select options={this.options_mode} onChange={(values) => this._langchange(values)} placeholder={'MODE-C++'}/>
            <Select options={this.options_theme} onChange={(values) => this._themechange(values)} placeholder={'Theme-Github'}/>
            <br/>
            <br/>
            <Link to={'/share/'+this.state.id}><button>SHARE DOC</button></Link>
            <br/>
            <br/>
            <button onClick={()=>this.handleClick()}>Clear</button>
            <br/><br/>
            <button onClick={()=>this._loadtemp()}>LOAD TEMPLATE</button>
            <AceEditor
            mode={this.state.language}
            theme={this.state.theme}
            onChange={(e)=>this.onChange(e)}
            value={this.state.code}
            height={"1000px"}
            width={"80%"}
            fontSize={24}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: Infinity }}
              />
        
        </div>
        );
    }
}
 
export default Docs;