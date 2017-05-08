/**
 * Created by oleg on 5/7/2017.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx'



@Injectable()
export class DataService {
  static readonly data =
    [
      {
        "CompanyCode":2300,
        "Account":9917319,
        "City":"",
        "Country":"USA",
        "CreditRating":"AAA+",
        "Currency":"CHF",
        "Amount":9223372036854776000

      },
      {
        "CompanyCode":2301,
        "Account":7213447,
        "City":"New York",
        "Country":"USA",
        "CreditRating":"BBB",
        "Currency":"CHF",
        "Amount":-9223372036854776000

      },
      {
        "CompanyCode":2302,
        "Account":4535851,
        "City":"London",
        "Country":"",
        "CreditRating":"A",
        "Currency":"GBP",
        "Amount":456.85014

      },
      {
        "CompanyCode":2303,
        "Account":2954026,
        "City":"Atlanta",
        "Country":"USA",
        "CreditRating":"AAA+",
        "Currency":"CHF",
        "Amount":65484231.44

      },
      {
        "CompanyCode":2304,
        "Account":896137,
        "City":"Bristol",
        "Country":"UK",
        "CreditRating":"A",
        "Currency":"GBP",
        "Amount":312139226.6

      },
      {
        "CompanyCode":2305,
        "Account":1702200,
        "City":"Dublin",
        "Country":"IRL",
        "CreditRating":"Aa",
        "Currency":"CHF",
        "Amount":572106536.9

      },
      {
        "CompanyCode":2306,
        "Account":7499154,
        "City":"Oslo",
        "Country":"NOR",
        "CreditRating":"A",
        "Currency":"CHF",
        "Amount":842062993.3

      },
      {
        "CompanyCode":2307,
        "Account":388863,
        "City":"Sligo",
        "Country":"IRL",
        "CreditRating":"Aa",
        "Currency":"CHF",
        "Amount":607295781.3

      },
      {
        "CompanyCode":2308,
        "Account":4993711,
        "City":"Oslo",
        "Country":"NOR",
        "CreditRating":"A",
        "Currency":"CHF",
        "Amount":885799082.5

      },
      {
        "CompanyCode":2309,
        "Account":6849224,
        "City":"London",
        "Country":"UK",
        "CreditRating":"A",
        "Currency":"CHF",
        "Amount":-398659337.540115

      },
      {
        "CompanyCode":2310,
        "Account":5313519,
        "City":"New York",
        "Country":"USA",
        "CreditRating":"AAA+",
        "Currency":"USD",
        "Amount":-48121843.4

      },
      {
        "CompanyCode":2311,
        "Account":7382252,
        "City":"Copenhagen",
        "Country":"DK",
        "CreditRating":"NR",
        "Currency":"CHF",
        "Amount":603000673.3

      },
      {
        "CompanyCode":2312,
        "Account":6633464,
        "City":"London",
        "Country":"",
        "CreditRating":"-",
        "Currency":"GBP",
        "Amount":789463.4

      },
      {
        "CompanyCode":2313,
        "Account":9364221,
        "City":"Bergen",
        "Country":"NOR",
        "CreditRating":"B",
        "Currency":"CHF",
        "Amount":361265747.3

      },
      {
        "CompanyCode":2314,
        "Account":7844693,
        "City":"Liverpool",
        "Country":"UK",
        "CreditRating":"a",
        "Currency":"GBP",
        "Amount":86520110.97

      },
      {
        "CompanyCode":2315,
        "Account":1753434,
        "City":"Key Biscayne",
        "Country":"USA",
        "CreditRating":"AAA+",
        "Currency":"USD",
        "Amount":6521555.25647

      },
      {
        "CompanyCode":2316,
        "Account":1520670,
        "City":"Arhus",
        "Country":"DK",
        "CreditRating":"NR",
        "Currency":"CHF",
        "Amount":617755137

      },
      {
        "CompanyCode":2317,
        "Account":6399028,
        "City":"Moscow",
        "Country":"RUS",
        "CreditRating":"Aaa-",
        "Currency":"CHF",
        "Amount":112170814.9

      },
      {
        "CompanyCode":2318,
        "Account":8084107,
        "City":"Bangalore",
        "Country":"IND",
        "CreditRating":"Aaa+",
        "Currency":"CHF",
        "Amount":836211889.9

      }
    ];


  public getData(){
    return Observable.from([DataService.data]);
  }


}


