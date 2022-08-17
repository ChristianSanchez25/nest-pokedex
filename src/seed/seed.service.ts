import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonService } from '../pokemon/pokemon.service';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
 
  private readonly axios : AxiosInstance = axios;

  constructor(
    private readonly pokemonService : PokemonService
  ) {}

  async execute() {
    this.pokemonService.deleteAll();
    const { data } = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=400');
    const pokemonToInsert: {name: string, no: number}[] = data.results.map(({name, url}) => ({name, no: +url.split('/')[url.split('/').length - 2]}));
    this.pokemonService.insertAll(pokemonToInsert);
    return `seed executed`;
  }

  
}
