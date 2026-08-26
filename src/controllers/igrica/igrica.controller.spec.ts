import { Test, TestingModule } from '@nestjs/testing';
import { IgricaController } from './igrica.controller';

describe('IgricaController', () => {
  let controller: IgricaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IgricaController],
    }).compile();

    controller = module.get<IgricaController>(IgricaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
