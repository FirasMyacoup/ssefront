



// //////////////////////////////////////////////////////////////////////////////////////////////////////



// import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Swal from 'sweetalert2';
// import Recaptcha from 'react-google-recaptcha'; // Import the reCAPTCHA component
// import '../CSS/contact.css';
// import axios from 'axios';

// class Contact extends Component {
//   state = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '', // Added subject field
//     message: '',
//     successMessage: '',
//     errors: {},
//     recaptchaValue: null, // Store reCAPTCHA value
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   // Callback function for reCAPTCHA
//   onRecaptchaChange = (value) => {
//     this.setState({ recaptchaValue: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { firstName, lastName, email,subject,  message, recaptchaValue} = this.state;

//     // Check if reCAPTCHA is not verified
//     if (!recaptchaValue) {
//       this.setState({
//         errors: { recaptcha: 'Please verify that you are not a robot.' },
//       });
//       return;
//     }

//     // Check if any of the other fields are empty
//     if (!firstName || !lastName || !email ||!subject || !message) {
//       this.setState({
//         errors: { submit: 'Please fill in all the fields.' },
//       });
//       return;
//     }

//     axios
//       .post('http://localhost:3001/submit', {
//         firstName,
//         lastName,
//         email,
//         subject, 
//         message,
//         recaptchaValue, // Include reCAPTCHA value in the request
//       })
//       .then((response) => {
//         console.log(response.data);
//         this.setState({
          
//           firstName: '',
//           lastName: '',
//           email: '',
//           subject: '', 
//           message: '',
//           errors: {},
//         });
//         Swal.fire({
//           icon: 'success',
//           title: 'Message Sent!',
//           text: 'Thank you for reaching out!',
//           confirmButtonColor: '#7D9D9C',
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         this.setState({
//           errors: { submit: 'An error occurred while sending the message.' },
//         });
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'An error occurred while sending the message.',
//           confirmButtonColor: '#7D9D9C',
//         });
//       });
//   };

//   render() {
//     const {
//       firstName,
//       lastName,
//       email,
//       subject,
//       message,
//        // Include subject in the request
//       successMessage,
//       errors,
//     } = this.state;

//     return (
//       <div className="contact">
//         <div className="contactContainer">
//           <h1 className="contactHeader"> Share your Thoughts with us!</h1>
//           <div className="pb-5 d-flex justify-content-around align-items-center gap-5 contactBodyContainer">
//             <Form className="contactForm shadow-lg" onSubmit={this.handleSubmit}>
//               <Row className="mb-3">
//                 <Col>
//                   <Form.Label>First name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="firstName"
//                     value={firstName}
//                     onChange={this.handleChange}
//                     placeholder="Enter your first name"
//                   />
//                 </Col>
//               </Row>
//               <Row className="mb-3">
//                 <Col>
//                   <Form.Label>Last name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="lastName"
//                     value={lastName}
//                     onChange={this.handleChange}
//                     placeholder="Enter your last name"
//                   />
//                 </Col>
//               </Row>
//               <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridEmail">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={this.handleChange}
//                     placeholder="Enter a valid email"
//                   />
//                 </Form.Group>
//               </Row>
//               <Row className="mb-3"> {/* Added subject field */}
//                 <Col>
//                   <Form.Label>Subject</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="subject"
//                     value={subject}
//                     onChange={this.handleChange}
//                     placeholder="Enter the email subject"
//                   />
//                 </Col>
//               </Row>
//               <Form.Group className="mb-3" controlId="formGridAddress1">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   name="message"
//                   value={message}
//                   onChange={this.handleChange}
//                   placeholder="Enter your message here"
//                   rows={4}
//                 />
//               </Form.Group>
//               {errors.submit && (
//                 <p className="text-danger">{errors.submit}</p>
//               )}
//               {errors.recaptcha && (
//                 <p className="text-danger">{errors.recaptcha}</p>
//               )}
//               {successMessage && (
//                 <p className="text-success">{successMessage}</p>
//               )}
//               {/* reCAPTCHA */}
//               <Form.Group className="mb-3">
//                 <Recaptcha
//                   sitekey="6LddpvonAAAAACVsJ53LcOlXnb-iSXDo_b4HA-sn" // Replace with your reCAPTCHA site key
//                   onChange={this.onRecaptchaChange} // Callback function for reCAPTCHA
//                 />
//               </Form.Group>
//               <div className="d-flex justify-content-between">
//                 <Button
//                   className="cartBtn"
//                   variant="primary"
//                   type="submit"
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Contact;





////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha'; // Import the reCAPTCHA component
import '../CSS/contact.css';
import axios from 'axios';

class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '', // Added subject field
    message: '',
    successMessage: '',
    errors: {},
    recaptchaValue: null, // Store reCAPTCHA value
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Callback function for reCAPTCHA
  onRecaptchaChange = (value) => {
    this.setState({ recaptchaValue: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, subject, message, recaptchaValue } = this.state;

    // Check if reCAPTCHA is not verified
    if (!recaptchaValue) {
      this.setState({
        errors: { recaptcha: 'Please verify that you are not a robot.' },
      });
      return;
    }

    // Check if any of the other fields are empty
    if (!firstName || !lastName || !email || !subject || !message) {
      this.setState({
        errors: { submit: 'Please fill in all the fields.' },
      });
      return;
    }

    axios
      .post('http://localhost:3001/submit', {
        firstName,
        lastName,
        email,
        subject, // Include subject in the request
        message,
        recaptchaValue, // Include reCAPTCHA value in the request
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          successMessage: 'Message Sent!',
          firstName: '',
          lastName: '',
          email: '',
          subject: '', // Clear subject field after submission
          message: '',
          errors: {},
        });
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out!',
          confirmButtonColor: '#7D9D9C',
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          errors: { submit: 'An error occurred while sending the message.' },
        });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while sending the message.',
          confirmButtonColor: '#7D9D9C',
        });
      });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
      successMessage,
      errors,
    } = this.state;

    return (
      <div className="contact">
        <div className="contactContainer">
          <h1 className="contactHeader"> Share your Thoughts with us!</h1>
          <div className="pb-5 d-flex justify-content-around align-items-center gap-5 contactBodyContainer">
            <Form className="contactForm shadow-lg" onSubmit={this.handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                    placeholder="Enter your first name"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                    placeholder="Enter your last name"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Enter a valid email"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3"> {/* Added subject field */}
                <Col>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={this.handleChange}
                    placeholder="Enter the email subject"
                  />
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  placeholder="Enter your message here"
                  rows={4}
                />
              </Form.Group>
              {errors.submit && (
                <p className="text-danger">{errors.submit}</p>
              )}
              {errors.recaptcha && (
                <p className="text-danger">{errors.recaptcha}</p>
              )}
              {successMessage && (
                <p className="text-success">{successMessage}</p>
              )}
              {/* reCAPTCHA */}
              <Form.Group className="mb-3">
                <ReCAPTCHA
                  sitekey="6LddpvonAAAAACVsJ53LcOlXnb-iSXDo_b4HA-sn" // Replace with your reCAPTCHA site key
                  onChange={this.onRecaptchaChange} // Callback function for reCAPTCHA
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button
                  className="cartBtn"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
