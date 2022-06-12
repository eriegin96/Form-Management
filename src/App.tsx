import React from 'react';
import { Center } from '@mantine/core';
import FormikForm from './components/formik/FormikForm';
import ReactHookFormForm from './components/react-hook-form/RHFForm';

function App() {
	return (
		<Center>
			<FormikForm />
			<ReactHookFormForm />
		</Center>
	);
}

export default App;
