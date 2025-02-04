import { FloatButton } from "antd";

import {
  CommentOutlined,
  CustomerServiceOutlined,
  // TwitterOutlined,
  // InstagramOutlined,
  // WhatsAppOutlined,
  // SendOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const SocialMediaButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <FloatButton.Group
        className="custom-float-btn-group"
        open={open}
        trigger="click"
        style={{ insetInlineEnd: 24, bottom: 24 }}
        onClick={() => setOpen(!open)}
        icon={<CustomerServiceOutlined />}
      >
       
       
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
