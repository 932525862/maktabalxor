import { Button, Form, Input } from "antd";
import { useState } from "react";

// Form ma'lumotlari uchun interfeys
interface FormValues {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [form] = Form.useForm(); // Ant Design formni ishlatish
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onFinish = (values: FormValues) => {
    console.log("Submitted Data:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    setErrors(errorInfo.errorFields.reduce((acc: any, field: any) => {
      acc[field.name[0]] = field.errors[0]; // Errorlarni set qilish
      return acc;
    }, {}));
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="w-1/2 space-y-4"
    >
      {/* Name */}
      <Form.Item
        name="name"
        label="Name"
        validateStatus={errors.name ? "error" : ""}
        help={errors.name}
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      {/* Email */}
      <Form.Item
        name="email"
        label="Email"
        validateStatus={errors.email ? "error" : ""}
        help={errors.email}
        rules={[
          { required: true, message: "Email is required" },
          { type: "email", message: "Invalid email format" },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      {/* Company */}
      <Form.Item name="company" label="Company">
        <Input placeholder="Company" />
      </Form.Item>

      {/* Message */}
      <Form.Item
        name="message"
        label="Message"
        validateStatus={errors.message ? "error" : ""}
        help={errors.message}
        rules={[{ required: true, message: "Message is required" }]}
      >
        <Input.TextArea placeholder="Message" rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit" className="w-full">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
