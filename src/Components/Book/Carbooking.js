import{ init } from 'emailjs-com';
import './booking.css'

import React from 'react';
init("user_ohfzfPBIXGyfESBLsWpcx");

class CarBooking extends React.Component {
constructor(props) {
	super(props);
	this.state = { 
        models:sessionStorage.getItem("models"),
        number:'',
        carModel:this.props.match.params.modelIDFromHome,
        from_name:'',
        feedback: '', 
        name: 'Ashwini', 
        email: 'cmashwini2894@gmail.com',
        from_email:"",
    place:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeName= this.handleChangeName.bind(this);
        this.handleChangeEmailAdd= this.handleChangeEmailAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handlerChangeOptios=this.handlerChangeOptios.bind(this);
        this.handleChangeNumber=this.handleChangeNumber.bind(this)
        this.handleChangePlace=this.handleChangePlace.bind(this)
	
}

// handlerChangeOptios = (event) => { 
//         event.preventDefault()
//         this.setState({carModel:event.target.value})
//     }

handleSubmit() {
	const templateId = 'template_9f2031q';
    this.sendFeedback(templateId, {
        message: this.state.feedback, 
        from_name: this.state.from_name, 
        reply_to: this.state.email, 
        to_name:this.state.name,
        from_email:this.state.from_email,
        carModel:this.state.carModel,
        number:this.state.number,
        place:this.state.place
    })
    this.setState({
        
        
    })
  }

  render() {
      console.log("data",sessionStorage.getItem("models"))
      console.log("carAllModels",this.state.carAllModels)
	return (
        <form class="Form_complete">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
			<div class="form_info">
                <label >Name</label>
                <input type="text" className="bookInput"  value={this.state.from_name} onChange={this.handleChangeName}/>
            </div>
            <div class="form_info">
                <label>Email</label>
                <input type="text" className="bookInput" value={this.state.from_email} onChange={this.handleChangeEmailAdd}/>
            </div>
            <div class="form_info">
                <label>place</label>
                <input type="text" className="bookInput" value={this.state.place} onChange={this.handleChangePlace}/>
            </div>

            <div class="form_info">
                <label>Number</label>
                <input type="number" className="bookInput" value={this.state.number} onChange={this.handleChangeNumber}/>

            </div>
        
            <div class="form_info">
                <label>Car Model</label>
                <input value={this.state.carModel} className="bookInput" readOnly/>
                {/* <label for="cars">The Model:</label>
                <select name="cars" id="cars" onChange={this.handlerChangeOptios}>
                    <option value="167361_000" >Mercedes-AMG GLE 53 4MATIC+ Coupé</option>
                    <option value="190379_001" >AMG GT R Coupé</option>
                    <option value="205483_000" >Mercedes C 300</option>
                    <option value="205364_000" >Mercedes AMG C 43 4MATIC Coupé</option>
                    <option value="205386_000" >AMG C 63 Coupé</option>
                    <option value="213217_000" >E 220 d 4M All Terrain</option>
                    <option value="217387_000" >AMG S 63 Coupe</option>
                    <option value="222980_000" >Mercedes-Maybach S 650</option>
                    <option value="222983_000" >Mercedes-Maybach S 560(Maestro)</option>
                    <option value="253364_000" >Mercedes-AMG GLC 43 4MATIC Coupé</option>
                    <option value="257318_000" >CLS 300 d</option>
                    <option value="290689_000" >AMG GT 63 S 4-Door Coupé</option>
                    <option value="293890_000" >EQC 400 4MATIC</option>
                    <option value="447813_000" >V220d</option>
                    <option value="447815_000" >V220d Longwheel Base</option>
                    <option value="463276_000" >Mercedes-AMG G 63 4MATIC</option>
                    <option value="463349_000" >Mercedes-Benz G 350d 4MATIC</option>
                </select> */}
            </div>

			<textarea
			className="form_info"
				id="test-mailing"
				name="test-mailing"
				onChange={this.handleChange}
				placeholder="Write your message Here..."
				required
				value={this.state.feedback}
				style={{width: '50%', height: '150px'}}
      		/>
            <div class="form_info">
                <input type="button" value="Submit" className="btn btn--submit bookInput" onClick={this.handleSubmit} />
            </div>
        </form>
  	
	)
  }

  handleChange(event) {
	  event.preventDefault()
	console.log(event.target.value)
	this.setState({feedback: event.target.value})
	
  }

  handleChangeName(event){

	  event.preventDefault()
	console.log(event.target.value)
	this.setState({from_name: event.target.value})

  }

   handleChangeEmailAdd(event){

	event.preventDefault()
	console.log(event.target.value)
	this.setState({from_email: event.target.value})

  }

  handleChangeNumber(event){
    event.preventDefault()
	console.log(event.target.value)
	this.setState({number: event.target.value})
  }

  handleChangePlace(event){

    event.preventDefault()
	console.log(event.target.value)
	this.setState({place: event.target.value})

  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'service_s38rb3p', templateId,
  	variables
  	).then(res => {
        
        console.log('Email successfully sent!')
        window.alert('Email successfully sent!')
        this.props.history.push("/")
  	})
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}

export default CarBooking;