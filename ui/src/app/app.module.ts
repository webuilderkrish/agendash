import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule,MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule, } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
