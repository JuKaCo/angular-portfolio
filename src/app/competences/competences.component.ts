import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  percentage: number;
  levelClass: string; // 'excellent', 'very-good', 'good', 'average'
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  skillCategories: SkillCategory[] = [
    {
      name: 'Technologies',
      skills: [
        { name: 'SQL, databases', percentage: 80, levelClass: 'very-good' },
        { name: 'PHP, .NET (Back end)', percentage: 80, levelClass: 'very-good' },
        { name: 'Android, MAUI (Mobile)', percentage: 50, levelClass: 'average' },
        { name: 'BootStrap, Material, PrimeNG', percentage: 80, levelClass: 'very-good' },
        { name: 'JavaScript, Angular, React(Front end)', percentage: 90, levelClass: 'excellent' }
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git & Postman', percentage: 90, levelClass: 'excellent' },
        { name: 'Adobe Commerce (Magento 2)', percentage: 90, levelClass: 'excellent' },
        { name: 'Linux Servers', percentage: 80, levelClass: 'very-good' },
        { name: 'Navicat, Workbench', percentage: 90, levelClass: 'excellent' },
        { name: 'Mulesoft, ActiveMQ', percentage: 70, levelClass: 'good' }
      ]
    },
    {
      name: 'Methodologies',
      skills: [
        { name: 'Scrum', percentage: 80, levelClass: 'very-good' },
        { name: 'PMBOK', percentage: 50, levelClass: 'average' },
        { name: 'Design Thinking', percentage: 70, levelClass: 'good' },
        { name: 'CD & CI', percentage: 50, levelClass: 'average' },
        { name: 'Software architecture', percentage: 50, levelClass: 'average' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
