import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "empName";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.empName?.toString() || String(record.id);
};
