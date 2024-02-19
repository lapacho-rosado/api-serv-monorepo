import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('TAX_SERVICE') private clientTax: ClientProxy,
  ) {}

  getHello(): string {
    return 'Servicio PRINCIPAL';
  }

  newFamilia(familia: any) {
    this.clientTax.emit('new_familia', familia);
    return 'send_queue';
  }
}
