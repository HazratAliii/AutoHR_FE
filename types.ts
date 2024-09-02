export interface UserSignUp {
  first_name: String;
  last_name: String;
  gmail: String;
  password: String;
}

export interface UserSignIn {
  gmail: String;
  password: String;
}

export interface teamType {
  user_id: string;
  name: string;
  members: [string];
}
