import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invaderStatus'
})
export class InvaderStatusPipe implements PipeTransform {

  transform(int_status: number | undefined, return_type: string): string {
    let text = "";
    let color = "";
    switch(int_status) {
      case 0 :
        text = "Détruit";
        color = "black";
        break;
      case 1 :
        text = "Non visible";
        color = "grey";
        break;
      case 2 :
        text = "Très dégradé";
        color = "red";
        break;
      case 3 :
        text = "Dégradé";
        color = "orange";
        break;
      case 4 :
        text = "Un peu dégradé";
        color = "yellow";
        break;
      case 5 :
        text = "OK";
        color = "green";
        break;
      case undefined:
        text = "??";
        color = "white";
    }
    switch (return_type) {
      case 'text':
        return text;
        break;
      case 'class':
        return 'status ' + color;
      default:
        return '';
    }
  }

}
