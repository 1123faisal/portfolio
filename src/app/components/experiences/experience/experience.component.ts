import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() info!: {
    company: string;
    role: string;
    duration: string;
    desc: string[];
  };
  constructor() {}

  ngOnInit(): void {}
}
