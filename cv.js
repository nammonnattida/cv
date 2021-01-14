import React, { useState } from 'react';
import './style.scss';
import {
  Col,
  Row,
} from 'react-bootstrap';

function cv() {
  const [data] = useState({
    fullName: 'Nattida Boontharaksa',
    email: 'nattida_ml@hotmail.com',
    birthDay: '09-07-1997',
    phoneNumber: '093-6875862',
    age: '23 years old',
    image: 'https://www.img.in.th/images/f4fb34a7b5b7573b11dc88ae6e4dc75e.jpg',
  });




  return (
    <div className="cv">
      <div className="container-fluid">
        <div className="card">
          <span className="text-color text-center">{data.fullName}</span>
          <br />
          <img
            src={
              data.image
                ? data.image
                : 'https://www.img.in.th/images/71b21a3f3c6a7e5a28ad75de2300897d.png'
            }
            alt=""
            className="profile"
          />
          <br />
          <div className="col-12 mt-3">
            <div className="card-horizontal">
              <div className="row">
                <Row className="row-detail">
                  <Col md={3}>
                    <span className="text-left-detail">Email</span>
                  </Col>
                  <Col md={6}>
                    <span>{data.email}</span>
                  </Col>
                </Row>
                <Row className="row-detail">
                  <Col md={3}>
                    <span className="text-left-detail">Birthday</span>
                  </Col>
                  <Col md={6}>
                    <span>{data.birthDay}</span>
                  </Col>
                </Row>
                <Row className="row-detail">
                  <Col md={3}>
                    <span className="text-left-detail">Telephone</span>
                  </Col>
                  <Col md={6}>
                    <span>{data.phoneNumber}</span>
                  </Col>
                </Row>
                <Row className="row-detail">
                  <Col md={3}>
                    <span className="text-left-detail">Age</span>
                  </Col>
                  <Col md={6}>
                    <span>{data.age}</span>
                  </Col>
                </Row>
              </div>
              <div className="col-sm-7">
                <div className="card-body">
                  <div className="progressBar">
                    <h4>HTML5</h4>
                    <div className="progressBarContainer">
                      <div className="progressBarValue value-80"></div>
                    </div>
                  </div>
                  <div className="progressBar">
                    <h4>CSS3</h4>
                    <div className="progressBarContainer">
                      <div className="progressBarValue value-70"></div>
                    </div>
                  </div>
                  <div className="progressBar">
                    <h4>JAVA</h4>
                    <div className="progressBarContainer">
                      <div className="progressBarValue value-80"></div>
                    </div>
                  </div>
                  <div className="progressBar">
                    <h4>SQL</h4>
                    <div className="progressBarContainer">
                      <div className="progressBarValue value-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cv;
