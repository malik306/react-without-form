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
  let [error, setError] = useState({
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
    Validate();
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
  function Validate() {
    let errorCopy = error;
    if (data.pName === "" && data.pName.length <= 10) {
      errorCopy.pName = `Please fill your data, also greater than 10 char`;
    } else {
      errorCopy.pName = ``;
    }
    if (data.msg === "" && data.msg.length <= 20) {
      errorCopy.msg = `Please fill your data, also greater than 20`;
    } else {
      errorCopy.msg = ``;
    }
    if (data.mSelect === "") {
      errorCopy.mSelect = `Please select anything`;
    } else {
      error.mSelect = ``;
    }
    if (data.sSelect === "") {
      error.sSelect = `Please select currency`;
    } else {
      errorCopy.sSelect = ``;
    }
    if (data.startDate === "") {
      errorCopy.startDate = `Please fill your starting date`;
    } else {
      errorCopy.startDate = ``;
    }
    if (data.endDate === "") {
      errorCopy.endDate = `Please fill your ending date`;
    } else {
      errorCopy.endDate = ``;
    }
    if (data.gender === "") {
      errorCopy.gender = `Please select gender`;
    } else {
      errorCopy.gender = ``;
    }
    if (data.pass === "") {
      errorCopy.pass = `Please use `;
    } else {
      errorCopy.pass = ``;
    }
    if (data.mail === "") {
      errorCopy.mail = `Please use `;
    } else {
      errorCopy.mail = ``;
    }
    setError({
      ...error,
    });
    const isEmpty = Object.values(error);
    const boolModal = CheckArray(isEmpty);
    setIsModalVisible(boolModal);
  }
  function CheckArray(data) {
    let isInvalid = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== "") {
        isInvalid = false;
      }
    }
    return isInvalid;
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
        {error.pName && <p style={{ color: "red" }}>{error.pName}</p>}
        <Input
          size="large"
          placeholder="Enter Email Address"
          onChange={(e) =>
            handleChange({ value: e.target.value, name: "mail" })
          }
          type="email"
        />
        {error.mail && <p style={{ color: "red" }}>{error.mail}</p>}
        <Input.Password
          size="large"
          placeholder="Enter Password"
          onChange={(e) =>
            handleChange({ value: e.target.value, name: "pass" })
          }
        />
        {error.pass && <p style={{ color: "red" }}>{error.pass}</p>}
        <Input.TextArea
          style={{ resize: "none" }}
          size="large"
          placeholder="Enter Message"
          onChange={(e) => handleChange({ value: e.target.value, name: "msg" })}
        />
        {error.msg && <p style={{ color: "red" }}>{error.msg}</p>}
        <Radio.Group
          onChange={(e) =>
            handleChange({ value: e.target.value, name: "gender" })
          }
        >
          <Radio value="M">M</Radio>
          <Radio value="F">F</Radio>
        </Radio.Group>
        {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}
        <DatePicker
          onChange={(date, dateString) =>
            handleChange({ value: dateString, name: "startDate" })
          }
        />
        {error.startDate && <p style={{ color: "red" }}>{error.startDate}</p>}
        <DatePicker
          onChange={(date, dateString) =>
            handleChange({ value: dateString, name: "endDate" })
          }
        />
        {error.endDate && <p style={{ color: "red" }}>{error.endDate}</p>}
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
        {error.sSelect && <p style={{ color: "red" }}>{error.sSelect}</p>}
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          onChange={(e) => handleChange({ value: e, name: "mSelect" })}
        >
          {children}
        </Select>
        {error.mSelect && <p style={{ color: "red" }}>{error.mSelect}</p>}
        <Button type="primary" onClick={showModal}>
          Open Data
        </Button>
        <Modal
          title="Form User Details"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{data.pName}</p>
          <p>{data.mail}</p>
          <p>{data.pass}</p>
          <p>{data.msg}</p>
          <p>{data.gender}</p>
          <p>{data.startDate}</p>
          <p>{data.endDate}</p>
          <p>{data.sSelect}</p>
          <p>{data.mSelect}</p>
        </Modal>
      </Space>
    </>
  );
}

export default Contact;
