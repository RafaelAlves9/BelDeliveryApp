import * as superstruct from "superstruct";

export const EmployeeResponse = superstruct.object({
  addressId: superstruct.number(),
  street: superstruct.string(),
  zipCode: superstruct.string(),
  state: superstruct.string(),
  city: superstruct.string(),
  district: superstruct.string(),
  country: superstruct.string(),
  number: superstruct.string(),
  complement: superstruct.string(),
});

export const EmployeeListResponse = superstruct.object({
  employeeId: superstruct.string(),
  employeeFullName: superstruct.string(),
  active: superstruct.boolean()
});

export const EmployeeApiResponse = superstruct.object({
  result: superstruct.array(EmployeeListResponse),
  currentPage: superstruct.number(),
  totalPages: superstruct.number(),
  pageSize: superstruct.number(),
  totalCount: superstruct.number(),
});

export type TEmployeeSchemaResponse = superstruct.Infer<typeof EmployeeResponse>;
export type TEmployeeSchemaListResponse = superstruct.Infer<typeof EmployeeListResponse>;
export type TEmployeeSchemaApiResponse = superstruct.Infer<typeof EmployeeApiResponse>;