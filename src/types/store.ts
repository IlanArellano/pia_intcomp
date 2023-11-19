export interface StoreInformation {
  field: string;
  value: string;
  type: "text" | "link";
  link?: string;
}

export type ContactFiledType =
  | "text"
  | "text-multiple"
  | "options"
  | "calendar";

export interface ContactField {
  keyname: string;
  field: string;
  type: ContactFiledType;
  initialValue?: string;
  options?: string[];
  required?: boolean;
}
