import { ResumeItem } from './common';

export interface ActivitiesItem extends ResumeItem {
  name: string;
  startDate: string;
  endDate?: string;
  accomplishments: string[];
}