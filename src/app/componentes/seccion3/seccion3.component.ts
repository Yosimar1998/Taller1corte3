import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,Validator } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.component.html',
  styleUrls: ['./seccion3.component.css']
})
export class Seccion3Component implements OnInit {
  myformlogin: FormGroup;

  constructor(private _builder:FormBuilder) { 
    this.myformlogin= this._builder.group({
      user:['',[Validators.required]],
      password:['',[Validators.required]]
    })

  }

  users:any;
  passw:any;

  ngOnInit(): void {
  }

    ///////////////////////////////////////////////////////////////////////
    set(llave:string,dato:any){
      try {
        localStorage.setItem(llave,JSON.stringify(dato));
      } catch (e) {
        console.log(e)
      }
      }
    
      get(llave:string){
        try {
         console.log(JSON.parse(localStorage.getItem(llave) || '{}'))
          return  JSON.parse(localStorage.getItem(llave) || '{}');
         } catch (e) {
          console.log(e)
        }
      }
      ////////////////////////////////////////////////////////////////////////
    iniciar(value:any){
        this.users=value.user;
        this.passw=value.password;
        let nueva_respu={
            vuser:(this.users),
         
            vpassw:(this.passw)
        }
        this.set("dato",nueva_respu)
        let datos_json=this.get("dato")
        let users=datos_json.vuser;
        let pass=datos_json.vpassw;


        let rdatos= this.get("dato_objeto")
        let nombre=rdatos.vnom;
        let apellido=rdatos.vape
        let usuario=rdatos.vusu
        let password=rdatos.vpas


        if(users==""||pass==""){
          alert("Ingrese los datos completos")  
        }else{
          if(users==usuario && pass==password){
            alert("Bienvenido Sr: " + nombre +" "+apellido)
            location.href="../"
            
          }else{
            alert("Usuario o contraseña incorrecta")

          }
         
        }
    
      
    
    }
}
