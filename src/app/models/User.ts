import DateTimeFormat = Intl.DateTimeFormat;

export class User {
  dob: DateTimeFormat;
  email: string;
  enrolledSections: [string];
  firstName: string;
  lastName: string;
  phone: number;
  username: string;
  _id: string;
}
