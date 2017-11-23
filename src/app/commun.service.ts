import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class CommunService {

  data: any = null;

  constructor(private _http: Http) {
    this.getMyBlog();
  }

  private getMyBlog() {
    return this._http.get('https://reqres.in/')
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }

}
