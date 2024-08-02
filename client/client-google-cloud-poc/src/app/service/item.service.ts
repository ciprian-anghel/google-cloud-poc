import { Injectable } from '@angular/core';
import { ItemRepository } from '../repository/item.repository';
import { ItemDto } from '../dto/item.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {  

  constructor(private repository: ItemRepository) { }

  getAllItems(): Observable<ItemDto[]> {
    return this.repository.getAllItems();
  }

  addItem(item: ItemDto): Observable<ItemDto> {
    return this.repository.addItem(item);
  }

  deleteItem(id: number): Observable<any> {
    return this.repository.deleteItem(id);
  }
 
}