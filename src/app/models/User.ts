import DateTimeFormat = Intl.DateTimeFormat;

export class User {
  role: string;
  dob: DateTimeFormat;
  email: string;
  enrolledSections: [string];
  firstName: string;
  lastName: string;
  phone: number;
  username: string;
  _id: string;
  password?: string;
  confirmPassword?: string;
}
