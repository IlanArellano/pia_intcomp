import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { CONTACT_FIELDS } from "../../constants/index";
import type { ContactField } from "../../types/store";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const RenderField = (
  field: ContactField & {
    value: string;
    onChange: (key: string, newValue: string) => void;
  }
) => {
  const placeholder = field.required ? `${field.field}*` : field.field;
  if (field.options) {
    return (
      <Dropdown
        value={field.value}
        placeholder={placeholder}
        onChange={(e) => field.onChange(field.key, e.value)}
      />
    );
  }
  if (field.multiple)
    return (
      <InputTextarea
        placeholder={placeholder}
        onChange={(e) => field.onChange(field.key, e.value)}
      />
    );
  return (
    <InputText
      placeholder={placeholder}
      onChange={(e) => field.onChange(field.key, e.value)}
    />
  );
};

export default function ContactForm() {
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const onChange = (key: string, newValue: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const onSubmit = (e: Event) => {
    e.preventDefault();
    console.log("event");
  };

  return (
    <form
      id="contact-form"
      className="flex flex-col justify-evenly h-full"
      onSubmit={onSubmit}
    >
      {CONTACT_FIELDS.map((field) => {
        return (
          <RenderField
            {...field}
            value={values[field.key]}
            onChange={onChange}
          />
        );
      })}
      <Button>Agendar Cita</Button>
    </form>
  );
}
