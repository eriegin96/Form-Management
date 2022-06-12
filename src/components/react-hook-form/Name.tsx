import { Box } from '@mantine/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import RHFTextField from './fields/RHFTextField';

export default function Name() {
	const { control } = useFormContext();

	return (
		<Box>
			<RHFTextField name='name' label='Name' placeholder='John' control={control} />
		</Box>
	);
}
