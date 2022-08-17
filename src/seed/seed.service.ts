import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
 

  constructor(
    private readonly pokemonService : PokemonService,
    private readonly http : AxiosAdapter 
  ) {}

  async execute() {
    this.pokemonService.deleteAll();
    const data  = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=400');
    const pokemonToInsert: {name: string, no: number}[] = data.results.map(({name, url}) => ({name, no: +url.split('/')[url.split('/').length - 2]}));
    this.pokemonService.insertAll(pokemonToInsert);
    return `seed executed`;
  }

  
}
