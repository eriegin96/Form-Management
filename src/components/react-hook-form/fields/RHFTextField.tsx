import { TextInput } from '@mantine/core';
import React from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';

export interface RHFTextFieldProps {
	name: string;
	label: string;
	placeholder: string;
	value?: string;
	control: Control<FieldValues>;
}

export default function RHFTextField({ name, label, placeholder, control }: RHFTextFieldProps) {
	const {
		field: { onChange, onBlur, value },
		fieldState: { isTouched, error },
	} = useController({
		name,
		control,
	});

	return (
		<TextInput
			name={name}
			label={label}
			placeholder={placeholder}
			value={value}
			required
			onChange={onChange}
			onBlur={onBlur}
			error={isTouched && error?.message}
		/>
	);
}
