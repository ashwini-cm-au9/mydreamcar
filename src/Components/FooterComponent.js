import { Link } from 'react-router-dom';
import './FooterComponent.css';
const Footer = () => {
    return(
        <footer className="site-footer">
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p className="text-justify" style={{color:"white"}}>mydreamcar.in <i>FIND MERCEDES BENZ FOR YOU</i> is an website  to help the people to select best Merceds Benz. MyDreamCar focuses on providing the most reliable data about all the cars in Indian Market place. We will help customers to see complete specification of each cars and also They can see all the Body and Class of Mercedes Benz.A list of Complete Showrooms are provided where the selected cars are available, Also EMI calculator is provided for customer to find the estimated EMI. </p>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Class</h6>
                    <ul className="footer-links">
                    <li>GLE</li>
                    <li>Mercedes-AMG GT</li>
                    <li>C-Class</li>
                    <li>E-Class</li>
                    <li>S-Class</li>
                    <li>GLC</li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links" style={{color:"white"}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/emi">EMI calculator</Link></li>
                    <li><Link to="/show">Show Rooms</Link></li>
                    </ul>
                </div>
                </div>
                <hr/>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright &copy; 
                <Link to="#">MyDreamCar</Link>.
                    </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                    <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
                    <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>   
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;