import Banner from '../Components/Home/Banner';
import CarSection from '../Components/Home/CarSection';
import AboutUs from '../Components/Home/AboutUs';
import React from 'react';
import '../Components/Home/styleNew.css'

const Home = () => {
    return(
        <React.Fragment className="imageBck">
        <Banner/>
        <CarSection/>
        <AboutUs/>
        </React.Fragment>
    )
}
export default Home;