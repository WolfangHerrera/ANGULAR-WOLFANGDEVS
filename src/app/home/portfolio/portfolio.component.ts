import { Component } from "@angular/core";

interface ItemPortfolio {
  title: string;
  imgUrl: string;
  desc: string;
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
        title: "ROOM RESERVATION",
        imgUrl: "./assets/ROOM-RESERVATION.jpg",
        desc: "The Room-Reservation Project is a full-stack web application designed to streamline the process of booking and managing room reservations. This project leverages Angular for the frontend, Flask for the backend, and PostgreSQL for the database.",
      },
      {
        title: "BANK API",
        imgUrl: "./assets/BANK-API.jpg",
        desc: "The Bank-API Project is a robust and scalable API designed for banking operations, built using Flask for the backend, PostgreSQL for the database, PyTest for testing, Docker for containerization, and Amazon ECS for deployment and orchestration.",
      },
      {
        title: "COMING SOON",
        imgUrl: "./assets/PORTFOLIO-IMAGE.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, enim aliquam! Aliquid, necessitatibus dignissimos! Officia reprehenderit dolorum",
      },
    ];
  }
}
