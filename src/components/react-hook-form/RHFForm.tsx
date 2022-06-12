import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { defaultForm, IDefaultForm } from '../../constants/form';
import { yupResolver } from '@hookform/resolvers/yup';
import Name from './Name';
import { formSchema } from '../../schemas';
import { Button, Space } from '@mantine/core';
import Languages from './Languages';
import Experiences from './Experiences';

export default function ReactHookFormForm() {
	const methods = useForm({
		mode: 'onBlur',
		reValidateMode: 'onSubmit',
		defaultValues: defaultForm,
		resolver: yupResolver(formSchema),
	});
	const {
		getValues,
		formState: { errors, touchedFields },
	} = methods;
	const onSubmit = (data: IDefaultForm) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Name />
				<Space h={10} />
				<Languages />
				<Space h={10} />
				<Experiences />

				<Button
					type='submit'
					onClick={() => {
						console.log(errors, touchedFields, getValues());
					}}
				>
					Submit
				</Button>
			</form>
		</FormProvider>
	);
}
