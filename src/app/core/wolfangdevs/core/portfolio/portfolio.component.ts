import { Component } from "@angular/core";

interface ItemPortfolio {
  title: string;
  imgUrl: string;
  desc: string;
  urlProject: string;
  urlGithub: string;
}
@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent {
  arrayDataPortfolio: ItemPortfolio[];
  constructor() {
    this.arrayDataPortfolio = [
      {
        title: "ALFA 3 ELÉCTRICOS",
        imgUrl: "./assets/ALFA3.jpg",
        desc: "ALFA3 is an e-commerce project developed with IONIC and Angular. I was responsible for the complete design of the website, which now includes a payment gateway integrated with MercadoPago and notifications via WhatsApp using the Meta API.",
        urlProject: "https://alfa3electricos.com",
        urlGithub: "https://alfa3electricos.com",
      },
      {
        title: "NTTDATA CLIENT",
        imgUrl: "./assets/BANK-API.jpg",
        desc: "NTTDATA CLIENT is a full-stack web application designed to streamline the process of managing bank accounts. This project leverages Angular for the frontend, Java for the backend, and PostgreSQL for the database.",
        urlProject: "https://app-nttdata.wolfangdevs.com",
        urlGithub: "https://github.com/WolfangHerrera/ANGULAR-NTTDATA-CLIENT",
      },
      {
        title: "ROOM RESERVATION",
        imgUrl: "./assets/ROOM-RESERVATION.jpg",
        desc: "The Room-Reservation Project is a full-stack web application designed to streamline the process of booking and managing room reservations. This project leverages Angular for the frontend, Flask for the backend, and PostgreSQL for the database.",
        urlProject: "https://app-room.wolfangdevs.com",
        urlGithub:
          "https://github.com/WolfangHerrera/ANGULAR-ROOM-RESERVATION-APP",
      }
    ];
  }
}
