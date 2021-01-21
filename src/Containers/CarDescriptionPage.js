import React from 'react';

import CarDescriptionDisplay from '../Components/CarDescription/CarDescriptionDisplay';
import TechInfo from '../Components/CarDescription/TechInfo';
import {Apikey} from '../Components/Apikey';

const carDescriptionUrl = "https://api.mercedes-benz.com/configurator/v1/markets/en_IN";

class CarDescriptionPage extends React.Component{
    constructor(){
        super();
        this.state={
            modelTechData:"",
            carUrl:""
        }
    }
    render(){
    const carInfo4 = JSON.parse(sessionStorage.getItem('models'))
    const modelID=this.props.match.params.id;
    // console.log(typeof(modelID));
    var carDisplayUrl="https://www.drivespark.com/images/2020-03/2020-mercedes-benz-e-class-exterior-17.jpg"
    
    if(this.state.carUrl){
        if(this.state.carUrl.hasOwnProperty('EXT020')){
            carDisplayUrl = this.state.carUrl.EXT020.url
        }
    }
    return(<>
        <br></br>
        <br></br>
        <br></br>
        <hr/>
        <div className="container-fluid">
            <div className="row" style={{backgroundColor:"grey"}}>
                <div className="col-md-8">
                    <CarDescriptionDisplay carData={carInfo4} modelIDFromHome={modelID} carUrl={carDisplayUrl}/>
                </div>
                <div className="col-md-4">
                    <TechInfo techDetails={this.state.modelTechData} />
                </div>
            </div>
        </div>   
    </>)
}
componentDidMount(){
    fetch(`${carDescriptionUrl}/models/${this.props.match.params.id}/configurations/initial?apikey=${Apikey}`,{method:"GET"})
    .then((res)=>res.json())
    .then((data)=>{
        this.setState({modelTechData:data})  
        fetch(data._links.image,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                carUrl:data.vehicle
            })
        })
        .catch((error)=>{
            console.log('Error',error);
        })
    })
    .catch((error)=>{
        console.log('Error',error);
    })
}



}
export default CarDescriptionPage;