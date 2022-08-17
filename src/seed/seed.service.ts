import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
 
  private readonly axios : AxiosInstance = axios;

  async execute() {
    const { data } = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=400')
    data.results.forEach( ({name, url}) => {
      const no:number = +url.split('/')[url.split('/').length - 2];
      
    })
    return data.results;
    return `seed executed`;
  }

  
}
