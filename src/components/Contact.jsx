import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Radio, Select, Button, DatePicker } from "antd";
const { Option } = Select;
function Contact() {
  //selecting the reducer function for specific type action
  const dispatch = useDispatch();
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
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  return (
    <>
      <Form
        style={{ padding: "0.5em" }}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 12,
        }}
        onFinish={(e) => dispatch({ type: "Finish", data: e })}
        onFinishFailed={(e) => dispatch({ type: "Fail", data: e })}
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
    </>
  );
}
export default Contact;
