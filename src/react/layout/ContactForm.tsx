import React, { useState, type ComponentType, type FormEvent } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import { CONTACT_FIELDS } from "../../constants/index";
import type { ContactField, ContactFiledType } from "../../types/store";
import type { DropdownOptions } from "../../types";

import "primereact/resources/themes/lara-light-indigo/theme.css";

const RENDER_FIELDS: Record<ContactFiledType, ComponentType<any>> = {
  text: (props) => <InputText {...props} />,
  calendar: (props) => <Calendar {...props} />,
  options: (props) => <Dropdown {...props} />,
  "text-multiple": (props) => <InputTextarea {...props} />,
};

const RenderField = (
  field: ContactField & {
    value: string;
    onChange: (key: string, newValue: string) => void;
  }
) => {
  const placeholder = field.required ? `${field.field}*` : field.field;
  const Component = RENDER_FIELDS[field.type];
  const onChange = (e) =>
    field.onChange(field.keyname, e.value || e.target.value);
  const props = {
    placeholder,
    onChange,
    value: field.value,
    options:
      field.options &&
      field.options.map(
        (x, i) =>
          ({
            label: x,
            value: i,
          } as DropdownOptions<number>)
      ),
  };
  return <Component {...props} />;
};

export default function ContactForm() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const onChange = (key: string, newValue: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ values });
    setShowModal(true);
  };

  return (
    <>
      <Dialog
        header="Agendar Cita"
        visible={showModal}
        style={{ width: "50vw" }}
        onHide={() => setShowModal(false)}
      >
        <p className="m-0">Informacion enviada exitosamente!</p>
      </Dialog>
      <form
        id="contact-form"
        className="flex flex-col justify-evenly h-full"
        onSubmit={onSubmit}
      >
        {CONTACT_FIELDS.map((field) => {
          return (
            <RenderField
              {...field}
              value={values[field.keyname]}
              onChange={onChange}
            />
          );
        })}
        <button class="bg-nav-text-color text-nav text-2xl font-bold py-5">
          Agendar Cita
        </button>
      </form>
    </>
  );
}
