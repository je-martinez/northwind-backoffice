export class IRegister{
  FirstName:string;
  LastName:string;
  Email:string;
  Password:string;
  Phone:string;

  constructor(newItem?:IRegister){
    this.FirstName = newItem?.FirstName ?? '';
    this.LastName = newItem?.LastName ?? '';
    this.Email = newItem?.Email ?? '';
    this.Password = newItem?.Password ?? '';
    this.Phone = newItem?.Phone ?? ''; 
  }
}