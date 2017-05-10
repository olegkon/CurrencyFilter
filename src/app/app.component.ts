import { Component, VERSION } from '@angular/core';
import { DataService } from './service';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { TestDataItem } from './model';
import { CountryBank } from './model';

//import { AgGridNg2 } from 'ag-grid-angular/main';
//import { AgGridModule } from 'ag-grid-angular/main';
import { GridOptions } from 'ag-grid';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string;
  // title = 'app works!';
  searchInput: FormControl;
  dataSet: TestDataItem[];
  gridOptions: GridOptions;
  gridOptions1: GridOptions;

  countryAggr: Array<CountryBank> = [];
  appData: Array<TestDataItem> = [];


  constructor(dataService: DataService) {
    this.name = `Angular v${VERSION.full} test`;

    this.gridOptions = {}; // <GridOptions>{};

    this.gridOptions.columnDefs = [  // for Input grid
      {headerName: 'Company Code', field: 'CompanyCode', width: 110},
      {headerName: 'City', field: 'City', width: 100},
      {headerName: 'Account', field: 'Account', width: 100},
      {headerName: 'Country', field: 'Country', width: 100},
      {headerName: 'Credit Rating', field: 'CreditRating', width: 100},
      {headerName: 'Currency', field: 'Currency', width: 70},
      {headerName: 'Amount', field: 'Amount', width: 180}
    ];

    this.getData(dataService);

    this.gridOptions1 = {}; // <GridOptions>{};

    this.gridOptions1.columnDefs = [  // for Input grid
      //{headerName: 'Company Code', field: 'CompanyCode', width: 110},
      //{headerName: 'City', field: 'City', width: 100},
     // {headerName: 'Account', field: 'Account', width: 100},
      {headerName: 'Country', field: 'Country', width: 100},
      //{headerName: 'Credit Rating', field: 'CreditRating', width: 100},
      //{headerName: 'Currency', field: 'Currency', width: 70},
      {headerName: 'Amount (US$)', field: 'Amount', width: 180}
    ];
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




  getData(dataService: DataService) {  // formValue
    dataService.getData()
      .subscribe(
        data => {
          console.dir('got data: ' + JSON.stringify(data));
          this.gridOptions.rowData = data; // api.setRowData(data); 	// pass grid data and refresh display
        },
        err => console.log('Cant get data. Error code: %s, URL: %s ', err.status, err.url),
        () => console.log('Done')
      );
  }

}
