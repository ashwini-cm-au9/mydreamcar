import React,{Component} from 'react';
// import './Search.css';


const url ="http://localhost:3000/location";
const hotelurl ="http://localhost:3000/hotels?_id=";

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    handleChangeCity=(e) => {
        console.log(e.target.value)
        const cityid = e.target.value
        console.log(`${hotelurl}${cityid}`)
        fetch(`${hotelurl}${cityid}`,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            JSON.stringify(localStorage.setItem("hotels_data",data))
            this.setState({hotels:data})
        })
    }

    renderHotel = (data) => {
        // const data=localStorage.getItem("hotels")
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item._id}>
                        
                        {
                            
                           item.all_hotels[0].name
                        
                        }
                        
                    </option>
                )
            })
        }
        
    }

    handleHotel =(event) => {
        this.props.history.push(`/`)
    }

    render(){
        console.log(">>>>",this.state.location)
        console.log(">>> hot>>",localStorage.getItem("hot"))
        console.log(">>>hotels_data>>",localStorage.getItem("hotels_data"))
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleChangeCity}>
                        <option>-----SELECT Location------</option>
                         {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>-----SELECT Hotel------</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json()) //promise of api
        // we will get the data
        .then((data) => {
            localStorage.setItem("hot",JSON.stringify(data))
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default Search;