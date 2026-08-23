import { Test, TestingModule } from '@nestjs/testing';
import { MojServisService } from './moj_servis.service';

describe('MojServisService', () => {
  let service: MojServisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MojServisService],
    }).compile();

    service = module.get<MojServisService>(MojServisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
