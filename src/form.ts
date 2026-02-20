export type FieldType = "text" | "textarea" | "date" | "select" | "multiselect";

export interface FormField {
  slug: string;
  value: string | string[];
  fieldType: FieldType;
  required: boolean;
}
