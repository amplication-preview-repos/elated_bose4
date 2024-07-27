import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="emp_id" source="empId" />
        <NumberInput label="salary" source="salary" />
        <TextInput label="emp_name" source="empName" />
      </SimpleForm>
    </Edit>
  );
};
