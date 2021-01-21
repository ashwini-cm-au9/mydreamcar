const BodyFilter = ( props ) => {
    const filterByBody = (event) => {
        const bodyIDSelect = event.target.value;
        props.filterByBody(bodyIDSelect)
    }
    return(
        <>
        <div onChange={filterByBody}>
            <center style={{color:"white"}}>Body Filter Page</center>   
            <label className="radio">
                <input type="radio" name="body" value="0"/>All
            </label>
            <label className="radio">
                <input type="radio" name="body" value="6"/>Coupé
            </label>
            <label className="radio">
                <input type="radio" name="body" value="5"/>Cabriolet
            </label>
            <label className="radio">
                <input type="radio" name="body" value="266"/>Wagon
            </label>
            <label className="radio">
                <input type="radio" name="body" value="9"/>Sedan Maybach
            </label>
            <label className="radio">
                <input type="radio" name="body" value="17"/>4 Door Coupé
            </label>
            <label className="radio">
                <input type="radio" name="body" value="277"/>SUV
            </label>
            <label className="radio">
                <input type="radio" name="body" value="145"/>V-Class
            </label>
            <label className="radio">
                <input type="radio" name="body" value="14"/>Off road
            </label>
        </div>
            
        </>
        
    )
}
export default BodyFilter;