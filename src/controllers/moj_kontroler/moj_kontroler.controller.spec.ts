import { Test, TestingModule } from '@nestjs/testing';
import { MojKontrolerController } from './moj_kontroler.controller';

describe('MojKontrolerController', () => {
  let controller: MojKontrolerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MojKontrolerController],
    }).compile();

    controller = module.get<MojKontrolerController>(MojKontrolerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
