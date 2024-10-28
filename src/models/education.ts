import { ResumeItem } from './common';

export interface EducationItem extends ResumeItem {
  name: string;
  startDate: string;
  endDate?: string;
  degree: string;
}