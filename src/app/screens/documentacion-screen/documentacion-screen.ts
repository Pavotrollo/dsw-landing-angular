import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion-screen',
  imports: [],
  templateUrl: './documentacion-screen.html',
  styleUrl: './documentacion-screen.scss'
})
export class DocumentacionScreen {
  urlDocumentacion = 'https://angular.dev';
  diapositivas = [
    {titulo: 'Node.js', imagen: 'assets/img/nodeimg.png'},
    {titulo: 'TypeScript', imagen: 'assets/img/typescriptimg.png'},
    {titulo: 'Angular', imagen: 'assets/img/angularimg.png'},
    {titulo: 'NPM', imagen: 'assets/img/npmimg.png'}
  ];
}
