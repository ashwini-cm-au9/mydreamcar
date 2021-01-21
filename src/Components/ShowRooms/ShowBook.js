import React from 'react';


import{ init } from 'emailjs-com';
init("user_ohfzfPBIXGyfESBLsWpcx");

class ShowBook extends React.Component {
constructor(props) {
	super(props);
	this.state = { 
		from_name:'', 
		feedback: this.props.match.params.sh_data, 
		name: 'Ashwini', 
		email: '',
		from_email:"",
		};
	this.handleChange = this.handleChange.bind(this);
	this.handleChangeName= this.handleChangeName.bind(this);
	this.handleChangeEmailAdd= this.handleChangeEmailAdd.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	
}

componentDidMount(){
    const all_values=sessionStorage.getItem("models")
    
}
  render() {
      
	return (
        <form class="row g-3">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
			<div class="form_info">
                <label >Name</label>
                <input type="text" value={this.state.from_name} onChange={this.handleChangeName}/>
            </div>
            <div class="form_info">
                <label>Email</label>
                <input type="text" value={this.state.from_email} onChange={this.handleChangeEmailAdd}/>
            </div>
        

			<textarea
			className="form_info"
				id="test-mailing"
				name="test-mailing"
				readOnly
				placeholder="Feedback"
				required
				value={this.state.feedback}
                style={{width: '50%', height: '150px'} 
            }
      		/>
           
            <div class="form_info">
                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
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

  handleSubmit() {
	const templateId = 'template_ririy5t';
	this.sendFeedback(templateId, {message: this.state.feedback, from_name: this.state.from_name, reply_to: this.state.email, to_name:this.state.name,from_email:this.state.from_email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'service_s38rb3p', templateId,
  	variables
  	).then(res => {
          window.alert('We have recieved your infomration, We will get bcak to you soon!')
    	console.log('We have recieved your infomration, We will get bcak to you soon!')
  	})
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}

export default ShowBook;