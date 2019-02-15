import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { HttpService } from './http.service';

describe('HttpService', () => {

  let httpService: HttpService;
  let httpClient: HttpClient;
  let baseOptions;

  beforeAll(() => {
    httpClient = new HttpClient(null);
    httpService = new HttpService(httpClient);
  });

  beforeEach(() => {
    baseOptions = httpService['coreHttpOptions'];
  });

  it('should create the service', () => {
    expect(httpService instanceof HttpService).toBeTruthy();
  });

  it('should set core http options', () => {
    expect(httpService['coreHttpOptions']).toEqual({
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    });
  });

  it('should merge http options', () => {
    const customOptions = { test: 1 };
    expect(httpService['mergeHttpOptions'](customOptions)).toEqual(
      Object.assign({}, baseOptions, customOptions),
    );
  });

  it('should should skip merging if no custom options passed through', () => {
    const baseOptions = httpService['coreHttpOptions'];
    const customOptions = undefined;
    expect(httpService['mergeHttpOptions'](customOptions)).toEqual(baseOptions);
  });

  it('should get', () => {
    const returnVal = 'OK';
    spyOn(httpClient, 'get').and.returnValue(of(returnVal));
    const get = httpService.get('url');
    get.subscribe(
      (data) => {
        expect(data).toEqual(returnVal);
      },
      () => {
        fail('Not expected to fail');
      });
  });

  it('should post', () => {
    const returnVal = 'OK';
    spyOn(httpClient, 'post').and.returnValue(of(returnVal));
    const post = httpService.post('url', {});
    post.subscribe(
      (data) => {
        expect(data).toEqual(returnVal);
      },
      () => {
        fail('Not expected to fail');
      });
  });

  it('should put', () => {
    const returnVal = 'OK';
    spyOn(httpClient, 'put').and.returnValue(of(returnVal));
    const put = httpService.put('url', {});
    put.subscribe(
      (data) => {
        expect(data).toEqual(returnVal);
      },
      () => {
        fail('Not expected to fail');
      });
  });

  it('should delete', () => {
    const returnVal = 'OK';
    spyOn(httpClient, 'delete').and.returnValue(of(returnVal));
    const deleteCall = httpService.delete('url', {});
    deleteCall.subscribe(
      (data) => {
        expect(data).toEqual(returnVal);
      },
      () => {
        fail('Not expected to fail');
      });
  });

  it('should handle error and return it as observableOf', () => {
    const error = new HttpErrorResponse({});
    httpService['handleError'](error).subscribe((err) => {
      expect(err).toEqual(error);
    });
  });

});
