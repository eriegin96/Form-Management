import * as Yup from 'yup';

export const languageSchema = Yup.object().shape({
	language: Yup.string().required('Language is required'),
	level: Yup.string().required('Level is required'),
});

export const projectSchema = Yup.object().shape({
	projectName: Yup.string().required('Project name is required'),
	detail: Yup.string().required('Detail is required'),
});

export const experienceSchema = Yup.object().shape({
	company: Yup.string().required('Company is required'),
	projects: Yup.array().of(projectSchema),
});

export const formSchema = Yup.object().shape({
	name: Yup.string().required('Name is required').min(2, 'Min is 2'),
	languages: Yup.array().of(languageSchema),
	experiences: Yup.array().of(experienceSchema),
});
