import {Trainer} from "./Trainer";

export interface Training{
  "name": string,
  "description": string,
  "price": number,
  "duration": number
  "trainers": Trainer[]
}
