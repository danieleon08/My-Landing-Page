import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit, OnDestroy {
  backgroundUrl: string = 'assets/images/fondogris.png';

  // Lista de palabras dinámicas
  words: string[] = ['DEV FRONTED', 'INNOVADOR', 'DEV MOVIL', 'CURIOSO'];
  currentWord: string = this.words[0];
  private wordIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, 3000); // cada 3 segundos
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
