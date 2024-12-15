import { Component, Input,computed, input, Output,output, EventEmitter } from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //decorateur vieille approche
  @Input({required:true}) avatar!: string;
  @Input({required:true})name!: string;
  @Input({required:true}) id!: string;
//   On privilegie les signaux input  car on peut gérer et mettre à jour les parties
//   de l'interface de l'ui lorsque la valeur d'un signal change
// il y a peu d'entreprise qui utilise les signaux ou pas dans l'ensemble du code
// il faut connaître les différentes approches 
  // avatar = input.required<string>();//équivalent du Décorateur Input dans lequel on passait
  // name = input.required<string>();

  //output property -> va nous permettre de vérifier le click du select

  @Output() select = new EventEmitter<string>(); //il vaut mieux caster en string car pour l id de chaque pers on attend une valeur en string c'est un extra type safety
  //instance eventemitter va nous permette d'emettre des valeurs custom
                                      // par le biais de cette propriete a tout composant parent
  //select = output<string>();//cette fonction est plus recente
  //on a plus besoin de decorateur avec la fonction input que ce soit pour les entreees ni pour les sorties - aucun decorateur ne serait obligatoire dans ce composant

  get imagePath() {
    return 'assets/users/' + this.avatar;
  };

  onSelectUser() {
    this.select.emit(this.id);
  }
}
