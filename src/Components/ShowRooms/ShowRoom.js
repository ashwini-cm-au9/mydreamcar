import React,{Component} from 'react';
import ShowroomDisp from './DisplayShowroom';
import {withRouter} from 'react-router-dom'
const url ="https://showroomapireact.herokuapp.com/location";
class ShowRoom extends Component{
    constructor(){
        super()
        this.state={
            location:'',
            hotels:'',
            all_data:'',
            single_data:''
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
        const cityid = e.target.value
        var output =  this.state.all_data.filter(d => d.city == cityid); 
        console.log("l",output)
        this.setState({hotels:output})
        this.setState({all_data:output})
    }
    renderHotel = (data) => {
        if(data){
            return data.map((item) =>{
                return(
                    <option value={`${item.city},${item.city_name},${item.address}`}>
                        {item.name}|{item.address}
                    </option>
                )
            })
        }
    }
    handleChangeShowrom=(e)=>{
        this.setState({single_data:e.target.value})
        console.log("value",e.target.value)
    }
    clickChange=()=>{
        this.props.history.push(`/book_show/${this.state.single_data}`)
    }
    render(){
        // console.log(this.state.location)
        console.log(this.state.all_data)
        return(
            <div className="imageContainer">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div id="logo">
                    Showrooms All over India
                </div>
                <br></br>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleChangeCity}>
                        <option>-----SELECT Location------</option>
                         {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleChangeShowrom}>
                        <option>-----SELECT ShowRooms------</option>
                        {this.renderHotel(this.state.all_data)}
                    </select>
                </div>
                <br></br>
                <button onClick={this.clickChange} style={{color:'blue'}}>Call Bcak Request</button>
                <br></br>
                <br></br>
                <ShowroomDisp data_show={this.state.all_data}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json()) //promise of api
        // we will get the data
        .then((data) => {
            // console.log("data>>>>",data.location)
            localStorage.setItem("hot",JSON.stringify(data))
            this.setState({location:data.location})
        })
        .catch((err) => {
            console.log(err)
        })
        fetch("https://showroomapireact.herokuapp.com/showroom",{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            // console.log("data>>>>",data.showrooms)
            this.setState({all_data:data.showrooms})
        })
    }
}
export default withRouter(ShowRoom);