export enum EGender {Male = 'Male', Female = 'Female'}

export interface IEntry {
  name: string;
  email: string;
  gender: EGender;
  age: number;
}
