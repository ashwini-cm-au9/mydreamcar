import React from "react";
const NameFilter = (props) => {

    const val=sessionStorage.getItem("models")

    filterPage=()=>{

        return val.map(data=>{
        return<option value={data.modelId} key={data.modelId}>{data.name}</option>})

    }
    updateValue=(event)=>{
        const classID = event.target.value;
        props.filterByName_ID(classID)
    }
    return(
        <React.Fragment>
            <center>Class Filter Page</center>
            <select name="cars" id="cars" onChange={updateValue}>
                {filterPage}
            </select>

                
            </React.Fragment>
    )
}
export default NameFilter;