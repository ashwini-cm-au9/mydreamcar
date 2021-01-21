
import {Link} from 'react-router-dom'
const AboutUs = () =>{
    return(
        <section className="section section-bg" id="schedule" style={{backgroundImage:"url(assets/images/about-fullscreen-1-1920x700.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div id="#aboutus" className="section-heading dark-bg">
                            <h2>Read <em>About Us</em></h2>
                            <img src="assets/images/line-dec.png" alt=""/>
                            <p style={{wordSpacing:"0.6rem",lineHeight:"2rem",fontSize:"1rem"}}>
                                About Us
                                Welcome to MyDream Car!!!
                                Car buying is always everybody's dream and it is very special occasion, we MyDreamCar as a premium Benz Car dealership always endeavor to achieve highest level of customer satisfaction and improving the buying experience for our customers. We have best of the sales staff to cater all your car buying needs and also have the skilled professional to take care for your car services and other requirements. We not only sells Benz cars but we also deal in Used Cars, Insurance, Finance, Accessor...</p>
                        </div>

                        <div className="cta-content text-center">
                            <div className="main-button">
                        <Link to='/more'>Read More About Us</Link>
                    
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;