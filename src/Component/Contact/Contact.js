import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import ContactItem from "../ContactItem";
import phone from "../../img/phone.svg";
import email from "../../img/emailme.svg";
import location from "../../img/location.svg";
import Tittle from "../Tittle";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "500px" }}
              src="https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-3">
              <div className="ContactPage">
                <div className="map-sect">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703802988!2d90.27923923029098!3d23.780573257422212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1638286729076!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <section className="contact" id="contact">
              <div className="max-width">
                <div className="contact-content">
                  <div className="column right mx-auto">
                    <div className="text text-center fs-2 my-5 fw-bolder">
                      ---Contact us---
                    </div>
                    <htmlhtmlForm
                      className="contact-htmlhtmlForm"
                      action="https://htmlhtmlFormspree.io/f/xbjwrkwj"
                      method="POST"
                    >
                      <div className="fields">
                        <div className="field name">
                          <input
                            type="text"
                            name="fullName"
                            className="fullname"
                            placeholder="Name"
                          />
                        </div>
                        <div className="field email">
                          <input
                            type="text"
                            name="email"
                            className="email-input"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <input
                          type="text"
                          name="subject"
                          className="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="field textarea">
                        <textarea
                          name="message"
                          className="message"
                          cols="30"
                          rows="10"
                          placeholder="Message.."
                        ></textarea>
                      </div>
                      <div className="button-area">
                        <button
                          className="send-msg mx-auto "
                          type="submit"
                          name="send"
                        >
                          Send message
                        </button>
                      </div>
                    </htmlhtmlForm>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
