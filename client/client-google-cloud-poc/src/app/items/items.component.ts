import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemDto } from '../dto/item.dto';
import { ItemService } from '../service/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  items: ItemDto[] = [];

  private eventsSubscription!: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.eventsSubscription = this.itemService.getAllItems().subscribe({
      next: (items: ItemDto[]) => {
        this.items = items
      },
      error: (error) => {
        console.error(error);
        this.items = [{
          id: 0,
          description: 'oops.server.error'
        }];
      }
    });
  }

  onSubmit(itemForm: NgForm) {
    let newItem: ItemDto = { id: 0, description: itemForm.value.itemDescriptionInput };
    this.eventsSubscription = this.itemService.addItem(newItem).subscribe({
      next: (item: ItemDto) => {
        this.items.push(item);
      },
      error: (error) => {
        console.error(error);
      }
    });

    itemForm.reset();
  }

  onItemDeleted(deletedItemId: number) {
    console.log("item was deleted: " + deletedItemId);
    let index: number = this.items.findIndex(item => item.id === deletedItemId);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
  }

}