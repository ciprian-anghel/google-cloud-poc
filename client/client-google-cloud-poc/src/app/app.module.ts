import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'items' } // Fallback route
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
