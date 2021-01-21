const ShowroomDisp = (props) => {
    // console.log("props>>>>",props)
    const someContent=({data_show})=>{
        if(data_show){
            return data_show.map(data=>
                <div className="tileContainer">
                        <div className="trainer-item">
                            <h2>{data.name}</h2>
                            <h2>{data.city_name}</h2>
                            <h3>{data.address}</h3>
                        </div>
                </div>

            // <h1>{data.address}</h1>
            //     // <div className="tileContainer">
            //     //         <div className="trainer-item">
            //     //             <div>
            //     //                 <h2>{data.name}</h2>
            //     //                 <h2>{data.city_name}</h2>
            //     //                 
            //     //             </div>
            //     //         </div>
            //     // </div>
            //     // console.log(data.name) 
            )
        }

    }
    
    return ( <>
    
    {someContent(props)}
    </> );
}
 
export default ShowroomDisp;