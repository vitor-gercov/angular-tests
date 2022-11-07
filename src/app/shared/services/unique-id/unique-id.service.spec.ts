import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate an unique id with a prefix when called`, () => {
    const uniqueIdService: UniqueIdService = new UniqueIdService()
    const id: string = uniqueIdService.generateUniqueIdWithPrefix('teste')
    expect(id).toContain('teste-')
  })
});
