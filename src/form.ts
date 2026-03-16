export type FieldType =
  | "text"
  | "textarea"
  | "date"
  | "select"
  | "multiselect"
  | "number"
  | "image"
  | "imageSelect";

export interface FormField {
  slug: string;
  label: string;
  value: string | string[] | number | null;
  fieldType: FieldType;
  required: boolean;
  options?: { label: string; value: string; audioUrl?: string; imageUrl?: string }[];
  min?: number;
  max?: number;
  allowCustomValue?: boolean;
  optionsEndpoint?: string;
}
