import { Component, VERSION } from '@angular/core';
import { DataService } from './service';
import { FormControl } from "@angular/forms";
import { TestDataItem } from "./model";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { AgGridNg2 } from 'ag-grid-angular/main';
import { GridOptions } from 'ag-grid/main';
import { AgGridModule } from 'ag-grid-angular/main';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  //title = 'app works!';
  searchInput: FormControl;
  dataSet: TestDataItem[];
  gridOptions: GridOptions;


  constructor(dataService: DataService) {
    this.name = `Angular v${VERSION.full} Coding Test`;

    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = []; // 'undefined'];
    this.gridOptions.rowSelection = 'single';
    // this.gridOptions.columnDefs = this.columnDefs;

    this.gridOptions.columnDefs = [  // for Input grid
      {headerName: 'Company Code', field: 'CompanyCode', width: 100},
      {headerName: 'City', field: 'City', width: 100},
      {headerName: 'Account', field: 'Account', width: 100},
      {headerName: 'Country', field: 'Cuntry', width: 100},
      {headerName: 'Credit Rating', field: 'CreditRating', width: 100},
      {headerName: 'Currency', field: 'Currenly', width: 100},
      {headerName: 'Amount', field: 'Amount', width: 100},
      {headerName: 'Company Code', field: 'CompanyCode', width: 100}
    ];

    this.getData(dataService);
/*
    this.searchInput = new FormControl('');
    this.searchInput.valueChanges
        .debounceTime(300)
        .switchMap((place: string) => dataService.getData())
        .subscribe(
          (dataSet: TestDataItem[]) => this.dataSet = dataSet,
          error => console.error(error),
          () => console.log('Data is retrieved'));
*/
  }


  getData(dataService: DataService) {  //formValue
    dataService.getData()
      .subscribe(
        data => {
          console.dir("got data: " + data);

          //this.userId = formValue.userID;
          //this.portfolios = data;
          this.gridOptions.api.setRowData(data); 	// pass grid data and refresh display
        },
        err => console.log("Can't get data. Error code: %s, URL: %s ", err.status, err.url),
        () => console.log('Done')
      );
  }

}
