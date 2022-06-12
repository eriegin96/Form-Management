import { TextInput } from '@mantine/core';
import { Field, getIn, useFormikContext } from 'formik';
import React from 'react';
import { IDefaultForm } from '../../../constants/form';

export interface FormikTextFieldProps {
	name: string;
	label: string;
	placeholder: string;
	value: string;
}

export default function FormikTextField({ name, label, placeholder, value }: FormikTextFieldProps) {
	const { touched, errors, setFieldValue, setFieldTouched } = useFormikContext<IDefaultForm>();

	return (
		<Field
			component={TextInput}
			name={name}
			label={label}
			placeholder={placeholder}
			defaultValue={value}
			required
			error={getIn(touched, name) && getIn(errors, name)}
			onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
				setFieldValue(name, e.currentTarget.value);
				setFieldTouched(name, true, true);
			}}
		/>
	);
}
