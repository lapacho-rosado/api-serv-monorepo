import { Controller, Get } from '@nestjs/common';
import { TaxService } from './tax.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  // @Get()
  // getHello(): string {
  //   return this.taxService.getHello();
  // }

  @EventPattern('new_familia')
  async handleFamiliaCreated(data: any) {
    console.log('Este es el evento entrante para el creado de familia', data);
    return this.taxService.createFamilia(data);
  }  
}
