import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  empId?: IntNullableFilter;
  salary?: FloatNullableFilter;
  empName?: StringNullableFilter;
};
