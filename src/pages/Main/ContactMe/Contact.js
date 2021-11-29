import React, { useRef } from "react";
import { Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Success Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Your message has been sent. I will contact you soon.</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn default-btn" onClick={props.onHide}>
          Done
        </button>
      </Modal.Footer>
    </Modal>
  );
}

const Contact = () => {
  const form = useRef();
  const [modalShow, setModalShow] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_cmwv04m",
        form.current,
        "user_Q0vmMHHIKu2WQHsZjAyF1"
      )
      .then(
        (result) => {
          setModalShow(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div class="contact-section pt-5" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">
            <div class="section-heading text-center">
              <h2>Contact Me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <Form ref={form} onSubmit={sendEmail}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail" className="ps-0">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control type="text" name="from_name" required />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="pe-0"
                >
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Phone"
                    className="mb-3"
                  >
                    <Form.Control type="text" name="phone" required />
                  </FloatingLabel>
                </Form.Group>
              </Row>

              <Form.Group controlId="formGridAddress1">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-4"
                >
                  <Form.Control type="email" name="from_email" required />
                </FloatingLabel>
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  name="message"
                  style={{ height: "100px" }}
                  required
                />
              </FloatingLabel>
              <button className="btn default-btn">Send</button>
            </Form>
          </div>
          <div className="col-md-4 contact-banner text-white text-start d-flex flex-column justify-content-center mx-auto">
            <div className="mb-1">
              <h5 className="fw-bold">
                <i className="fas fa-map-marker-alt me-2"></i>
                Address
              </h5>
              <p className="fw-light">Dhaka 1236, Bangladesh</p>
            </div>
            <div className="mb-1">
              <h5 className="fw-bold">
                <i class="fas fa-phone-alt me-2"></i>
                Phone
              </h5>
              <p className="fw-light">(+88) 01521-431550</p>
            </div>
            <div className="mb-1">
              <h5 className="fw-bold">
                <i class="fas fa-envelope me-2"></i>
                Email
              </h5>
              <p className="fw-light">tbh.nishat@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Contact;
