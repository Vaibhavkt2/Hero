import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome All';

  display:string='';
  onSave(val: string){    
    console.warn("val"); 
    this.display= val;   
  } 
  count =0;
  counter(type:string){
    type==='add'? this.count++ : this.count--; 
  }
  
}
