import {Link} from 'react-router-dom';
import {CarImageArray} from '../CarImageArray';
const CarFilter = (props) => {

    let MyMap = new Map(CarImageArray)

    const displayPrice2 = (item) => {
        const priceInfo2 = item.priceInformation
        return priceInfo2.price
    }

    const displayCarImage = (item) => {
        const carModelId = item.modelId
        var carUrl = "https://www.drivespark.com/images/2020-09/2021-mercedes-benz-s-class-exterior-10.jpg";
        if(typeof(MyMap.get(carModelId)) != 'undefined'){
            carUrl = MyMap.get(carModelId)
        }
        return (
            <img src={carUrl} alt="car Image" style={{height:"200px",width:"300px"}}/>
        )
    }

    const displayCarPics=({carInfo3})=>{
        if(carInfo3){
            return carInfo3.map((item)=>{
                return(
                    <div className="tileContainer">
                        <div className="trainer-item">
                            <div>
                                <Link to={`/desc/${item.modelId}`}>{displayCarImage(item)}</Link>
                            </div>
                            <div>
                                <span>
                                    &nbsp; &#8377; {displayPrice2(item)}
                                </span>
                                    <Link to={`/desc/${item.modelId}`}><h4>{item.name}</h4></Link>
                                <p>
                                    <i className="fa fa-dashboard"></i> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-cube"></i> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-cog"></i> &nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                    </div>      
                )
            })
        }
    }
    return(
           <>
           {displayCarPics(props)}
           </>      
        )
    }
export default CarFilter;




                   