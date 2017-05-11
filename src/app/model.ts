/**
 * Created by oleg on 5/7/2017.
 */
export class TestDataItem {
  "CompanyCode": number;
  "Account": number;
  "City": string;
  "Country": string;
  "CreditRating": string;
  "Currency": string;
  "Amount": number;
}


export class CountryBank {
  Country: string;
  Amount: number;

  constructor(country, amount) {
    this.Country = country;
    this.Amount = amount;
  }
}
