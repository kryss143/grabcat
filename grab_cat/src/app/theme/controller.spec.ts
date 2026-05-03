import { TestBed } from '@angular/core/testing';

import * as ControllerModule from './controller';

describe('Controller', () => {
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const token = (ControllerModule as any).Controller ?? (ControllerModule as any).default ?? null;
    service = token ? TestBed.inject(token) : null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
