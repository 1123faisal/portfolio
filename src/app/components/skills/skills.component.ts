import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: { skill: string; precentage: number; c1: string; c2: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.skills = [
      { skill: 'HTML', precentage: 80, c1: 'blue', c2: 'progress-bar-info' },
      { skill: 'CSS', precentage: 60, c1: 'red', c2: 'progress-bar-danger' },
      {
        skill: 'JAVASCRIPT',
        precentage: 70,
        c1: 'blue',
        c2: 'progress-bar-info',
      },
      { skill: 'NODEJS', precentage: 70, c1: 'blue', c2: 'progress-bar-info' },
      {
        skill: 'EXPRESSJS',
        precentage: 70,
        c1: 'blue',
        c2: 'progress-bar-info',
      },
      { skill: 'ANGULAR', precentage: 70, c1: 'blue', c2: 'progress-bar-info' },
      { skill: 'GIT', precentage: 70, c1: 'blue', c2: 'progress-bar-info' },
      { skill: 'DOCKER', precentage: 50, c1: 'red', c2: 'progress-bar-danger' },
    ];
  }
}
