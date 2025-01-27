import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  InputNumber,
  Select,
  Checkbox,
  Radio,
  Upload,
  Form,
  Button,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export interface Field {
  name: string;
  label?: string;
  type:
    | "text"
    | "email"
    | "number"
    | "select"
    | "checkbox"
    | "radio"
    | "file"
    | "button"
    | "password"
    | "phone"; // Add phone type
  required?:
    | {
        value: boolean;
        message: string;
      }
    | boolean;
  options?: { label: string; value: any }[];
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?:
    | {
        value: number;
        message: string;
      }
    | number;
  maxLength?:
    | {
        value: number;
        message: string;
      }
    | number;
  placeholder: string;
  btnClass?: boolean;
}

const { Option } = Select;

export interface DynamicFormProps {
  fields: Field[];
  onSubmit: (data: FormValues) => void;
  onCancel?: () => void;
  loading?: boolean;
  btn: DynamicButton;
  initialData?: FormValues;
  isEdit?: boolean;
}

interface DynamicButton {
  label: string | React.ReactNode;
  disabled?: boolean;
  clazz: string;
  clazzParent?: string;
  cancelClazz?: boolean;
  onCancel?: boolean;
}

export interface FormValues {
  [key: string]: string | number | boolean | undefined | any;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  onSubmit,
  loading,
  onCancel,
  btn,
  initialData = null,
  isEdit = false,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({});

  useEffect(() => {
    if (isEdit && initialData) {
      reset(initialData);
    } else {
      reset();
    }
  }, [isEdit, initialData, reset, onCancel]);

  const handleCancelClick = () => {
    if (onCancel) {
      reset();
      onCancel();
    }
  };

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      layout="vertical"
      className="min-w-[400px] mx-auto flex flex-col gap-y-3 mt-10"
    >
      {fields?.map((field, index) => (
        <Form.Item
          key={index}
          label={field?.label}
          validateStatus={errors[field?.name] ? "error" : ""}
          //@ts-ignore
          help={errors[field?.name]?.message}
        >
          <Controller
            name={field?.name}
            control={control}
            rules={{
              required: field?.required ? field?.required : false,
              pattern: field?.pattern,
              minLength: field?.minLength,
              maxLength: field?.maxLength,
            }}
            render={({ field: controllerField }) => {
              switch (field?.type) {
                case "text":
                case "email":
                  return (
                    <Input
                      {...controllerField}
                      type={field?.type}
                      placeholder={field?.placeholder}
                    />
                  );
                case "password":
                  return (
                    <Input.Password
                      {...controllerField}
                      type={field?.type}
                      placeholder={field?.placeholder}
                    />
                  );
                case "number":
                  return (
                    <InputNumber
                      {...controllerField}
                      style={{ width: "100%" }}
                      placeholder={field?.placeholder}
                    />
                  );
                case "select":
                  return (
                    <Select
                      {...controllerField}
                      placeholder={field?.placeholder}
                      allowClear
                    >
                      {field?.options?.map((option) => (
                        <Option key={option?.value} value={option?.value}>
                          {option?.label}
                        </Option>
                      ))}
                    </Select>
                  );
                case "checkbox":
                  return (
                    <Checkbox
                      {...controllerField}
                      checked={controllerField?.value}
                    >
                      {field?.label}
                    </Checkbox>
                  );
                case "radio":
                  return (
                    <Radio.Group {...controllerField}>
                      {field?.options?.map((option) => (
                        <Radio key={option?.value} value={option?.value}>
                          {option?.label}
                        </Radio>
                      ))}
                    </Radio.Group>
                  );
                case "file":
                  return (
                    <Upload
                      {...controllerField}
                      beforeUpload={() => false}
                      maxCount={1}
                      onChange={(info) => controllerField.onChange(info?.file)}
                    >
                      <Button icon={<UploadOutlined />}>Fayl yuklash</Button>
                    </Upload>
                  );
                case "phone":
                  return (
                    <PhoneInput
                      className="phone-input w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      defaultCountry={"UZ"}
                      limitMaxLength={true}
                      {...controllerField}
                      value={controllerField?.value} // Bind the value
                      onChange={controllerField.onChange} // Bind the onChange function
                      placeholder={field?.placeholder}
                    />
                  );
                default:
                  return (
                    <Input
                      {...controllerField}
                      placeholder={field?.placeholder}
                    />
                  );
              }
            }}
          />
        </Form.Item>
      ))}

      <Form.Item>
        <div className={btn?.clazzParent}>
          {btn?.cancelClazz && (
            <Button
              type="default"
              onClick={handleCancelClick}
              className={btn?.clazz}
            >
              Bekor qilish
            </Button>
          )}

          <Button loading={loading} type="primary" htmlType="submit" className={btn?.clazz}>
            {btn?.label || "Yuborish"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;