import { Test, TestingModule } from '@nestjs/testing';
import { TaxController } from './tax.controller';
import { TaxService } from './tax.service';

describe('TaxController', () => {
  let taxController: TaxController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaxController],
      providers: [TaxService],
    }).compile();

    taxController = app.get<TaxController>(TaxController);
  });

  describe('root', () => {
    // it('should return "Hello World!"', () => {
    //   expect(taxController.getHello()).toBe('Hello World!');
    // });
  });
});
