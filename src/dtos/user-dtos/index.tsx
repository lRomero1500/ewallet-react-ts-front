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
  genderId: number;
  identificationNumber: string;
  docTypeId: number;
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
