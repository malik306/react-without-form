import React, { useState } from "react";
import { Input, Space, Radio, Select, Button, Modal, DatePicker } from "antd";
const { Option } = Select;
function Contact() {
  //   const [valueRadio, setValueRadio] = useState("");
  //   const [valueName, setValueName] = useState("");
  //   const [valueEmail, setValueEmail] = useState("");
  //   const [valuePass, setValueُPass] = useState("");
  //   const [valueSelect, setValueُSelect] = useState("");
  //   const [valueMsg, setValueُMsg] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [data, setData] = useState({
    pName: "",
    mail: "",
    pass: "",
    msg: "",
    gender: "",
    sSelect: "",
    mSelect: "",
    startDate: "",
    endDate: "",
  });
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  //   function changeMultiSelect(value) {
  //     console.log(`selected ${value}`);
  //   }

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //   const changeRadio = (e) => {
  //     setValueRadio(e.target.value);
  //   };
  //   function changeSelect(value) {
  //     setValueُSelect(value);
  //   }

  //   function changeName(e) {
  //     setValueName(e.target.value);
  //   }
  //   function changeEmail(e) {
  //     setValueEmail(e.target.value);
  //   }
  //   function changePass(e) {
  //     setValueُPass(e.target.value);
  //   }
  //   function changeMsg(e) {
  //     setValueُMsg(e.target.value);
  //   }
  function handleChange(e) {
    let stateCopy = data;

    stateCopy[e.name] = e.value;
    setData(stateCopy);
  }

  return (
    <>
      <Space direction="vertical" style={{ width: "50%", padding: "0.5em 0" }}>
        <Input
          size="large"
          placeholder="Enter Name"
          onChange={(e) =>
            handleChange({ value: e.target.value, name: "pName" })
          }
        />
        <Input
          size="large"
          placeholder="Enter Email Address"
          onChange={(e) =>
            handleChange({ value: e.target.value, name: "mail" })
          }
          type="email"
        />
        <Input.Password
          size="large"
          placeholder="Enter Password"
          onChange={(e) =>
            handleChange({ value: e.target.value, name: "pass" })
          }
        />
        <Input.TextArea
          style={{ resize: "none" }}
          size="large"
          placeholder="Enter Message"
          onChange={(e) => handleChange({ value: e.target.value, name: "msg" })}
        />
        <Radio.Group
          onChange={(e) =>
            handleChange({ value: e.target.value, name: "gender" })
          }
        >
          <Radio value="M">M</Radio>
          <Radio value="F">F</Radio>
        </Radio.Group>

        <DatePicker
          onChange={(date, dateString) =>
            handleChange({ value: dateString, name: "startDate" })
          }
        />
        <DatePicker
          onChange={(date, dateString) =>
            handleChange({ value: dateString, name: "endDate" })
          }
        />
        <Select
          defaultValue=""
          style={{ width: "100%" }}
          onChange={(e) => handleChange({ value: e, name: "sSelect" })}
        >
          <Option value="pk">Pk</Option>
          <Option value="us">US</Option>
          <Option value="euro">Euro</Option>
          <Option value="yen">Yen</Option>
        </Select>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          onChange={(e) => handleChange({ value: e, name: "mSelect" })}
        >
          {children}
        </Select>
        <Button type="primary" onClick={showModal}>
          Open Data
        </Button>
        <Modal
          title="Details"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{data.pName !== "" ? data.pName : "Please Enter User Name"}</p>
          <p>{data.mail !== "" ? data.mail : "Please Enter Email Address"}</p>
          <p>{data.pass !== "" ? data.pass : "Please Enter Password"}</p>
          <p>{data.msg !== "" ? data.msg : "Please Enter Message"}</p>
          <p>{data.gender !== "" ? data.gender : "Please Select Gender"}</p>
          <p>{data.startDate !== "" ? data.startDate : "Please Select Start Date"}</p>
          <p>{data.endDate !== "" ? data.endDate : "Please Select End Date"}</p>
          <p>{data.sSelect !== "" ? data.sSelect : "Please Select Currency"}</p>
          <p>{data.mSelect !== "" ? data.mSelect : "Please Select Anything"}</p>
        </Modal>
      </Space>
    </>
  );
}

export default Contact;
