export interface PartCategories{
  categories: PartCategory[]
  version: string,
  lastUpdate: string,
}
export interface PartCategory {
  id: number;
  name: string;
  description?: string;
  template?: string;
  fields: PartCategoryField[];
}

export interface PartCategoryField {
  name: string;
  description?: string;
  label: string;
  value: string;
  type: string;
  placeholder?: string;
  settings?: PartCategoryFieldSettings;
  options?: string|Record<string,1>;
  required: boolean;
  validators: PartCategoryFieldValidators;
}

interface PartCategoryFieldValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
interface PartCategoryFieldSettings {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
