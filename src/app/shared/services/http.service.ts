import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const URL = 'http://35.189.100.103:8082/content/REST/LogisticsTestbedV12/';

@Injectable()
export class HttpService {

  private headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  private generateUrlParams(params: any): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    for (const key in params) {
      httpParams = httpParams.set(key, params[key]);
    }
    return httpParams;
  }

  /**
   * Create get query
   * @param {string} url
   * @param {Object} urlParams
   * @returns {Observable<any>}
   */
  public get(url: string, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.get(URL + url, {
      headers: this.headers,
      params: params,
      responseType: 'json',
    });
  }

  /**
   * Create get query
   * @param {string} url
   * @param {Object} urlParams
   * @returns {Observable<any>}
   */
  public getNoExtension(url: string, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.get(url, {
      headers: this.headers,
      params: params,
      responseType: 'json',
    });
  }

  /**
   * Create post request
   * @param {string} url
   * @param {Object} data
   * @param {Object} urlParams
   * @returns {Observable<any>}
   */
  public post(url: string, data: any = {}, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.post(URL + url, data, {
      headers: this.headers,
      params: params,
      responseType: 'json',
    });
  }

  /**
   * Create put request
   * @param {string} url
   * @param {Object} data
   * @param {Object} urlParams
   * @returns {Observable<any>}
   */
  public put(url: string, data: any = {}, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.put(URL + url, data, {
      headers: this.headers,
      params: params,
      responseType: 'json',
    });
  }

  /**
   * Create delete request
   * @param {string} url
   * @param {Object} urlParams
   * @returns {Observable<any>}
   */
  public delete(url: string, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.delete(URL + url, {
      headers: this.headers,
      params: params,
      responseType: 'json',
    });
  }


}
