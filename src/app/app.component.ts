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
import {forEach} from "@angular/router/src/utils/collection";



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

    this.gridOptions1.columnDefs = [  // for Output grid
      {headerName: 'Country', field: 'Country', width: 100},
      //{headerName: 'Currency', field: 'Currency', width: 70},
      {headerName: 'Amount (US$)', field: 'Amount', width: 180}
    ];
  }




  getData(dataService: DataService) {  // formValue
    dataService.getData()
      .subscribe(
        data => {
          console.dir('input size: '+data.length+', data: ' + JSON.stringify(data));
          this.gridOptions.rowData = data; // api.setRowData(data); 	// pass grid data and refresh display
          this.appData = data;
          this.processData(data);
        },
        err => console.log('Cant get data. Error code: %s, URL: %s ', err.status, err.url),
        () => console.log('Done')
      );
  }


  processData(data: TestDataItem[]) {  // currency aggregator (with converter CHF->USD 1.10 GBP->USD 1.21)
    let obj: CountryBank = null;
    for (let item of data) {
      if (item.Country != null && item.Country !== undefined && item.Country !== '') {  // country valid
        obj = this.countryAggr.find(ct => ct.Country === item.Country);
        if (obj === null) { // found existing country --> add amount
          if (item.Currency === 'CHF') {
            obj.Amount += item.Amount * 1.1;
            console.log('added to ' + obj.Country + ' $' + item.Amount * 1.1);
          } else if (item.Currency === 'GBP') {
            obj.Amount += item.Amount * 1.21;
            console.log('added to ' + obj.Country + ' $' + item.Amount * 1.21);
          } else if (item.Currency === 'USD') {
            obj.Amount += item.Amount;
            console.log('added to ' + obj.Country + ' $' + item.Amount);
          } else {
            console.log('ERROR: wrong currency detected: ' + item.Currency);
          }
        } else {  // not found Country in CountryAggr --> add row

          if (item.Currency === 'CHF') {
            this.countryAggr.push(new CountryBank(item.Country, item.Amount * 1.1));
            console.log('added ' + obj.Country);
          } else if (item.Currency === 'GBP') {
            this.countryAggr.push(new CountryBank(item.Country, item.Amount * 1.21));
            console.log('added ' + obj.Country);
          } else if (item.Currency === 'USD') {
            this.countryAggr.push(new CountryBank(item.Country, item.Amount));
            console.log('added ' + obj.Country);
          } else {
            console.log('ERROR: wrong currency detected: ' + item.Currency);
          }
        }
      } else {
          console.log('ERROR: Country name blank or NULL for Company code: ' + item.CompanyCode);
      } // end of if
    } // end of for
    console.dir('got output size: ' + this.countryAggr.length + ', data: ' + JSON.stringify(this.countryAggr));
    // this.gridOptions1.rowData = this.countryAggr;  //api.setRowData(this.countryAggr);
  }

}
