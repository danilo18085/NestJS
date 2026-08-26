import { Test, TestingModule } from '@nestjs/testing';
import { IgricaService } from './igrica.service';

describe('IgricaService', () => {
  let service: IgricaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IgricaService],
    }).compile();

    service = module.get<IgricaService>(IgricaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
