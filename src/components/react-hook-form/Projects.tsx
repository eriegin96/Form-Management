import { Box, Button, Group } from '@mantine/core';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { defaultProject } from '../../constants/form';
import RHFTextField from './fields/RHFTextField';

export interface ProjectsProps {
	experienceIdx: number;
}

export default function Projects({ experienceIdx }: ProjectsProps) {
	const { control } = useFormContext();
	const { fields, append, remove } = useFieldArray({
		control,
		name: `experiences.${experienceIdx}.projects`,
	});

	return (
		<Box ml={40}>
			{fields.map((field, projectIdx) => (
				<Group key={field.id}>
					<RHFTextField
						name={`experiences.${experienceIdx}.projects.${projectIdx}.projectName`}
						label='Project Name'
						placeholder='ABC Proj'
						control={control}
					/>
					<RHFTextField
						name={`experiences.${experienceIdx}.projects.${projectIdx}.detail`}
						label='Detail'
						placeholder='Bla bla'
						control={control}
					/>

					<Button
						color='red'
						onClick={() => {
							remove(projectIdx);
						}}
					>
						X Project
					</Button>
				</Group>
			))}
			<Button
				onClick={() => {
					append(defaultProject);
				}}
			>
				Add Project
			</Button>
		</Box>
	);
}
