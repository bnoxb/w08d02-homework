import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class Login extends Component {
    constructor () {
        super();

        this.state = {
            username: "",
            password: ""
        }
    }

    handleInput = (e)  => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    } 

    handleSubmit = (e) => {
        console.log('submit ressed');

        e.preventDefault();

        this.props.handleLogin(this.state.username);
    }

    render() {
        return(
            <div>
                <Form>
                    <Form.Input type="text" name="username" value={this.state.username} onChange={this.handleInput}/>
                    <Form.Input type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
                    <Button color="green" type="submit" value="submit" onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login;