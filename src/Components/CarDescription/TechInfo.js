import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TechInfo = (props) => {
    const displayTechnicalInfo=({techDetails})=>{
        if(techDetails){
            if(techDetails.hasOwnProperty('technicalInformation')){
                var techInfo = techDetails.technicalInformation;
            }
            if(techInfo.hasOwnProperty('engine')){
                var engineSpecs = techDetails.technicalInformation.engine;
            }
            if(techInfo.hasOwnProperty('dimensions')){
                var dimensionSpecs = techDetails.technicalInformation.dimensions;
            }
            if(engineSpecs.hasOwnProperty('fuelEconomy')){
                var FuelEconomy = engineSpecs.fuelEconomy
            }
            return (
                <div style={{backgroundColor:"grey", padding:'0px',margin:'0px'}}>
                    <Tabs >
                        <TabList>
                            <Tab>Engine Specs</Tab>
                            <Tab>Dimensions</Tab>
                            <Tab>vehicle Capacity </Tab>
                        </TabList>
                        <TabPanel>
                            <h3 style={{color:"white"}}>Fuel Type: {engineSpecs.hasOwnProperty('fuelType')?engineSpecs.fuelType:"Not given"}</h3>
                            <h3 style={{color:"white"}}>Engine Concept: {engineSpecs.hasOwnProperty('engineConcept')?engineSpecs.engineConcept:"Not given"}</h3>
                            <h3 style={{color:"white"}}>cylinder: {engineSpecs.hasOwnProperty('cylinder')?engineSpecs.cylinder:"Not given"}</h3>
                            <h3 style={{color:"white"}}>Fuel Consumption:{FuelEconomy.hasOwnProperty('fuelConsumptionCombinedMax')?FuelEconomy.fuelConsumptionCombinedMax.value+"L/100km":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Power Hp:{engineSpecs.hasOwnProperty('powerHp')?engineSpecs.powerHp.value+"hp":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Capacity:{engineSpecs.hasOwnProperty('capacity')?engineSpecs.capacity.value+"cc":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Emission Standard:{engineSpecs.hasOwnProperty('emissionStandard')?engineSpecs.emissionStandard:"Not givenn"}</h3>
                            <h3 style={{color:"white"}}>Engine Torque:{engineSpecs.hasOwnProperty('engineTorque')?engineSpecs.engineTorque.value+"Nm":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Maximum Engine Speed:{engineSpecs.hasOwnProperty('engineSpeedMax')?engineSpecs.engineSpeedMax.value+"rpm":"Not given"}</h3>

                        </TabPanel>
                        <TabPanel>
                            <h3 style={{color:"white"}}>Length: {dimensionSpecs.hasOwnProperty('length')?dimensionSpecs.length.value+"mm":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Width: {dimensionSpecs.hasOwnProperty('width')?dimensionSpecs.width.value+"mm":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Height: {dimensionSpecs.hasOwnProperty('height')?dimensionSpecs.height.value+"mm":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Wheel Base: {dimensionSpecs.hasOwnProperty('wheelBase')?dimensionSpecs.wheelBase.value+"mm":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Doors: {techInfo.hasOwnProperty('doors')?techInfo.doors:"Not given"}</h3>
                            <h3 style={{color:"white"}}>Seats: {techInfo.hasOwnProperty('seats')?techInfo.seats:"Not given"}</h3>
                            <h3 style={{color:"white"}}>Acceleration: {techInfo.hasOwnProperty('acceleration')?techInfo.acceleration.value+"s":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Top Speed: {techInfo.hasOwnProperty('topSpeed')?techInfo.topSpeed.value+"km/h":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Payload:{techInfo.hasOwnProperty('payload')?techInfo.payload.value+"kg":"Not given"}</h3>

                        </TabPanel>
                        <TabPanel>
                            <h3 style={{color:"white"}}>Capacity with Reserve:{techInfo.hasOwnProperty('capacityWithReserve')?techInfo.capacityWithReserve.value+"L":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Reserve Tank Capacity:{techInfo.hasOwnProperty('reserveTankCapacity')?techInfo.reserveTankCapacity.value+"L":"Not given"}</h3>
                            <h3 style={{color:"white"}}>Front Tyres: {techInfo.hasOwnProperty('tyres')?techInfo.tyres.frontTyres:"Not given"}</h3>
                            <h3 style={{color:"white"}}>Back Tyres: {techInfo.tyres.backTyres}</h3>
                        </TabPanel>
                    </Tabs>
                </div>  
            )
        }
    }

    return(
        <>
        <h1>Technical Information</h1>
        {displayTechnicalInfo(props)}
        </>
    )
}
export default TechInfo
