import {Link} from 'react-router-dom';
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
};

const CarDescriptionDisplay = (props) => {

    const displayClassId=(classInfo1)=>{
        const classIDVal1 = classInfo1.vehicleClass
        return classIDVal1.classId
    }
    const displayClassName=(classInfo2)=>{
        const classIDVal2 = classInfo2.vehicleClass
        return classIDVal2.className
    }
    const displayBodyId=(classInfo3)=>{
        const classIDVal3 = classInfo3.vehicleBody
        return classIDVal3.bodyId
    }
    const displayBodyName=(classInfo4)=>{
        const classIDVal4 = classInfo4.vehicleBody
        return classIDVal4.bodyName
    }
    const diplayPrice=(classInfo5)=>{
        const classIDVal5 = classInfo5.priceInformation
        return classIDVal5.price
    }
    const diplayNetPrice=(classInfo6)=>{
        const classIDVal6 = classInfo6.priceInformation
        return classIDVal6.netPrice
    }
    const diplayCurrency=(classInfo7)=>{
        const classIDVal7 = classInfo7.priceInformation
        return classIDVal7.currency
    }
    const saveCarNameInSession = (carnameToBeSave)=>{
        sessionStorage.setItem('carname',JSON.stringify(carnameToBeSave))
    }
    const displayCarInfo=(CarData,modelIDFromHome,carUrl)=>{
        if(CarData){
            return CarData.map((item)=>{
                if((item.modelId)==modelIDFromHome){
                    return(
                        <div className="row" style={{backgroundColor:"grey", padding:'0px',margin:'0px'}}>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="row">
                                        <h3>{item.name}</h3>
                                        {saveCarNameInSession(item.name)}
                                    </div>
                                </div>
                                <div className="panel-body" style={{backgroundColor:"grey", padding:'0px',margin:'0px'}}>
                                    <Slider {...settings}>
                                        <div>
                                        <img src={carUrl} className="img-responsive"
                                        style={{height:"auto",width:"100%"}}/>
                                        </div>
                                        <div>
                                        <img src={carUrl} className="img-responsive"
                                        style={{height:"auto",width:"100%"}}/>
                                        </div>
                                        <div>
                                        <img src={carUrl} className="img-responsive"
                                        style={{height:"auto",width:"100%"}}/>
                                        </div>
                                    </Slider>
                                    
                                
                                        <Tabs style={{backgroundColor:"grey"}}>
                                            <TabList>
                                                <Tab>Vehicle Class</Tab>
                                                <Tab>VehicleBody</Tab>
                                                <Tab>Price Information </Tab>
                                            </TabList>
                                            <TabPanel>
                                                <h2 style={{color:"white"}}>Vehicle Class data</h2>
                                                <h3 style={{color:"white"}}>{item.shortName}</h3>
                                                <h3 style={{color:"white"}}>{displayClassId(item)}</h3>
                                                <h3 style={{color:"white"}}>{displayClassName(item)}</h3>
                                            </TabPanel>
                                            <TabPanel>
                                                <h3 style={{color:"white"}}>Vehicle Body data</h3>
                                                <h3 style={{color:"white"}}>{displayBodyId(item)}</h3>
                                                <h3 style={{color:"white"}}>{displayBodyName(item)}</h3>
                                            </TabPanel>
                                            <TabPanel>
                                                <h3 style={{color:"white"}}>Price Information</h3>
                                                <h3 style={{color:"white"}}>price:&#8377;{diplayPrice(item)}</h3>
                                                <h3 style={{color:"white"}}>netPrice:&#8377;{diplayNetPrice(item)}</h3>
                                                <h3 style={{color:"white"}}>currency Type:{diplayCurrency(item)} &#8377;</h3>
                                            </TabPanel>
                                            <div>
                                                <Link to={`/booking/${modelIDFromHome}`} className="btn btn-info">Book your Dream Car!</Link>&nbsp;&nbsp;
                                                <Link to={`/emi/${modelIDFromHome}`} className="btn btn-primary">Check EMI</Link>
                                            </div>
                                        </Tabs>
                                       
                                
                                    
                                </div>
                            </div>
                        </div>                       
                    )
                }
            })
        }    
    }

    return(
        <>
        {displayCarInfo(props.carData,props.modelIDFromHome,props.carUrl)}
        </>
    )
}
export default CarDescriptionDisplay;