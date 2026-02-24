export type FieldType =
  | "text"
  | "textarea"
  | "date"
  | "select"
  | "multiselect"
  | "number"
  | "image";

export interface FormField {
  slug: string;
  label: string;
  value: string | string[] | number | null;
  fieldType: FieldType;
  required: boolean;
  options?: { label: string; value: string; audioUrl?: string }[];
  min?: number;
  max?: number;
  allowCustomValue?: boolean;
}
