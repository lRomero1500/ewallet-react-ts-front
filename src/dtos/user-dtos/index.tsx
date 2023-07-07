export type SignInDTO = {
  email: string;
  password: string;
};
export type UserProfileDTO = {
  id: string;
  person: PersonDTO;
  roles: RoleDTO[];
  token: string;
  expires_at: Date;
};
export type PersonDTO = {
  id: string;
  name: string;
  lastName: string;
  genderId: string;
  identificationNumber: string;
  docTypeId: string;
  phoneNumber: string;
  email: string;
};
export type RoleDTO = {
  role: string;
  permissions: PermissionDTO[];
};
export type PermissionDTO = {
  permission: string;
};
export type UserDTO = {
  id: string;
  password: string;
  statusId: string;
};
export type EnrollmentDTO = {
  person: PersonDTO;
  user: UserDTO;
};
export type SingUpDTO = {
  person_id: string;
  name: string;
  lastName: string;
  genderId: string;
  identificationNumber: string;
  docTypeId: string;
  phoneNumber: string;
  email: string;
  user_id: string;
  password: string;
  passwordConfirm: string;
  statusId: string;
};
