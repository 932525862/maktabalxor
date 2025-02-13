// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button, Form, Input, Modal, Skeleton } from "antd";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// // Form ma'lumotlari uchun interfeys
// interface FormValues {
//   name: string;
//   email: string;
//   company?: string;
//   message: string;
// }

// const ContactForm: React.FC = () => {

// const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   const { t } = useTranslation();
//   // const [form] = Form.useForm();
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Fake loading simulation (you can replace with real async data fetching)
//   setTimeout(() => setLoading(false), 1500);

//   const sendEmail = (values: FormValues) => {
//     const subject = encodeURIComponent("New Contact Form Submission");
//     const body = encodeURIComponent(
//       `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "N/A"}\nMessage: ${values.message}`
//     );
//     window.location.href = `mailto:sales@milmax.uz?subject=${subject}&body=${body}`;
//   };

//   const onFinish = (values: FormValues) => {
//     console.log("Submitted Data:", values);
//     sendEmail(values);
//     setIsModalVisible(true);
//     form.resetFields(); // Formani tozalash

//   };

//   const onFinishFailed = (errorInfo: any) => {
//     setErrors(
//       errorInfo.errorFields.reduce((acc: any, field: any) => {
//         acc[field.name[0]] = field.errors[0];
//         return acc;
//       }, {})
//     );
//   };

//   const handleModalClose = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <>
//       {loading ? (
//         <Skeleton active paragraph={{ rows: 6 }} />
//       ) : (
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           className="lg:w-1/2 space-y-4 w-full"
//         >
//           {/* Name */}
//           <Form.Item
//             name="name"
//             label="Name"
//             validateStatus={errors.name ? "error" : ""}
//             help={errors.name}
//             rules={[{ required: true, message: "Name is required" }]}
//           >
//             <Input placeholder="Name" size="large" />
//           </Form.Item>

//           {/* Email */}
//           <Form.Item
//             name="email"
//             label="Email"
//             validateStatus={errors.email ? "error" : ""}
//             help={errors.email}
//             rules={[
//               { required: true, message: "Email is required" },
//               { type: "email", message: "Invalid email format" },
//             ]}
//           >
//             <Input placeholder="Email" size="large" />
//           </Form.Item>

//           {/* Company */}
//           <Form.Item name="company" label="Company">
//             <Input placeholder="Company" size="large" />
//           </Form.Item>

//           {/* Message */}
//           <Form.Item
//             name="message"
//             label="Message"
//             validateStatus={errors.message ? "error" : ""}
//             help={errors.message}
//             rules={[{ required: true, message: "Message is required" }]}
//           >
//             <Input.TextArea placeholder="Message" rows={4} size="large" />
//           </Form.Item>

//           <Button
//             htmlType="submit"
//             size="large"
//             className="w-full !bg-[#800c3a] !text-white !border-none hover:!bg-pink-800 !transition-all !duration-500"
//           >
//             {t("home.contactB")}
//           </Button>
//         </Form>
//       )}

//       <Modal
//         visible={isModalVisible}
//         onOk={handleModalClose}
//         onCancel={handleModalClose}
//         footer={null}
//         afterClose={() => setTimeout(handleModalClose, 2000)}
//       >
//         <p>{t("home.contactM")}</p>
//       </Modal>
//     </>
//   );
// };

// export default ContactForm;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, Skeleton } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

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
  // const formRef = useRef<HTMLFormElement>(null); // EmailJS form reference
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState(""); // Success/Error message

  // Fake loading simulation (you can replace with real async data fetching)
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
            name="from_email"
            label="Email"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email}
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>

          {/* Company */}
          <Form.Item name="company_name" label="Company">
            <Input placeholder="Company" size="large" />
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
            className="w-full !bg-[#800c3a] !text-white !border-none hover:!bg-pink-800 !transition-all !duration-500"
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


