import { Injectable } from '@nestjs/common';

@Injectable()
export class TaxService {
  getHello(): string {
    return 'Servicio de TAX';
  }

  createFamilia(data: any): string {
    return 'Familia creada: ' + data;
  }
}
