import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() id!: number;
  @Input() description!: string;

  @Output() deletedItemId = new EventEmitter<number>();

  private eventsSubscription!: Subscription;
  
  constructor(private itemService: ItemService) {}

  deleteItem(id: number) {
    this.eventsSubscription = this.itemService.deleteItem(id).subscribe({
      next: () => {
        //notify parent that a children was removed
        this.deletedItemId.emit(id);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
  }
}
