import React from "react"
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  message,
  Select,
} from "antd"

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography
const { TextArea } = Input
const { Option } = Select

const PRIMARY_COLOR = "#166534E6"

// Filiallar ro‘yxati
const branches = [
  { name: "Chilonzor", address: "Toshkent, Chilonzor, 15-maktab", phone: "+998 90 111 11 11" },
  { name: "Yunusobod", address: "Toshkent, Yunusobod, 23-maktab", phone: "+998 90 222 22 22" },
  { name: "Sergeli", address: "Toshkent, Sergeli, 34-maktab", phone: "+998 90 333 33 33" },
]

const AdmissionPage: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log("Yuborilgan ma'lumotlar:", values)
    message.success("Ariza yuborildi!")
    form.resetFields()
  }

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f4f1" }}>
      <Header style={{ backgroundColor: PRIMARY_COLOR, padding: "1.5rem", textAlign: "center" }}>
        <Title level={2} style={{ color: "#fff", margin: 0 }}>
          📚 Maktab Qabul Bo‘limi
        </Title>
      </Header>

      <Content style={{ padding: "3rem 1rem", maxWidth: 1200, margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          {/* Qabul haqida va Filiallar */}
          <Col xs={24} md={12}>
            <Card
              title={<Text strong style={{ color: PRIMARY_COLOR }}>📌 Qabul haqida</Text>}
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                border: `1px solid ${PRIMARY_COLOR}22`,
              }}
            >
              <Paragraph>
                Maktabimizda bir nechta filiallar faoliyat yuritadi. Har bir filial o‘z hududiga
                xizmat qiladi. Arizani to‘ldirishda o‘zingizga qulay filialni tanlang.
              </Paragraph>
              <Paragraph>
                Arizalar iyun–avgust oylarida qabul qilinadi. Administrator siz bilan bog‘lanadi.
              </Paragraph>
            </Card>

            <Card
              title={<Text strong style={{ color: PRIMARY_COLOR }}>🏫 Filiallar</Text>}
              style={{
                marginTop: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                border: `1px solid ${PRIMARY_COLOR}22`,
              }}
            >
              {branches.map((branch, idx) => (
                <div key={idx} style={{ marginBottom: "1rem" }}>
                  <Paragraph><strong>{branch.name}:</strong></Paragraph>
                  <Paragraph style={{ marginBottom: 4 }}>📍 {branch.address}</Paragraph>
                  <Paragraph>📞 {branch.phone}</Paragraph>
                </div>
              ))}
            </Card>
          </Col>

          {/* Forma */}
          <Col xs={24} md={12}>
            <Card
              title={<Text strong style={{ color: PRIMARY_COLOR }}>📝 Ariza topshirish</Text>}
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                border: `1px solid ${PRIMARY_COLOR}55`,
              }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark="optional"
              >
                <Form.Item
                  name="firstName"
                  label="Ism"
                  rules={[{ required: true, message: "Ismni kiriting" }]}
                >
                  <Input placeholder="Ismingiz" size="large" />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label="Familiya"
                  rules={[{ required: true, message: "Familiyani kiriting" }]}
                >
                  <Input placeholder="Familiyangiz" size="large" />
                </Form.Item>

                <Form.Item
                  name="grade"
                  label="Sinf"
                  rules={[{ required: true, message: "Sinfni kiriting" }]}
                >
                  <Input placeholder="Masalan: 5-sinf" size="large" />
                </Form.Item>

                <Form.Item
                  name="branch"
                  label="Filial"
                  rules={[{ required: true, message: "Filialni tanlang" }]}
                >
                  <Select placeholder="Filialni tanlang" size="large">
                    {branches.map((b) => (
                      <Option key={b.name} value={b.name}>
                        {b.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Telefon raqami"
                  rules={[{ required: true, message: "Telefon raqamingizni kiriting" }]}
                >
                  <Input placeholder="+998 XX XXX XX XX" size="large" />
                </Form.Item>

                <Form.Item
                  name="comment"
                  label="Izoh"
                >
                  <TextArea rows={4} placeholder="Qo‘shimcha izoh (ixtiyoriy)" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    style={{ backgroundColor: PRIMARY_COLOR, borderColor: PRIMARY_COLOR }}
                  >
                    Yuborish
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#e6f4ea",
          padding: "1rem",
          marginTop: "3rem",
          color: PRIMARY_COLOR,
        }}
      >
        © {new Date().getFullYear()} Maktab Qabul Bo‘limi. Barcha huquqlar himoyalangan.
      </Footer>
    </Layout>
  )
}

export default AdmissionPage
