import React, { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Radio,
  AutoComplete,
  DatePicker,
} from 'antd';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function onChange(date, dateString) {
    console.log(date, dateString);
  };
  
const SignUp = () => {
  const [form] = Form.useForm();
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div style={{display: "flex", justifyContent:"center",alignItems:"center"}}>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
        <Form.Item
        name="firstname"
        label="First Name"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Last Name"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: false,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="batch"
        label="Batch"
        rules={[
          {
            required: true,
            message: 'Please select Department!',
          },
        ]}
      >
          <DatePicker onChange={onChange} picker="year" />
      </Form.Item>

      <Form.Item
        name="department"
        label="Department"
        rules={[
          {
            required: true,
            message: 'Please select Department!',
          },
        ]}
      >
        <Select placeholder="select your department">
          <Option value="CSE">Computer and Science Engineering</Option>
          <Option value="IT">Information Technology</Option>
          <Option value="CHEM">Chemical Engineering</Option>
          <Option value="MECH">Mechanical Engineering</Option>
          <Option value="CIVIL">Civil Engineering</Option>
          <Option value="EEC">Electrical Engineering</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="isEmployed"
        label="Are you Emplyoee?"
        rules={[
          {
            required: true,
            message: 'Please select Department!',
          },
        ]}
      >
      <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Yes</Radio>
      <Radio value={2}>No</Radio>
    </Radio.Group>
    </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};


export default SignUp;