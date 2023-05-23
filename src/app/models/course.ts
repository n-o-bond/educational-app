import { Instructor } from './instructor';

export interface Course {
  id: number;
  title: string;
  description: string;
  //todo:
  // instructor?: Instructor;
  duration: string;
  //todo:
  startDate?: Date;
}
