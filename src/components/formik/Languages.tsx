import React from 'react';
import { Box, Button, Group, Title } from '@mantine/core';
import { FieldArray, useFormikContext } from 'formik';
import { defaultLanguage, IDefaultForm, ILanguage } from '../../constants/form';
import FormikTextField from './fields/FormikTextField';

export default function Languages() {
	const { values } = useFormikContext<IDefaultForm>();

	return (
		<Box>
			<FieldArray name='languages'>
				{({ remove: removeLanguage, push: pushLanguage }) => (
					<Box>
						<Title order={3}>Languages</Title>
						{values.languages.map((language: ILanguage, langIdx: number) => (
							<Group key={langIdx}>
								<FormikTextField
									name={`languages.${langIdx}.language`}
									label='Language'
									placeholder='English'
									value={language.language}
								/>
								<FormikTextField
									name={`languages.${langIdx}.level`}
									label='Level'
									placeholder='1'
									value={language.level}
								/>

								<Button
									color='red'
									onClick={() => {
										removeLanguage(langIdx);
									}}
								>
									X Language
								</Button>
							</Group>
						))}
						<Button onClick={() => pushLanguage(defaultLanguage)}>Add Language</Button>
					</Box>
				)}
			</FieldArray>
		</Box>
	);
}
