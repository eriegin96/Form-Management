import { Box, Button, Title } from '@mantine/core';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { defaultExperience } from '../../constants/form';
import RHFTextField from './fields/RHFTextField';
import Projects from './Projects';

export default function Experiences() {
	const { control } = useFormContext();
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'experiences',
	});

	return (
		<Box>
			<Title order={3}>Experiences</Title>
			{fields.map((field, experienceIdx) => (
				<Box key={field.id}>
					<RHFTextField
						name={`experiences.${experienceIdx}.company`}
						label='Company'
						placeholder='ABC Co.'
						control={control}
					/>
					<Projects experienceIdx={experienceIdx} />

					<Button
						color='red'
						onClick={() => {
							remove(experienceIdx);
						}}
					>
						X Experience
					</Button>
				</Box>
			))}
			<Button onClick={() => append(defaultExperience)}>Add Experience</Button>
		</Box>
	);
}
