import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: { projectName: string; desc: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projects = [
      {
        projectName: 'Store Room India',
        desc: `
      Bubblix Store Room India Pvt. Ltd is in the business of operating a
      technology backed Ecommerce Platform (“Ecommerce Platform”) of
      various categories of products and services through its online portal,
      own apps, lead channels. Bubblix Store Room India Pvt. Ltd owns a
      website which is an Ecommerce Platform, where end-users/Customer of
      the Website can place their order/(s) for fulfillment of the same.`,
      },
      {
        projectName: 'Health Safe Today',
        desc: `
      Health Safe Today (HST) is a cloud-based application that allows
      individuals to safely record their health data and map their health
      journey, anytime, anywhere in a seamless and secure manner and obtain
      the best treatment from healthcare providers. We aim to strengthen the
      PHR component of the digital health ecosystem, making sure patients
      are at the core of all services provided. HST functions as a robust mobile
      and web-based platform for health information exchange, ensuring
      authenticity, safety and validity of patient medical information, while
      enabling congruence, to ensure reduction of errors such as
      contraindicative prescriptions, LASA (look-alike-sound-alike) effects
      and also, helps streamline service delivery and workflows for all
      stakeholders.`,
      },
      {
        projectName: 'SwasthU (MyDentil)',
        desc: `
        SwasthU is an app for booking online doctor appointments. It helps you
        to connect with specialized doctors anytime on video call. Services
        Provided like Book Doctor appointments, Connect with Doctors on video
        calls, Maintain digital health records`,
      },

      {
        projectName: 'Vasaas',
        desc: `
        Vasaas is an online fashion store that provides designer clothing and
        accessories of every category at lowest price guaranteed.`,
      },
      {
        projectName: 'Gneiss',
        desc: `
        World's first peer-to-peer decentralized free market blockchain
        platform! GNEISS, reinventing the financial wheel.`,
      },

      {
        projectName: 'Dairy VLC',
        desc: `
        The purpose is to automate the existing manual system by the help of
        computerized equipment and full-fledged computer software, fulfilling
        their requirements, so that their valuable data/information can be stored
        for a longer period with easy accessing and manipulation of the records.
        The required s/w and h/w are easily available and easy to work with.`,
      },
    ];
  }
}
