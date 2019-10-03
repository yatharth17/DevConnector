import React ,{Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
import store from '../stores/Store';
class CardExample extends Component  {
    state={
        text:null,
        image:null,
        type:null

    }
    componentDidMount(){
        let  {text,image,type}=this.props   
        this.setState({
            text,
            image,
            type
        })
    }
    
    render(){
  return (
      <MDBRow>
    <MDBCol md='4'>
      <MDBCard style={{ width: "10rem" }}>
        <MDBCardImage className="img-fluid" src={this.state.image} waves />
        <MDBCardBody>
          <MDBCardTitle>{this.state.type}</MDBCardTitle>
          <MDBCardText>
            {this.state.text}
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
  )
    }
}

export default CardExample;