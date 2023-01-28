import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { book } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient) { }


  // get mothod

  // gethotel() {
  //   return this.http.get('http://localhost:3000/posts').pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }


  bookList(){
    return this.http.get<book[]>('http://localhost:3000/books');
  }
  
  // getvila(id:string){
  //   return this.http.get<hotel>(`http://localhost:3000/hotels/single/${id}`);
  // }
}
