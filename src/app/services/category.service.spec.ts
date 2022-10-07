import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { CategoryService } from './category.service';
import { CATEGORY_MOCK } from './mock/category';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpTesting: HttpTestingController;
  const apiURL = 'https://alta-shop.herokuapp.com/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CategoryService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpTesting.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get all category', ()=>{
    service.getAll().subscribe(res=>{
      expect(res).toEqual(CATEGORY_MOCK)
    })

    const req = httpTesting.expectOne({
      method: 'GET',
      url: `${apiURL}/categories`
    })

    req.flush(CATEGORY_MOCK)
  })


});
