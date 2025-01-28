import { FloatButton } from "antd";
import {
  CommentOutlined,
  CustomerServiceOutlined,
  TwitterOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const SocialMediaButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <FloatButton.Group
        open={open}
        trigger="click"
        style={{ insetInlineEnd: 24 }}
        onClick={() => setOpen(!open)}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton
          icon={<TwitterOutlined />}
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#1DA1F2",
            fontSize: "1.5rem",
          }}
        />
        <FloatButton
          icon={<SendOutlined />} // Telegram
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#0088cc",
            fontSize: "1.5rem",
          }}
        />
        <FloatButton
          icon={<WhatsAppOutlined />}
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#25D366",
            fontSize: "1.5rem",
          }}
        />
        <FloatButton
          icon={<InstagramOutlined />}
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#C13584",
            fontSize: "1.5rem",
          }}
        />
        <FloatButton
          icon={<CommentOutlined />}
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#FF4500",
            fontSize: "1.5rem",
          }}
        />
      </FloatButton.Group>
    </>
  );
};

export default SocialMediaButton;
