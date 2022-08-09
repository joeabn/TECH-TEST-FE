import { Timestamp } from 'rxjs';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  isActive: boolean;
  createdAt: Timestamp<number>;
  dateOfBirth: Timestamp<number>;
  endDate: Timestamp<number>;
  startDate: Timestamp<number>;
}
