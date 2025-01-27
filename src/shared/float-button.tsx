import { FloatButton } from "antd";
import { CommentOutlined, CustomerServiceOutlined, TwitterOutlined, InstagramOutlined, WhatsAppOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react";

const SocialMediaButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* <Switch onChange={setOpen} checked={open} style={{ margin: 16 }} /> */}
      <FloatButton.Group
        open={open}
        trigger="click"
        style={{ insetInlineEnd: 24 }}
        onClick={() => setOpen(!open)}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton icon={<TwitterOutlined />} />
        <FloatButton icon={<SendOutlined />} /> {/* Telegram */}
        <FloatButton icon={<WhatsAppOutlined />} />
        <FloatButton icon={<InstagramOutlined />} />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </>
  );
};

export default SocialMediaButton;
