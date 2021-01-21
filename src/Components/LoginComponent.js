import React from 'react';
import { GoogleLogin,GoogleLogout  } from 'react-google-login';
import googleConfig from '../config/google.json';

class LoginComponent extends React.Component{

    constructor(){
        super();
        this.state={
            isLoggedin:false
        }
    }

    googleCallback = (response) => {
        if(!response || !response.accessToken) {
            alert("Sorry, Google signin has failed. Please try again");
            return;
        }
        const user = {
            token: response.accessToken,
            userData: response.profileObj
        }
        localStorage.setItem('user',JSON.stringify(user))
        this.setState({isLoggedin:true})
    }
    logout = () => {
        localStorage.removeItem('user')
        this.setState({isLoggedin:false})
    }
   render(){
       return(
           <>
           {
               !this.state.isLoggedin &&
            <GoogleLogin 
                clientId={googleConfig.clientId}
                onSuccess={this.googleCallback}
                onFailure={this.googleCallback}
                buttonText="Login"
                isSignedIn={true}
            />
           }
           {
                this.state.isLoggedin && 
            <GoogleLogout
                clientId={googleConfig.clientId}
                buttonText="Logout"
                onLogoutSuccess={this.logout}
                >
            </GoogleLogout>
            }
           </>
       )
   }
}
export default LoginComponent;