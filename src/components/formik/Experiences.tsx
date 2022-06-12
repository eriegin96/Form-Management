import React from 'react';
import { Box, Button, Title } from '@mantine/core';
import { FieldArray, useFormikContext } from 'formik';
import { defaultExperience, IDefaultForm } from '../../constants/form';
import FormikTextField from './fields/FormikTextField';
import Projects from './Projects';

export default function Experiences() {
	const { values } = useFormikContext<IDefaultForm>();

	return (
		<Box>
			<FieldArray name='experiences'>
				{({ remove: removeExperience, push: pushExperience }) => (
					<Box>
						<Title order={3}>Experiences</Title>
						{values.experiences.map((experience, expIdx) => (
							<Box key={expIdx}>
								<FormikTextField
									name={`experiences.${expIdx}.company`}
									label='Company'
									placeholder='ABC Co.'
									value={experience.company}
								/>
								<Projects expIdx={expIdx} />

								<Button
									color='red'
									onClick={() => {
										removeExperience(expIdx);
									}}
								>
									X Experience
								</Button>
							</Box>
						))}
						<Button onClick={() => pushExperience(defaultExperience)}>Add Experience</Button>
					</Box>
				)}
			</FieldArray>
		</Box>
	);
}
