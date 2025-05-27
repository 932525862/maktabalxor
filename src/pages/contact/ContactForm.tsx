/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, Skeleton, Select } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const { Option } = Select;

// Form ma'lumotlari uchun interfeys
interface FormValues {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formInstance] = Form.useForm(); // Ant Design form instance
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState(""); // Success/Error message

  setTimeout(() => setLoading(false), 1500);

  const sendEmail = () => {
    emailjs
      .send(
        "service_53amnpf",
        "template_ey1ow0m",
        {
          from_name: formInstance.getFieldValue("from_name"),
          from_email: formInstance.getFieldValue("from_email"),
          company_name: formInstance.getFieldValue("company_name"),
          message: formInstance.getFieldValue("message"),
        },
        "5wpgyyxjw5uwQjzWh"
      )
      .then(
        () => {
          setModalMessage(t("home.contactM")); // Success message
          setIsModalVisible(true);
          console.log("Message sent successfully");

          formInstance.resetFields(); // Clear form fields
        },
        (error: any) => {
          setModalMessage(`Failed to send message: ${error.text}`);
          setIsModalVisible(true);
        }
      );
  };

  const onFinish = (values: FormValues) => {
    console.log("Submitted Data:", values);
    sendEmail();
  };

  const onFinishFailed = (errorInfo: any) => {
    setErrors(
      errorInfo.errorFields.reduce((acc: any, field: any) => {
        acc[field.name[0]] = field.errors[0];
        return acc;
      }, {})
    );
  };

  return (
    <>
      {loading ? (
        <Skeleton active paragraph={{ rows: 6 }} />
      ) : (
        <Form
          form={formInstance}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="lg:w-1/2 space-y-4 w-full"
        >
          {/* Name */}
          <Form.Item
            name="from_name"
            label="Name"
            validateStatus={errors.name ? "error" : ""}
            help={errors.name}
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Name" size="large" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="from_phone"
            label="Telfon raqam"
            validateStatus={errors.phone ? "error" : ""}
            help={errors.phone}
            rules={[
              { required: true, message: "Phone is required" },
              { type: "number", message: "Invalid email format" },
            ]}
          >
            <Input placeholder="Telfon raqam" size="large" />
          </Form.Item>

          {/* Company */}
          <Form.Item
            name="branch_name"
            label="Filial"
            rules={[{ required: true, message: "Filialni tanlang" }]}
          >
            <Select
              placeholder="Filialni tanlang"
              size="large"
              allowClear
              showSearch
              optionFilterProp="children"
            >
              <Option value="Toshkent">Toshkent</Option>
              <Option value="Buxoro">Buxoro</Option>
              <Option value="Samarqand">Samarqand</Option>
              <Option value="Andijon">Andijon</Option>
              {/* Istasangiz, bu yerga boshqa filiallarni ham qo‘shishingiz mumkin */}
            </Select>
          </Form.Item>

          {/* Message */}
          <Form.Item
            name="message"
            label="Message"
            validateStatus={errors.message ? "error" : ""}
            help={errors.message}
            rules={[{ required: true, message: "Message is required" }]}
          >
            <Input.TextArea placeholder="Message" rows={4} size="large" />
          </Form.Item>

          <Button
            htmlType="submit"
            size="large"
            className="w-full !bg-[#166534E6] !text-white !border-none hover:!bg-[#166534c0] !transition-all !duration-500"
          >
            {t("home.contactB")}
          </Button>
        </Form>
      )}

      {/* Modal for success/error messages */}
      <Modal
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <p>{modalMessage}</p>
      </Modal>
    </>
  );
};

export default ContactForm;
