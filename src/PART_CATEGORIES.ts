import { PartCategory, PartCategoryFieldType } from "./PartCategory";

export const PART_CATEGORIES: PartCategory[] = [{
    id: 0,
    name: 'PLC CPU',
    fields: [
      {
        name: "MPN",
        description: "Manufacturer's Part Number",
        type: PartCategoryFieldType.freeText
      },
      {
        name: "Category",
        type: PartCategoryFieldType.fixedValue,
        value: "PLC CPU"
      },
    ]
}];
