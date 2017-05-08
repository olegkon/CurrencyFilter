import { Component, VERSION } from '@angular/core';
import { DataService } from './service';
import { FormControl } from "@angular/forms";
import { TestDataItem } from "./model";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  title = 'app works!';
  searchInput: FormControl;
  dataSet: TestDataItem[];


  constructor(dataService: DataService) {
    this.name = `Angular v${VERSION.full} Coding Test`;

    this.searchInput = new FormControl('');
    this.searchInput.valueChanges
        .debounceTime(300)
        .switchMap((place: string) => dataService.getData())
        .subscribe(
          (dataSet: TestDataItem[]) => this.dataSet = dataSet,
          error => console.error(error),
          () => console.log('Data is retrieved'));
  }

}
