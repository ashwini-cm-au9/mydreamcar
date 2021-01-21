import { Route,Redirect } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Home from '../Containers/Home';
import FiltersPage from '../Containers/FiltersPage';
import CarDescriptionPage from '../Containers/CarDescriptionPage';
import ContactUsPage from './Contact/ContactUs';
import CarBooking from './Book/Carbooking';
import EmiPage from '../Containers/EmiPage';
import ShowRoom from './ShowRooms/ShowRoom';
import ShowBook from './ShowRooms/ShowBook';
import ReadAboutUs from './ReadAbout/ReadAboutUs'
// import PrivateRoute from './PrivateRoute';

import React from 'react';

const isAuth = () => {
    let user;
    user = localStorage.getItem('user');
    if(user){
        return true;
    }
    else{
        return false;
    }
}


const PrivateRoute = ({ component:Component, ...rest })=>(
    <Route {...rest} render={(props) => (
        isAuth() === true
        ? <Component {...props} />
        : <Redirect to='/'/>
    )}/>
)



class Routing extends React.Component {
    
    render(){

        return(
            <React.Fragment>
                <HeaderComponent/>
                <Route exact path="/" component={Home}/>
                <PrivateRoute path="/cars" component={FiltersPage}/>
                <PrivateRoute path="/desc/:id" component={CarDescriptionPage}/>
                <Route path="/contact" component={ContactUsPage}/>
                <PrivateRoute path="/booking/:modelIDFromHome" component={CarBooking}/>
                <Route path="/emi" component={EmiPage}/>
                <Route path="/show" component={ShowRoom}/>
                <Route path="/book_show/:sh_data" component={ShowBook}/>
                <Route path="/more" component={ReadAboutUs}/>
                <FooterComponent/>
            </React.Fragment>
        )
    }
    
}
export default Routing;