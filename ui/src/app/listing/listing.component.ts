import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { MatTableDataSource, MatFormField, matFormFieldAnimations, MatInput } from '@angular/material';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  public uData = [];
  displayedColumns:string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private userData: UserDataService) { }

  ngOnInit() {
    
    this.userData.getData().subscribe(data => {
    this.uData = data,
      console.log(this.uData)
    });


    }

  dataSource = this.uData;


  Filter(Value: any) {

    this.dataSource.filter = Value.trim().toLowerCase();
  }


}
