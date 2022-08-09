import { Timestamp } from 'rxjs';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  isActive: boolean;
  createdAt: number;
  dateOfBirth: number;
  endDate: number;
  startDate: number;
}
