import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class Register extends Component {

state={
    fullName:null,
    email:null,
    password:null,
    errors:{
        fullName:'',
        email:'',
        password:''
    }
}
    handleChange=(event)=>{
        event.preventDefault();
       let errors=this.state.errors;
        const {name,value}=event.target;
        switch(name)
        {
            case 'fullName':
    errors.fullName=value.length<5?'Name should have atleast 5 character':'';
    break;
            case 'email':        
    const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    errors.email=validEmailRegex.test(value)?'':'Email should have @ and .';
    break;
             case 'password':
    errors.password=value.length<8?'Password should have atleast 8 characters':'';
    break;
        }
        this.setState({errors,[name]:value});
    }

     validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
      };
handleSubmit=(event)=>{
    event.preventDefault();
    if(this.validateForm(this.state.errors)){
        alert('valid form')
    }
    if(this.state.errors.fullName!='')
    {
        alert(this.state.errors.fullName);
    }
    if(this.state.errors.email!='')
    {
        alert(this.state.errors.email);
    }
    if(this.state.errors.password!='')
    {
        alert(this.state.errors.password);
    }

}

    render(){
    return (
        <div>
            
            <div className="container">
            <h1 style={{color:'red'}}>Register Here!!!</h1>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="fullName" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                     <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                     <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.handleChange} />
                </Form.Group>
                <button type="submit" className="btn btn-secondary">Submit</button>

            </Form>
            </div>
        </div>
    )
    }
}

export default Register
