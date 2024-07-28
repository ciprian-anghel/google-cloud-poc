import { Injectable } from '@angular/core';
import { ItemDto } from '../dto/item.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemRepository {

  private readonly apiBaseUrl = 'http://localhost:8080/item';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>(
      `${this.apiBaseUrl}/all`,
      this.httpOptions
    ).pipe(
      catchError(this.handleError('Items retrieval failed'))
    );
  }

  addItem(item: ItemDto): Observable<ItemDto>{
    return this.http.post<ItemDto>(
      `${this.apiBaseUrl}/add`,
      item,
      this.httpOptions
    ).pipe(
      catchError(this.handleError('Adding new item failed'))
    );
  }

  deleteItem(idToDelete: number): Observable<any> {
    return this.http.delete(
      `${this.apiBaseUrl}/delete?id=` + idToDelete,
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
