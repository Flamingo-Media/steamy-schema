export type FieldType =
  | "text"
  | "textarea"
  | "date"
  | "select"
  | "multiselect"
  | "number";

export interface FormField {
  slug: string;
  value: string | string[] | number | null;
  fieldType: FieldType;
  required: boolean;
  options?: { label: string; value: string }[];
}
