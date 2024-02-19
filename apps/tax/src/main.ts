import { NestFactory } from '@nestjs/core';
import { TaxModule } from './tax.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(TaxModule);
  // await app.listen(3001);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TaxModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();

}
bootstrap();
