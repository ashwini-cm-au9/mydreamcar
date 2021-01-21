import './EmiDescriptionPage.css';
import React from 'react';
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class EmiDescriptionPage extends React.Component{
    constructor(){
        super();
        this.state={
            Amount:"",
            Interest:"",
            Tenure:"",
            payableEmi:"",
            payableAmount:"",
            payableInterest:"",
            pieChartPayableloan:"",
            pieChartPayableInterest:""

        }
    }
    handleChangeAmount=(event)=>{
        this.setState({Amount:event.target.value})    
    }
    handleChangePercent=(event)=>{
        this.setState({Interest:event.target.value})
    }
    handleChangeTenure=(event)=>{
        this.setState({Tenure:event.target.value})
    }
    

    calculateEmi = (event) => {
        var amount=this.state.Amount;
        var interest = this.state.Interest;
        var Tenure = this.state.Tenure;
        var noOfMonths=Math.floor(Tenure)*12;
        var monthlyRate=interest/(12*100);
        var onePlusR=Math.pow(1+monthlyRate,noOfMonths);
        var denominator=onePlusR-1;
        var emi=(amount*monthlyRate*(onePlusR/denominator)).toPrecision(5);
        this.setState({payableEmi:emi})
        var totalAmt=noOfMonths*parseFloat(emi);
        this.setState({payableAmount:totalAmt})
        var totalInt=Math.floor(totalAmt-amount);
        this.setState({payableInterest:totalInt})

        //for pie chart
        var pietotal=parseFloat(totalAmt)+parseFloat(totalInt);
        var piePayableloan=(parseFloat(totalAmt)/pietotal)*360;
        this.setState({pieChartPayableloan:piePayableloan})
        var piePayableInt=(parseFloat(totalInt)/pietotal)*360;
        this.setState({pieChartPayableInterest:piePayableInt})
       
        event.preventDefault()
    }
    render(){
        var carname = JSON.parse(sessionStorage.getItem('carname'))
        var options = {
            title: {
              text: "Graphical Representation"
            },
            data: [{				
                    type: "pie",
                    startAngle: 240,
                    yValueFormatString: "##0.00\"%\"",
                    indexLabel: "{label} {y}",
                    dataPoints: [
                        {y: this.state.pieChartPayableloan, label: "Total Loan"},
                        {y: this.state.pieChartPayableInterest, label: "Total Interest"},
                    ]
             }]
         }

        return(
            <div className="container" style={{display:"flex",marginTop:"2%"}}>
                <div className="col-sm-6 col-12 card" >
                    <h2 style={{color:"blue"}}>Find EMI for {carname}</h2>
                    <form name="loan-form" onSubmit={this.calculateEmi}>
                        <div>
                        <h3>Car Name</h3>
                        <input type="text" className="radioStyle" style={{borderRadius:"5px"}} value={carname} readOnly onChange={this.handleChangeAmount}/><br/>
                        </div>
                        <div className='loanBlock'>
                            <h3>Loan Amount</h3>
                            <input type="number" className="radioStyle" style={{borderRadius:"5px"}} onChange={this.handleChangeAmount}/><br/>
                        </div>
                        <div className='aprBlock'>
                            <h3>Interest Rate</h3>
                            <input type="number" className="radioStyle" style={{borderRadius:"5px"}} onChange={this.handleChangePercent}/><br/>
                        </div>
                            <div className='tenureBlock'>
                            <h3>Time Periods(yrs)</h3>
                            <input type="number" className="radioStyle" style={{borderRadius:"5px"}} onChange={this.handleChangeTenure}/><br/>
                            <br/>
                            </div>
                            <div className="d-flex">
                        <button style={{borderRadius:"2px"}} className="btn-sub">Find Emi</button>
                            </div>
                    </form>
                </div>
                <div className="col-sm-5 col-12pl-3 card">
                    <h1>Results</h1><br/>
                    <h3>Total EMI:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="emi">{this.state.payableEmi}</span></h3>
                    <h3>Total Amount: &nbsp;&nbsp;&nbsp;&nbsp;<span id="totalAmt">{this.state.payableAmount}</span></h3>
                    <h3>Total Interest:&nbsp;&nbsp;&nbsp;&nbsp;<span id="totalInt">{this.state.payableInterest}</span></h3>
                    <CanvasJSChart options = {options}/>
                </div>       
            </div>
        )

    }
     
    
}
export default EmiDescriptionPage;