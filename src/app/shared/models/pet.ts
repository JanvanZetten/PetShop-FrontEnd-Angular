import {Owner} from './owner';

export class Pet{
  id: number;
  name: string;
  type: Type;
  birthday: Date;
  price: number;
  previousOwner?: Owner;
}
