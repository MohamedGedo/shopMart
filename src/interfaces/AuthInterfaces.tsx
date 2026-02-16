export interface SuccessLoginInterface {
  message: string;
  user: UserInterface;
  token: string;
}
export interface FailedLoginInterface {
  message: string;
  statusMsg: string;
}

export interface UserInterface {
  name: string;
  email: string;
  role: string;
}
