import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CarsList.css";
import { useCar } from "../store/CartContext";

function CarList() {
  const { state } = useCar();
  return (
    <>
      <section className="cars">
        <Container>
          <Row className="justify-content-center">
            <Col lg={11}>
              <Row>
                {state.filteredCars.map((car, index) => {
                  return (
                    <>
                      <Card className=" px-2 py-4">
                        <img
                          src={car.image}
                          alt=""
                          className="card-img-top mt-4"
                        />
                        <Card.Body>
                          <h5 className="card-title fs-6">
                            {car.manufacture}/{car.model}
                          </h5>
                          <h5 class="card-title fs-5 fw-bold">
                            {car.rentPerDay}
                          </h5>
                          <p class="cars__p">{car.description}</p>
                          <Row>
                            <Col sm="1">
                              <img
                                src="images/fi_users1.png"
                                width="20px"
                                alt=""
                              />
                            </Col>
                            <Col lg={10} className="ms-lg-2">
                              {car.capacity}
                            </Col>
                          </Row>
                          <Row className="mt-2">
                            <Col sm={1}>
                              <img
                                src="images/fi_settings.png"
                                width="20px"
                                alt=""
                              />
                            </Col>
                            <Col sm={10} className="ms-lg-2">
                              {car.transmission}
                            </Col>
                          </Row>
                          <Row className="mt-2 mb-4">
                            <Col sm={1}>
                              <img
                                src="images/fi_calendar.png"
                                width="20px"
                                alt=""
                              />
                            </Col>
                            <Col sm={10} className="ms-lg-2">
                              {car.year}
                            </Col>
                          </Row>
                        </Card.Body>
                        <a
                          href="/cars"
                          type="button"
                          className="btn btn-primary "
                        >
                          Mulai Sewa Mobil
                        </a>
                      </Card>
                    </>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CarList;
