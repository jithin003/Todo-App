import { TestBed } from '@angular/core/testing';

import { StorageTodoService } from './storage-todo.service';

describe('StorageTodoService', () => {
  let service: StorageTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
