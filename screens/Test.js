import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios"
import "./Notification.css"
import notify from "../../assets/Images/noti.jpg";

class App extends Component {

    state = {
        name: "",
        email: "",
        to: "",
        message: "",
        emailname: {
            horainnoor: false,
            muqaddas: false,
            ahmad: false
        }
    }

    handleChange = e => {
        this.setState({ name: e.target.value })
    }

    chkclick = (e) => {
        var { name, checked } = e.target;
        this.setState((e) => {
            var selectedEmail = e.emailname
            return selectedEmail[name] = checked;

        })
    }

    async handleSubmit(e) {
        alert("Your email have been sent!")

        e.preventDefault()
        const { name, email, to, message } = this.state
        const form = await axios.post("http://localhost:2000/api/mail", {
            name,
            email,
            to,
            message,
        }).then(res => {
            console.log(res)
            alert("Your email have been sent!")
        }).catch(err => {
            console.log(err)
        })

    }



    render() {
        var displayemail = Object.keys(this.state.emailname).filter((x) => this.state.emailname[x])
        return (
            <div>
                <img className="responsive-image" src={notify} />
                <br />

                <h3 className="h-send-notice">Send Notification:</h3>

                <br />
                <input type="checkbox" name="muqaddasshaaban@gmail.com" onChange={this.chkclick} />muqaddasshaaban@gmail.com
                <input type="checkbox" name="horainnoor735@gmail.com" onChange={this.chkclick} />horainnoor735@gmail.com
                <input type="checkbox" name="ahmadali280298@gmail.com" onChange={this.chkclick} />ahmadali280298@gmail.com

                <Form className="form-not" onSubmit={this.handleSubmit} >
                    <FormGroup className="form-not">
                        <Label className="l-notify-name" for="name">Name:</Label>
                        <Input type="textt"
                            name="name"
                            onChange={this.handleChange}

                        />
                    </FormGroup>
                    <FormGroup className="form-not">
                        <Label for="email">Email:</Label>

                        <Input type="email"
                            name="email"

                            onChange={this.handleChange}

                        />

                    </FormGroup>









                    <FormGroup className="form-not">
                        <Label for="email">To:</Label>
                        <Input type="to"
                            name="to"
                            onChange={this.handleChange}
                            value={displayemail}



                        />


                    </FormGroup>


                    <FormGroup className="form-not">
                        <Label for="message">Message:</Label>
                        <Input type="textarea"
                            name="message"
                            onChange={this.handleChange}

                        />
                    </FormGroup>



                    <Button className="formm-not">Submit</Button>

                </Form>
            </div>

        )

    }
}
export default App;