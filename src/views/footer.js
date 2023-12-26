import React from "react";
import pinklogo from "../assets/img/pinklogo.png";
import phonelogo from "../assets/img/phonelogo.png";
import emaillogo from "../assets/img/emaillogo.png";
import fb from "../assets/img/fb.png";
import instagram from "../assets/img/Instagram.png";
import te from "../assets/img/te.png";
import line from "../assets/img/line.png";
import "./footer.scss";

export default function footer() {
  return (
    <div
      className="footer-background" /*  style={{ backgroundImage: `url(${home2})`, backgroundSize: '500px 500px', }}  */
    >
      <div className="row  justify-content-md-center">
        <div class="col-12 col-md-4" style={{ textAlign: "left" }}>
          <img
            src={pinklogo}
            style={{
              marginBottom: "40px",
              maxWidth: "105px",
              width: "100%",
              height: "auth",
            }}
          />
          <p className="bbpf-company">บริษัท บีบีพีเอฟ จำกัด (สำนักงานใหญ่)</p>
          <p className="bbpf-address">
            เลขที่1/2 ถ.พระรามที่2 ซอย82 แยก6 แขวงแสมดำ เขตบางขุนเทียน กรุงเทพ
            10150
          </p>
        </div>
        <div class="col-12 col-md-4 center-content-icon">
          <div style={{ textAlign: "left" }}>
            <p className="contact-us">ติดต่อเรา</p>
            <hr className="hr_class" />
            <p className="bbpf-address ">
              <img src={phonelogo} style={{ marginRight: "5px" }} />
              093-883-2339
            </p>
            <p className="bbpf-address">
              <img
                src={emaillogo}
                style={{ width: "5%", marginRight: "5px" }}
              />
              contact@pynk.co
            </p>
          </div>
        </div>
        <div class="col-12 col-md-4 center-content-icon">
          <div style={{ textAlign: "left" }}>
            <p className="contact-us">Social Media</p>
            <hr className="hr_class" />
            <div className="row">
              <img src={fb} className="img-icon" />
              <img src={instagram} className="img-icon" />
              <img src={te} className="img-icon" />
              <img src={line} className="img-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="box-bbpf-rights">
        <p className="bbpf-rights">© 2022 BBPF RIGHTS RESERVED</p>
        <div className="hr-height" />
        <p className="bbpf-rights">Privacy Policy</p>
        <div className="hr-height" />
        <p className="bbpf-rights">Cookies Policy</p>
        <div className="hr-height" />
        <p className="bbpf-rights">Cookies Setting</p>
      </div>
    </div>
  );
}
