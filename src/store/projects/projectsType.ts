interface IProjectsTags {
  _id: string;
  tag: string;
  desc: string;
}

export interface IProjectsContent {
  language: string;
  title: string;
  slogan: string;
  description: string;
  goals: IProjectsTags[];
  criteria: IProjectsTags[];
}

export interface IProject {
  _id: string;
  translations: IProjectsContent[];
  imgCover: string;
  publisher: boolean;
  published_date: string;
  updated_date: string;
}

export interface IProjectsState {
  projects: IProject[];
  loading: boolean | null;
  message: string | null;
}

export interface IProjectsError {
  message: string;
}
