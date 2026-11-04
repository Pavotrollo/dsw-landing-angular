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
    {titulo: 'Node.js', imagen: 'assets/images/nodeimg.png'},
    {titulo: 'TypeScript', imagen: 'assets/images/typescriptimg.png'},
    {titulo: 'Angular', imagen: 'assets/images/angularimg.png'},
    {titulo: 'NPM', imagen: 'assets/images/npmimg.png'}
  ];
}