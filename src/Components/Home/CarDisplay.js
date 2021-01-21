import {Link} from 'react-router-dom';
import {CarImageArray} from '../CarImageArray';
const CarDisplay = (props) => {

    let MyMap = new Map(CarImageArray)

    const displayPrice = (item) => {
        const priceInfo = item.priceInformation
        return priceInfo.price
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

    const displayImages=({carInfo})=>{
        let some=[]
        if (carInfo){
            carInfo.map((item,idx)=>{
                if (idx<6){
                    some.push(item)
                }})
        }
        // console.log("some",some)
        if(some){
            return some.map((item)=>{
                return(
                    <div className="tileContainer">
                        <div className="trainer-item">
                            <div>
                                <Link to={`/desc/${item.modelId}`}>{displayCarImage(item)}</Link>
                            </div>
                            <div>
                                <span>
                                    &nbsp; &#8377; {displayPrice(item)}
                                </span>
                                <Link to={`/desc/${item.modelId}`}><h4>{item.name}</h4></Link>
                                <p>
                                    <i className="fa fa-dashboard"></i>&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-cube"></i> &nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-cog"></i>&nbsp;&nbsp;&nbsp;
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
        {displayImages(props)}
        </>
    )
}
export default CarDisplay;



        // <section className="section" id="trainers">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-lg-4">
        //                 <div className="trainer-item">
        //                     <div className="image-thumb">
        //                         <Link to={`/desc/1`}><img src={`https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FC-ClassModelImage.jpg&h=300&w=450&q=100`} alt=""/></Link>
        //                     </div>
        //                     <div className="down-content">
        //                         <span>
        //                             <del> &#8377; 11999 </del> &nbsp; &#8377; 11779
        //                         </span>

        //                         <h4>Mercedez Benz, SUV body, A Class</h4>

        //                         <p>
        //                             <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
        //                             <i className="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
        //                             <i className="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
        //                         </p>

        //                         <ul className="social-icons">
        //                             <li><a href="car-details.html">+ View Car</a></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section> 





        // return carInfo.map((item)=>{
        //     return(
        //         <div className="tileContainer">
        //             <div className="trainer-item">
        //                 <div>
        //                     <Link to={`/`}><img src={`https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FC-ClassModelImage.jpg&h=300&w=450&q=100`} alt=""/></Link>
        //                 </div>
        //                 <div>
        //                     <span>
        //                         <del> &#8377; 11999 </del> &nbsp; &#8377; {displayPrice(item)}
        //                     </span>
        //                     <Link to={`/`}><h4>{item}</h4></Link>
        //                     <p>
        //                         <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
        //                         <i className="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
        //                         <i className="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>      
        //     )
        // })