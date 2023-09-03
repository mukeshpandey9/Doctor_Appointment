import React from "react";
import { Form, Input, message } from "antd";
import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useDispatch } from "react-redux";
const Register = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  // Form Haldler >>>>>>

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Success");
        nevigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="card p-4">
          <h1 className="text-center m-3 fs-1">Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>

          <button className="btn btn-primary btn-lg" type="submit">
            Register
          </button>

          <Link to="/login" className="text-center m-3 fs-6">
            Already a user? login
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Register;
