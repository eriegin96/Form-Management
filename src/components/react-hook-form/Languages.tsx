import { Box, Button, Group, Title } from '@mantine/core';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { defaultLanguage } from '../../constants/form';
import RHFTextField from './fields/RHFTextField';

export default function Languages() {
	const { control } = useFormContext();
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'languages',
	});

	return (
		<Box>
			<Title order={3}>Languages</Title>
			{fields.map((field, index) => (
				<Group key={field.id}>
					<RHFTextField
						name={`languages.${index}.language`}
						label='Language'
						placeholder='English'
						control={control}
					/>
					<RHFTextField
						name={`languages.${index}.level`}
						label='Level'
						placeholder='1'
						control={control}
					/>
					<Button
						color='red'
						onClick={() => {
							remove(index);
						}}
					>
						X Language
					</Button>
				</Group>
			))}
			<Button onClick={() => append(defaultLanguage)}>Add Language</Button>
		</Box>
	);
}
