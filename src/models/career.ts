import { ResumeItem } from './common';

export interface ResponsibilityItem {
  description: string;
  accomplishments?: string[];
}

export interface RoleItem {
  title: string;
  startDate: string;
  endDate?: string;
  hideAccomplishmentsFromPrintResume?: boolean;
  responsibilities: ResponsibilityItem[];
}

export interface CareerHistoryItem extends ResumeItem {
  company: string;
  location: string;
  roles: RoleItem[];
}
