import { Injectable } from '@angular/core';
import { ItemDto } from '../dto/item.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemRepository {

  //TODO: 'serverInstanceUrl' should be read at startup somehow from the host machine
  // private readonly serverInstanceUrl = 'http://localhost:8080';
  private readonly serverInstanceUrl = 'https://google-cloud-poc-new-nztfnltfhq-uc.a.run.app'
  private readonly itemApiBaseUrl = this.serverInstanceUrl + '/item';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>(
      `${this.itemApiBaseUrl}/all`,
      this.httpOptions
    ).pipe(
      catchError(this.handleError('Items retrieval failed'))
    );
  }

  addItem(item: ItemDto): Observable<ItemDto>{
    return this.http.post<ItemDto>(
      `${this.itemApiBaseUrl}/add`,
      item,
      this.httpOptions
    ).pipe(
      catchError(this.handleError('Adding new item failed'))
    );
  }

  deleteItem(idToDelete: number): Observable<any> {
    return this.http.delete(
      `${this.itemApiBaseUrl}/delete?id=` + idToDelete,
      this.httpOptions
    ).pipe(
      catchError(this.handleError('Deleting item failed'))
    );
  }

  private handleError(operation: string) {
    return (error: any): Observable<never> => {
      console.error(operation, error);
      throw error;
    };
  }

}
