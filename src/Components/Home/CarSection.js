import React from 'react';
import CarDisplay from './CarDisplay';
import {Apikey} from '../Apikey';
import'./styleNew.css'
const carUrl = `https://api.mercedes-benz.com/configurator/v1/markets/en_IN/models?apikey=${Apikey}`

class CarSection extends React.Component {
    constructor(){
        super();
        this.state={
            models:''
        }
    }
    render(){
        return(
            <section className="carSection">
                <nav className="navbar">
                    
                    <br></br>
                    <div className="caption">
                    <h1>Pick a Car to Start</h1>
                    <h3>Our professional <em> and well-trained staff is ready to assist</em></h3>

                </div>
                </nav>
                <article>
                    <CarDisplay carInfo={this.state.models}/>
                </article>
            </section>)



            // <div className="row">
            //     <div className="col-md-2">
            //     <h1>Welcome to SAP Benz</h1>
            //     <p>

            //     Car buying is always everybody's dream<br></br> and it is very special occasion, we Dakshin Honda<br></br>as a premium Honda Car dealership always endeavor to achieve highest level of customer satisfaction and improving the buying experience for our customers.<br></br> We have best of the sales staff<br></br> to cater all your car buying needs and also<br></br> have the skilled professional to take care<br></br> for your car services and other requirements<br></br>. We not only sells Honda cars but we also<br></br> deal in Used Cars, Insurance, Finance, Accessor...</p>
            //     <hr></hr>
            // <hr></hr>
            // <h2>
                
            //     Pick a Car to Start
            //     </h2>
            //     <h3>Our professional and well-trained staff is ready to assist</h3>

            //     </div>
            // <div className="col-md-10">
            //     <CarDisplay carInfo={this.state.models}/>
            // </div>
            // </div>
        //     <div className="flex">
                
        //     <div className="part">
                
        //     </div>
            
        //     <div className="part">
                
        //     </div>
        // </div>
            
        // )
    }
    componentDidMount(){
        fetch(carUrl,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                models:data
            })  
            sessionStorage.setItem('models',JSON.stringify(data))
        })
    }
}
export default CarSection;