export interface IProjectsTags {
  _id: string;
  tag: string;
  desc: string;
}
export interface IProjectsImplementation {
  _id: string;
  top_desc: string;
  items: IProjectsTags[];
  bottom_desc: string;
}

export interface IProjectsContent {
  language: string;
  title: string;
  slogan: string;
  description: string;
  goals: IProjectsTags[];
  criteria: IProjectsTags[];
  implementation?: IProjectsImplementation[];
}

export interface IProject {
  _id: string;
  url: string;
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
  selectedUrl?: string | undefined;
}

export interface IProjectsError {
  message: string;
}
