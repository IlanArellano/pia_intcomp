import { useMemo, useState, type ComponentType, type FormEvent } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { CONTACT_FIELDS, DISPLAY_FIELDS } from "../../constants";
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
  const [values, setValues] = useState<{ [key: string]: string }>(() =>
    CONTACT_FIELDS.reduce(
      (prev, field) => ({ ...prev, [field.keyname]: "" }),
      {}
    )
  );

  const onChange = (key: string, newValue: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const hasDisabled = useMemo(
    () =>
      Object.keys(values).some(
        (key) =>
          values[key] === null ||
          values[key] === undefined ||
          values[key] === ""
      ),
    [values]
  );

  return (
    <>
      <Dialog
        header={
          <>
            <p>Agendar Cita</p>
            <p>La cita fue agendada con éxito</p>
          </>
        }
        headerClassName="text-center"
        visible={showModal}
        className="w-screen md:w-[50vw]"
        contentClassName="p-10"
        onHide={() => setShowModal(false)}
      >
        {showModal &&
          Object.keys(values).map((key) => {
            const content = DISPLAY_FIELDS[key];
            const findContact = CONTACT_FIELDS.find((x) => x.keyname === key);
            if (!findContact || !content) return null;
            return (
              <pre key={key}>
                <p>
                  <b>{content.display}</b>:{" "}
                  {content.getValue({
                    ...findContact,
                    value: values[key],
                  })}
                </p>
              </pre>
            );
          })}
        <Button
          onClick={() => setShowModal(false)}
          className="bg-nav-text-color w-full text-nav text-2xl justify-center font-bold py-3"
        >
          Cerrar
        </Button>
      </Dialog>
      <form
        id="contact-form"
        className="flex flex-col justify-evenly h-full"
        onSubmit={onSubmit}
      >
        {CONTACT_FIELDS.map((field) => {
          return (
            <RenderField
              key={field.keyname}
              {...field}
              value={values[field.keyname]}
              onChange={onChange}
            />
          );
        })}
        <Button
          disabled={hasDisabled}
          className="bg-nav-text-color text-nav text-2xl justify-center font-bold py-5"
        >
          Agendar Cita
        </Button>
      </form>
    </>
  );
}
