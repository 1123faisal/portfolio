import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  expriences: {
    company: string;
    role: string;
    duration: string;
    desc: string[];
  }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.expriences = [
      {
        company: 'WebMobril Technologies, Noida',
        role: 'Senior Web Developer',
        duration: 'MAY 2022 - PRESENT',
        desc: [
          'Developed efficient and maintainable software according to business objectives and Requirement.',
          'Reviewed code, debugged problems and corrected issues.',
          'Integrate Backend Api and others third party apis in application..',
          'Used NodeJS, ORM and SQL/No-SQL to develop and manage databases.',
          'Mentored junior members and delivered training to boost team skills.',
          'Worked with back-end developers to design APIs.',
          'Deploy web Applications on the cloud like aws.',
        ],
      },
      {
        company: 'Benchwork Technologies, Noida',
        role: 'Full Stack Web Developer',
        duration: 'MARCH 2020 - MAY 2022',
        desc: [
          'Developed efficient and maintainable software according to business objectives and Requirement.',
          'Reviewed code, debugged problems and corrected issues.',
          'Integrate Backend Api and others third party apis in application.',
          'Used NodeJS, ORM and SQL/No-SQL to develop and manage databases.',
          'Mentored junior members and delivered training to boost team skills.',
          'Worked with back-end developers to design APIs.',
          'Deploy web Applications on the cloud like AWS.',
        ],
      },

      {
        company: 'Plebiscite IT Services, Noida',
        role: 'Angular Developer',
        duration: 'OCTOBER 2019 - FEBRUARY 2020',
        desc: [
          'Developed efficient and maintainable UI Design according to business objectives and Requirement.',
          'Api Integration.',
          'Work with some UI Libraries like Angular Material,Materialize,Bootstrap,etc.',
        ],
      },
      {
        company: 'TBI Technologies, Bhopal',
        role: 'Angular Developer',
        duration: 'MAY 2019 - OCTOBER 2019',
        desc: [
          'Developed efficient and maintainable UI Design according to business objectives and Requirement.',
          'Api Integration.',
          'Work with some UI Libraries like Angular Material,Materialize,Bootstrap,etc.',
        ],
      },
      {
        company: 'MSS Infotech, Bhopal',
        role: 'Web Developer',
        duration: 'JANUARY 2019 - MAY 2019',
        desc: [
          'Developed web application with core PHP and Angular.',
          'Api Integration.',
          'Work with some UI Libraries like Angular Material,Materialize,Bootstrap,etc.',
        ],
      },
    ];
  }
}
