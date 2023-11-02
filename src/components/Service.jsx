import { Container, Row, Col } from "react-bootstrap";
import "./Service.css";

function Service() {
  return (
    <>
      <section className="content" id="ourservice">
        <Container>
          <Row>
            <Col lg={6}>
              <img
                style={{ height: "428px" }}
                src="images/img_service.png"
                alt=""
              />
            </Col>
            <Col lg="6" style={{ paddingTop: "15px" }}>
              <h2 className="fw-bold fs-4" style={{ paddingRight: "200px" }}>
                Best Car Rental for any kind of trip in Tangerang
              </h2>
              <p style={{ fontSize: "14px", paddingRight: "30px" }}>
                Sewa mobil di Depok bersama Binar Car Rental jaminan harga lebih
                murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                meeting, dll.
              </p>
              <div>
                <p>
                  <img
                    src="images/Group_53.svg"
                    style={{ marginRight: "16px" }}
                    alt=" "
                  />{" "}
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </div>
              <div>
                <p>
                  <img
                    src="images/Group_53.svg"
                    style={{ marginRight: "16px" }}
                    alt=" "
                  />{" "}
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
              </div>
              <div>
                <p>
                  <img
                    src="images/Group_53.svg"
                    style={{ marginRight: "16px" }}
                    alt=" "
                  />{" "}
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
              </div>
              <div>
                <p>
                  <img
                    src="images/Group_53.svg"
                    style={{ marginRight: "16px" }}
                    alt=" "
                  />{" "}
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
              </div>
              <div>
                <p>
                  <img
                    src="images/Group_53.svg"
                    style={{ marginRight: "16px" }}
                    alt=" "
                  />{" "}
                  Layanan Airport Transfer / Drop In Out
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Service;
