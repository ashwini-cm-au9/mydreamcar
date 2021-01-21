import carvideo from '../Videos/carvideo.mp4';

import {Link} from 'react-router-dom'
const Banner = () => {
    return(
        <div className="main-banner" id="top">
            <video className='videoTag' autoPlay muted loop id="bg-video">
                <source src={carvideo} type="video/mp4" />
            </video>

            <div className="video-overlay header-text">
                <div className="caption">
                    <h6>Find the Mercedez Benz Personalized for you!!</h6>
                    <h2>Find Best<em> Mercedez Benz</em></h2>
                    <div className="main-button">
                        <Link to='/contact'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;