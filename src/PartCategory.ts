export interface PartCategory {
  id: number;
  name: string;
  description?: string;
  fields: PartCategoryField[];
}

export type PartCategoryField = {
  name: string;
  description?: string;
  placeholder?: string;
  type: PartCategoryFieldType;
  options?: string[];
  value?: string;
  mask?: string;
};

export enum PartCategoryFieldType {
  freeText,
  dropDown,
  formatText,
  fixedValue
};
