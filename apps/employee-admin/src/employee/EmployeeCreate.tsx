import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="emp_id" source="empId" />
        <NumberInput label="salary" source="salary" />
        <TextInput label="emp_name" source="empName" />
      </SimpleForm>
    </Create>
  );
};
