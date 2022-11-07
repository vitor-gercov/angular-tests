import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  constructor() { }

  generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw new Error('Nenhum prefixo informado.')
    }
    return prefix + '-1234'
  }
}
