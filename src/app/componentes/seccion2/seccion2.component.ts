import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seccion2',
  templateUrl: './seccion2.component.html',
  styleUrls: ['./seccion2.component.css']
})
export class Seccion2Component implements OnInit {
  myformcontacto:FormGroup;
  constructor(private _builder:FormBuilder) { 
    this.myformcontacto= this._builder.group({


    })
  }

  ngOnInit(): void {
  }
recargar(value:any){
  
window.location.reload;

}
}
