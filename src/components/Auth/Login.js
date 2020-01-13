import React, { Component } from 'react'
import  { Redirect, withRouter  } from 'react-router-dom'
import './style.css'

class Login extends Component {
    state = {
        formValue : {username : '', password : ''},
        formErrorMessage : {username : '', password : ''},
        formOptionValid : {username : false, password : false},
        formValid : false
    }

    handleSubmit = (e) =>{
        console.log(this.props.history)
        e.preventDefault()
        if(this.state.formValue.username === 'Admin' && this.state.formValue.password === '12345'){
            this.props.history.push('/home');
        }
        else{
            this.props.history.push('/');
        }
    }

    handleChange = (e)=>{
        let formValueObj = this.state.formValue
        let formOptionValidObj = this.state.formOptionValid
        switch(e.target.id){
            case 'username':
                formValueObj.username = e.target.value
                formOptionValidObj.username = true
                this.setState({formValue : formValueObj})
                this.setState({formOptionValid : formOptionValidObj})
                break;
            case 'password':
                formValueObj.password = e.target.value
                formOptionValidObj.password = true
                this.setState({formValue : formValueObj})
                this.setState({formOptionValid : formOptionValidObj})
                break;
        }
        if(this.state.formOptionValid.username === true && this.state.formOptionValid.password === true){
            this.setState({formValid : !this.state.formValid})
        }
    }
    render() {
        // if(this.state.formValue.username === 'Admin' && this.state.formValue.password === '12345'){
        //     return <Redirect to="/home" />
        // }
        // else{
        //     return <Redirect to="/home" />
        // }
        return (
            <React.Fragment>
                <div className="row login-card">
                    {/* <div className="col col-md-4"></div> */}
                    <div className="col col-md-12">
                        <div className="card ">
                            <div className="card-body">
                                {/* {JSON.stringify(this.state)} */}
                            {/* <i className="material-icons">account_circle</i> */}
                                <h4 className="card-title">Login</h4>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group text-left">
                                        <label htmlFor="username"><p className="font-weight-bold">Username</p></label>
                                        <input type="text" name="username" id="username" className="form-control" placeholder="e.g., susmita" aria-describedby="usernameHelp" onChange={this.handleChange}/>
                                        <small id="usernameHelp" className="text-muted">Username : Admin</small>
                                    </div>
                                    <div className="form-group text-left">
                                        <label htmlFor="password"><p className="font-weight-bold">Password</p></label>
                                        <input type="password" className="form-control" name="password" id="password" placeholder="e.g., a@b.c" aria-describedby="passwordHelp" onChange={this.handleChange}/>
                                        <small id="passwordHelp" className="text-muted">Password : 12345</small>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary" disabled = {!this.state.formValid}>Login </button>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default withRouter(Login)