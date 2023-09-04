import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2'
import "../CSS/contact.css";
import axios from 'axios';




// class Contact extends Component {
//   state = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: '',
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { firstName, lastName, email, message } = this.state;

//     axios.post('/send-email', { name: `${firstName} ${lastName}`, email, message })
//       .then((response) => {
//         console.log(response.data);
//         Swal.fire({
//           icon: 'success',
//           title: 'Message Sent!',
//           text: 'Thank you for reaching out!',
//           confirmButtonColor: '#7D9D9C',
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'An error occurred while sending the message.',
//           confirmButtonColor: '#7D9D9C',
//         });
//       });
//   };





class Contact extends Component {

  onClick = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
    title: `Message Sent!`,  
      text: `Thank you for reaching out!`,
      confirmButtonColor: "#7D9D9C",
  });
  }

  render() {
    return (
      <div className="contact">

        

        <div className="contactContainer">
          <h1 className='contactHeader'> Share your Thoughts with us!</h1>
          <div className="pb-5 d-flex justify-content-around align-items-center gap-5 contactBodyContainer" >
            <Form className='contactForm shadow-lg'>

              <Row className="mb-3">
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control placeholder='Enter your first name' />
                </Col>
                </Row>
                <Row className="mb-3">
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control placeholder='Enter your last name' />
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder='Enter a valid email' type="email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1" >
                <Form.Label>Message</Form.Label>
                <Form.Control placeholder='Enter your message here' as="textarea" rows={4} />
              </Form.Group>
              <div className='d-flex justify-content-between'>
              <Button className="cartBtn" onClick={this.onClick} variant="primary" type="submit">Submit</Button>
              </div>
                

            </Form>

          
         
    
          </div>
        </div>
      </div>
    );
  }
}


// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' }); // Clear previous validation errors
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     }

//     setErrors(newErrors);

//     // Return true if there are no validation errors
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       axios
//         .post('http://localhost:3001/send-email', formData)
//         .then((response) => {
//           setSuccessMessage(response.data.message);
//         })
//         .catch((error) => {
//           console.error(error);
//           setSuccessMessage('Error sending message. Please try again later.');
//         });
//     }
//   };

//   return (
//     <div>
//       <h2>Contact Us</h2>
//       {successMessage && <p className="success-message">{successMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>
//         <div>
//           <label>Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           {errors.message && <p className="error">{errors.message}</p>}
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };





 export default Contact;
