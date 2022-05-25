import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validator ,Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seccionregistro',
  templateUrl: './seccionregistro.component.html',
  styleUrls: ['./seccionregistro.component.css']
})
export class SeccionregistroComponent implements OnInit {
 myform: FormGroup;



  constructor(private _builder:FormBuilder){
    this.myform= this._builder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      celular:['',[Validators.required]],
      email:['',[Validators.required]],
      usuario:['',[Validators.required]],
      pass:['',[Validators.required]],

    })
  
 }

  nom:any;
  ape:any;
  cel:any;
  ema:any;
  usu:any;
  pas:any;  
 
  ngOnInit() {
  }
     ///////////////////////////////////////////////////////////////////////
     set(key:string, data:any){
      try {
        localStorage.setItem(key ,JSON.stringify(data));
      } catch (e) {
        console.log(e)
      }
      }
    
      get(key:string){
        try {
         console.log(JSON.parse(localStorage.getItem(key) || '{}'))
          return  JSON.parse(localStorage.getItem(key) || '{}');
         } catch (e) {
          console.log(e)
        }
      }
      ////////////////////////////////////////////////////////////////////////
      Guardar(value:any){
        
        this.nom=value.nombre;
        this.ape=value.apellido;
        this.cel= value.celular;
        this.ema=value.email;
        this.usu=value.usuario;
        this.pas=value.pass;  
      
    
    
        let nueva_respuesta={
            vnom:(this.nom),
            vape:(this.ape),
            vcel:(this.cel),
            vema:(this.ema),
            vusu:(this.usu),
            vpas:(this.pas)
        }

        this.set("dato_objeto",nueva_respuesta)
        let dato_json=this.get("dato_objeto")
        let nombre =dato_json.vnom;
        let apellido =dato_json.vape;
        let cell =dato_json.vcel;
        let email =dato_json.vema;
        let usuario =dato_json.vusu;
        let password =dato_json.vpas;
        
        if(nombre=="" || apellido=="" || cell=="" || email=="" || usuario=="" || password==""){
          alert("Todos los campos son obligatorio")
          window.location.reload()

        }else{
          alert("Se ha registrado con éxito ya puede iniciar sesión");
          
        }
      

      }
    

}