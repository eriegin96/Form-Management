import { Box, Button, Group } from '@mantine/core';
import { FieldArray, useFormikContext } from 'formik';
import React from 'react';
import { defaultProject, IDefaultForm } from '../../constants/form';
import FormikTextField from './fields/FormikTextField';

export interface ProjectsProps {
	expIdx: number;
}

export default function Projects({ expIdx }: ProjectsProps) {
	const { values } = useFormikContext<IDefaultForm>();

	return (
		<FieldArray name={`experiences.${expIdx}.projects`}>
			{({ remove: removeProject, push: pushProject }) => (
				<Box ml={40}>
					{values.experiences[expIdx].projects.map((project, projectIdx) => (
						<Group key={projectIdx}>
							<FormikTextField
								label='Project Name'
								name={`experiences.${expIdx}.projects.${projectIdx}.projectName`}
								value={project.projectName}
								placeholder='ABC Proj'
							/>
							<FormikTextField
								label='Detail'
								name={`experiences.${expIdx}.projects.${projectIdx}.detail`}
								value={project.detail}
								placeholder='Bla bla...'
							/>

							<Button color='red' onClick={() => removeProject(projectIdx)}>
								X Project
							</Button>
						</Group>
					))}
					<Button
						onClick={() => {
							pushProject(defaultProject);
						}}
					>
						Add Project
					</Button>
				</Box>
			)}
		</FieldArray>
	);
}
