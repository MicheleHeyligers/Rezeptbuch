export class Recipe {
  /* schreibt man im Konstruktor public vor die Variablen, erstellt
  Typescript die Variablen von selbst*/
  constructor(public name: string, public description: string, public imagePath: string) {
  }
}
