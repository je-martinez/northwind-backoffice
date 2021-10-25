export class ILogin{
  Email       :string;
  Password    :string;

  constructor(newItem?:ILogin){
    this.Email = newItem?.Email ?? '';
    this.Password = newItem?.Password ?? '';
  }

}