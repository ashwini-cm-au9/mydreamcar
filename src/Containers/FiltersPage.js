import React from 'react';
import CarFilter from '../Components/NewCars/CarFilter';
import BodyFilter from '../Components/NewCars/BodyFilter';
import ClassFilter from '../Components/NewCars/ClassFilter';

class FiltersPage extends React.Component {

    constructor(){
        super();
        this.state={
            carAllModels:""
        }
    }

    diplayFilterByBody = (bodyIDSelect) => {
        var carModels2 = JSON.parse(sessionStorage.getItem('models'))
        if(bodyIDSelect==0){
            this.setState({carAllModels:carModels2})
            return;
        }
        var ans2=[]
        carModels2.map((item)=>{
            if(item.vehicleBody.bodyId == bodyIDSelect){
                ans2.push(item)
            }
        })
        this.setState({carAllModels:ans2})
    }

    diplayFilterByClass = (classIDSelect)=>{
        var carModels = JSON.parse(sessionStorage.getItem('models'))
        if(classIDSelect==0){
            this.setState({carAllModels:carModels})
            return; 
        }
        var ans=[]
        carModels.map((item)=>{
            if(item.vehicleClass.classId == classIDSelect){
                ans.push(item)
            }
        })
        this.setState({carAllModels:ans})
    }
    render(){    
    return(
        <React.Fragment>
            <hr/>
            <hr/>
            <hr/>
            <div className="row" style={{marginTop:"1px",marginLeft:'1px',marginRight:'1px', backgroundImage:"url(https://images.pexels.com/photos/3559235/pexels-photo-3559235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100%)",backgroundPosition:"fixed",backgroundRepeat:'no-repeat'}} >
                <div className="col-md-3">
                    <BodyFilter filterByBody={(bodyIDSelect)=>this.diplayFilterByBody(bodyIDSelect)}  />
                    <ClassFilter filterByClass={(classIDSelect)=>this.diplayFilterByClass(classIDSelect)}/>
                </div>
                <div className="col-md-9">
                <CarFilter carInfo3={this.state.carAllModels} />
                </div>
            </div>
            
        </React.Fragment>
    )
    }
    componentDidMount(){
        const carInfo2 = JSON.parse(sessionStorage.getItem('models'))
        this.setState({
            carAllModels:carInfo2
        })
    }
    
}
export default FiltersPage;
