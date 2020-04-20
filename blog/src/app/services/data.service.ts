import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'https://blogtai.herokuapp.com/api/posts';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }
  getById(id) {
    return this.http.get(this.url + id);
  }
  getByText(data){
      return this.http.get(this.url + data);
  }
}
