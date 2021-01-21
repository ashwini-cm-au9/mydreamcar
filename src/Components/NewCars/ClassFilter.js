import React from "react";
const ClassFilter = (props) => {

    const filterByClass = (event) => {
        const classID = event.target.value;
        props.filterByClass(classID)
    }

    return(
        <React.Fragment>
            <center style={{color:"white"}}>Class Filter Page</center>
                <div onChange={filterByClass}>
                    <label className="radio">
                        <input type="radio" name="class" value="0"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="167"/>GLE
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="190"/>Mercedes-AMG GT
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="205"/>C-Class
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="213"/>E-Class
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="217"/>S-Class
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="253"/>GLC
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="290"/>Mercedes-AMG GT
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="293"/>EQC
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="447"/>V-Class
                    </label>
                    <label className="radio">
                        <input type="radio" name="class" value="463"/>G-Class
                    </label>
                </div>
            </React.Fragment>
    )
}
export default ClassFilter;