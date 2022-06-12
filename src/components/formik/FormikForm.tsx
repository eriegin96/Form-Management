import React from 'react';
import { Button, Space } from '@mantine/core';
import { Form, Formik } from 'formik';
import { defaultForm } from '../../constants/form';
import { formSchema } from '../../schemas';
import Experiences from './Experiences';
import Languages from './Languages';
import Name from './Name';

export default function FormikForm() {
	return (
		<Formik
			initialValues={defaultForm}
			validationSchema={formSchema}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ values, errors, touched }) => (
				<Form>
					<Name />
					<Space h={20} />
					<Languages />
					<Space h={20} />
					<Experiences />

					<Button
						type='submit'
						onClick={() => {
							console.log({ values, errors, touched });
						}}
					>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	);
}
