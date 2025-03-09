import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CustomerService {
  getData() {
    return [
        {
          "id": 1000,
          "name": "1",
          "country": {
            "name": "Endoso 1",
            "code": "dz"
          },
          "company": "01/01/2025",
          "date": "2015-09-13",
          "status": "completado",
          "verified": true,
          "activity": 17,
          "representative": {
            "name": "Solicitud 1",
            "image": "solicitud1.png"
          },
          "balance": 70663
        },
        {
          "id": 1001,
          "name": "2",
          "country": {
            "name": "Endoso 2",
            "code": "eg"
          },
          "company": "15/06/2024",
          "date": "2018-11-25",
          "status": "pendiente",
          "verified": false,
          "activity": 5,
          "representative": {
            "name": "Solicitud 1",
            "image": "solicitud2.png"
          },
          "balance": 89500
        },
        {
          "id": 1002,
          "name": "3",
          "country": {
            "name": "Endoso 3",
            "code": "mx"
          },
          "company": "10/12/2023",
          "date": "2020-05-10",
          "status": "en proceso",
          "verified": true,
          "activity": 23,
          "representative": {
            "name": "Solicitud 1",
            "image": "solicitud3.png"
          },
          "balance": 65000
        },
        {
          "id": 1003,
          "name": "4",
          "country": {
            "name": "Endoso 4",
            "code": "fr"
          },
          "company": "22/03/2026",
          "date": "2021-09-30",
          "status": "completado",
          "verified": true,
          "activity": 40,
          "representative": {
            "name": "Solicitud 4",
            "image": "solicitud4.png"
          },
          "balance": 100450
        },
        {
          "id": 1004,
          "name": "5",
          "country": {
            "name": "Endoso 5",
            "code": "br"
          },
          "company": "18/07/2025",
          "date": "2019-04-20",
          "status": "cancelado",
          "verified": false,
          "activity": 7,
          "representative": {
            "name": "Solicitud 5",
            "image": "solicitud5.png"
          },
          "balance": 47200
        },
        {
          "id": 1005,
          "name": "6",
          "country": {
            "name": "Endoso 6",
            "code": "ar"
          },
          "company": "05/02/2024",
          "date": "2017-08-14",
          "status": "completado",
          "verified": true,
          "activity": 32,
          "representative": {
            "name": "Solicitud 6",
            "image": "solicitud6.png"
          },
          "balance": 89000
        },
        {
          "id": 1006,
          "name": "7",
          "country": {
            "name": "Endoso 7",
            "code": "de"
          },
          "company": "11/11/2025",
          "date": "2022-06-30",
          "status": "pendiente",
          "verified": false,
          "activity": 15,
          "representative": {
            "name": "Solicitud 7",
            "image": "solicitud7.png"
          },
          "balance": 67300
        },
        {
          "id": 1007,
          "name": "8",
          "country": {
            "name": "Endoso 8",
            "code": "it"
          },
          "company": "30/09/2024",
          "date": "2023-02-10",
          "status": "en proceso",
          "verified": true,
          "activity": 28,
          "representative": {
            "name": "Solicitud 8",
            "image": "solicitud8.png"
          },
          "balance": 72500
        },
        {
          "id": 1008,
          "name": "9",
          "country": {
            "name": "Endoso 9",
            "code": "es"
          },
          "company": "20/01/2026",
          "date": "2020-10-05",
          "status": "completado",
          "verified": true,
          "activity": 45,
          "representative": {
            "name": "Solicitud 9",
            "image": "solicitud9.png"
          },
          "balance": 110300
        },
        {
          "id": 1009,
          "name": "10",
          "country": {
            "name": "Endoso 10",
            "code": "us"
          },
          "company": "08/05/2023",
          "date": "2016-12-15",
          "status": "cancelado",
          "verified": false,
          "activity": 3,
          "representative": {
            "name": "Solicitud 10",
            "image": "solicitud10.png"
          },
          "balance": 50500
        }
      ];
      
  }

  constructor(private http: HttpClient) {}

  getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
    return this.http
      .get<any>("https://www.primefaces.org/data/customers", { params: params })
      .toPromise();
  }
}
