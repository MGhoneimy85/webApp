import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CommunService {


  apiUrl: string = 'https://reqres.in/';

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //login
  loginService(user): Promise<any> {
    return this.http
      .post(this.apiUrl + 'api/login', user)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  //get all users by page number
  getallUsers(page): Promise<any> {
    return this.http
      .get(this.apiUrl + 'api/users?page=' + page)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }

  //get user by ID
  getUser(id): Promise<any> {
    return this.http
      .get(this.apiUrl + 'api/users/' + id)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }

  //update user by id

  updateUser(user): Promise<any> {
    return this.http
      .patch(this.apiUrl + 'api/users/' + user.id, user )
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }

  //add new user

  addUser(user): Promise<any> {
    return this.http
      .post(this.apiUrl + 'api/users', user )
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }


  //delete user

  deleteUser(id): Promise<any> {
    return this.http
      .delete(this.apiUrl + 'api/users/' + id)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }


}
