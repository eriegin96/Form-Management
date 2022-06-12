import React from 'react';
import { Box } from '@mantine/core';
import FormikTextField from './fields/FormikTextField';
import { useFormikContext } from 'formik';
import { IDefaultForm } from '../../constants/form';

export default function Name() {
	const { values } = useFormikContext<IDefaultForm>();

	return (
		<Box>
			<FormikTextField name='name' label='Name' placeholder='John' value={values.name} />
		</Box>
	);
}
