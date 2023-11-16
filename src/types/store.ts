export interface StoreInformation {
  field: string;
  value: string;
  type: "text" | "link";
}

export interface ContactField {
  key: string;
  field: string;
  initialValue?: string;
  options?: string[];
  required?: boolean;
  multiple?: boolean;
}
