import React, { Component } from "react";
import { CardTitle, Form, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";

import { loginUser } from "../redux/auth";
import "./login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      statusLogin: "default",
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    const { user } = this.props;
    if (user !== null) {
      this.props.history.push("/videolist");
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    if (prevProps.status !== status) {
      if (status === "success") {
        if (this.props.user.authorization === "admin") {
          this.props.history.push("/import-members");
        } else {
          this.props.history.push("/VideoList");
        }
      }
      if (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) &&
        status === "fail"
      ) {
        this.setState({
          statusLogin: "fail",
        });
      }
    }
  }

  onUserLogin = () => {
    if (this.state.email !== "") {
      this.props.loginUser(this.state.email, this.state.password);
      if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
      ) {
        this.setState({
          statusLogin: "fail",
        });
      }
      
    } else if (this.state.email === "") {
      this.setState({
        statusLogin: "fail",
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.onUserLogin();
    }
  };

  render() {
    const { statusLogin } = this.state;
    return (
      <div className="all-row-login">
        <div className="container container-login">
          <div
            className="auth-card shadow col-lg-10 offset-lg-1 col-md-8 col-12"
            style={{ borderRadius: "25px" }}
          >
            <div className="position-relative image-side-login mt-3 col-lg-6 col-12">
              <div className="description">
                <p className="text-welcome">ยินดีต้อนรับเข้าสู่โปรแกรม</p>
                <p className="text-7-day">7 DAY WITH</p>
                <p className="text-pilates-ring">PILATES RING</p>
              </div>
              <img
                className="mb-4 mt-3 col-12"
                src="../assets/img/loginprofile.jpg"
                alt=""
              />
            </div>

            <div className="form-side-login col-lg-6 col-12">
              <CardTitle className="h3 mb-4 mt-5" style={{ color: "#F45197" }}>
                {"เข้าสู่ระบบ"}
              </CardTitle>
              <Form>
                <h4 style={{ textAlign: "left" }}>Email</h4>
                <Input
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event)}
                  className="mb-3"
                />

                {statusLogin === "fail" &&
                  !(this.props.status === "success") && (
                    <small id="emailHelp" className="form-text text-muted mb-3">
                      <h6 style={{ color: "red" }}>อีเมลไม่ถูกต้อง</h6>
                    </small>
                  )}

                {this.props.status === "loading" ? (
                  <div className="spinner-box">
                    <div className="spinner"></div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between align-items-center mb-3 btn-login">
                    <Button
                      style={{
                        backgroundColor: "#F45197",
                        borderColor: "#F45197",
                        borderRadius: "20px",
                      }}
                      className="btn-shadow"
                      size="lg"
                      onClick={this.onUserLogin}
                      block
                    >
                      <span className="h6 text-one">{"LOGIN"}</span>
                    </Button>
                  </div>
                )}

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Button
                    className="btn-link"
                    color="empty"
                    href="https://bebefitroutine.com/sevendaywithpilatesring/"
                    target="_blank"
                    block
                  >
                    <span
                      className="text-one underline-on-hover"
                      style={{ cursor: "pointer", color: "#F45197" }}
                    >
                      {"ซื้อคอร์สออนไลน์"}
                    </span>
                  </Button>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center mb-3">
                  <Button
                    color="light"
                    className="btn-shadow"
                    size="lg"
                    onClick={() => this.props.history.push('/register')}
                    block
                  >
                    {"สมัครสมาชิก"}
                  </Button>
                </div> */}
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, status } = authUser;
  return { user, status };
};

const mapActionsToProps = { loginUser };

export default connect(mapStateToProps, mapActionsToProps)(Login);
