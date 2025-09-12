import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

   // 🌟 Tecnologías
  techCategories = [
    {
      name: 'Frontend',
      technologies: [
        { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
        { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178C6' },
        { name: 'Sass', icon: 'fab fa-sass', color: '#CC6699' }
      ]
    },
    {
      name: 'Backend',
      technologies: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'Java', icon: 'fab fa-java', color: '#007396' },
        { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
        { name: 'Express', icon: 'fas fa-server', color: '#000000' }
      ]
    },
    {
      name: 'Bases de Datos',
      technologies: [
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
        { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' },
        { name: 'Redis', icon: 'fas fa-cube', color: '#DC382D' }
      ]
    },
    {
      name: 'DevOps & Tools',
      technologies: [
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'AWS', icon: 'fab fa-aws', color: '#232F3E' },
        { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' }
      ]
    }
  ];

    ngOnInit(): void {
    // Inicialización si es necesaria
    
  }


}
