import { ResumeItem } from './common';

export interface ProjectsItem extends ResumeItem {
  name: string;
  url: string;
  github: string;
  features: string[];
}
