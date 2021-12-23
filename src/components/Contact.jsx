import React, { useEffect, useState } from "react";
import { Form, Input, Radio, Select, Button, DatePicker, Modal } from "antd";
const { Option } = Select;
function Contact() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({});
  const [welcome,setWelcome] = useState(null);
  const [success,setSuccess] = useState(null);
  const [bye,setBye] = useState(null);
  useEffect(() => {
    console.log('mounting and updating');
    setWelcome("Welcome to the Form Page");
    setSuccess("Form is submitted");
    return () => {
      console.log('unmounting');
    };
  },[bye]);
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      startDate: fieldsValue["startDate"].format("DD-MM-YYYY"),
      endDate: fieldsValue["endDate"].format("DD-MM-YYYY"),
    };
    setData(values);
    setIsModalVisible(true);
  };
  //Date Configuration required string
  const configStartDate = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select Starting Date!",
      },
    ],
  };
  const configEndDate = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select Ending Date!",
      },
    ],
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  const handleOk = () => {
    setIsModalVisible(false);
    setBye("You have checked the Modal, Please close the Modal");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
    <p style={{paddingTop:"1em",textAlign:"center"}}>{welcome}</p>
      <Form
        style={{ padding: "0.5em" }}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 12,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="mail"
          rules={[
            {
              type: "email",
              message: "Please enter valid email address",
            },
            {
              required: true,
              message: "Please enter your Email Address",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="pass"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Message"
          name="msg"
          rules={[
            {
              required: true,
              message: "Please enter your Message!",
            },
          ]}
        >
          <Input.TextArea style={{ resize: "none" }} />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="M">M</Radio>
            <Radio value="F">F</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Start Date" name="startDate" {...configStartDate}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="End Date" name="endDate" {...configEndDate}>
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Select Currency"
          name="currency"
          rules={[
            {
              required: true,
              message: "Please select currency!",
            },
          ]}
        >
          <Select>
            <Option value="pk">Pk</Option>
            <Option value="us">US</Option>
            <Option value="euro">Euro</Option>
            <Option value="yen">Yen</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Select Multiple"
          name="mSelect"
          rules={[
            {
              required: true,
              message: "Please select Anything!",
            },
          ]}
        >
          <Select mode="multiple">{children}</Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>{bye}</p>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p style={{paddingBottom:"0.5em"}}>{success}</p>
        <p>{data.username}</p>
        <p>{data.mail}</p>
        <p>{data.pass}</p>
        <p>{data.msg}</p>
        <p>
          {data.startDate} , {data.endDate}
        </p>
        <p>{data.gender}</p>
        <p>{data.currency}</p>
        <p>{data.mSelect}</p>
      </Modal>
    </>
  );
}
export default Contact;
