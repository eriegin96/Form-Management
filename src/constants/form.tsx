export interface ILanguage {
	language: string;
	level: string;
}

export interface IProject {
	projectName: string;
	detail: string;
}

export interface IExperience {
	company: string;
	projects: Array<IProject>;
}

export interface IDefaultForm {
	name: string;
	languages: Array<ILanguage>;
	experiences: Array<IExperience>;
}

export const defaultLanguage: ILanguage = {
	language: '',
	level: '',
};

export const defaultProject: IProject = {
	projectName: '',
	detail: '',
};

export const defaultExperience: IExperience = {
	company: '',
	projects: [defaultProject],
};

export const defaultForm: IDefaultForm = {
	name: '',
	languages: [defaultLanguage],
	experiences: [defaultExperience],
};
