import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, name, city, birth, email, starts, rating } = steps;

    this.state =  { submit,  name, city, birth, email, starts, rating }; 
  }


  componentDidMount() {
    const userObject = {
      submit:this.state.submit.value,
      name:this.state.name.value,
      city:this.state.city.value,
      birth:this.state.birth.value,
      email:this.state.email.value,
      starts:this.state.rating.value,
    };
    axios.post(`https://606b0642f8678400172e56af.mockapi.io/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>Thank you! Your data was submitted successfully!</div>
      );
    }
  };


  export default Post;