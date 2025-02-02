import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SponsorFormButton from ".//SponsorFormButton";

class SponsorForm extends React.Component {
  

  constructor () {

    super();
    this.state = {name: localStorage.getItem("username") !== null ? localStorage.getItem("username"): "",amount: '',submittedName: localStorage.getItem("username") !== null ? localStorage.getItem("username"): "",rating: 0, show: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    if (this.state.amount > 0){
      this.setState({show: true, submittedName: this.state.name});
      console.log('Name:' + this.state.name);
      console.log('Amount: $' + this.state.amount);
      if(this.state.amount >= 100) {
        this.setState({rating: 5});
        this.setState({show:true});
      } else if (this.state.amount >= 50) {
        this.setState({rating: 4});
        this.setState({show:true});
      }  else if (this.state.amount >= 25) {
        this.setState({rating: 3});
        this.setState({show:true});
      } else if (this.state.amount >= 10) {
        this.setState({rating: 2});
        this.setState({show:true});
      } else if (this.state.amount < 10 && this.state.amount > 0){
        this.setState({rating: 1});
        this.setState({show:true});
      }
  
      if (this.state.amount < 20 && this.state.amount > 0){
        this.setState({rating: 0});
        this.setState({show:true});
      }
      event.preventDefault();
    } else{
      this.setState({show:false});
      event.preventDefault();

    }
  }
  render () {
    return (
      
      <form style={{margin: "20px"}} onSubmit={this.handleSubmit}>

        <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
          
        }}>
        DONATE NOW:
        </div>
        <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}>
     
        <TextField style={{margin: "10px"}} variant="filled" label="Name" type="text" name="name" value={localStorage.getItem("username") !== null ? localStorage.getItem("username"): ""} onChange={this.handleChange} />
        <TextField style={{margin: "10px"}}  variant="filled" label="Amount" type="number" name="amount" onChange={this.handleChange}/>
        </div>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}>
        <SponsorFormButton
          rating =  {this.state.rating}        
          sponserName = {this.state.submittedName}
          show = {this.state.show}
        />
 

 

        <p>&nbsp;</p>

        </div>
      </form>
    );
  }
}
export default SponsorForm
