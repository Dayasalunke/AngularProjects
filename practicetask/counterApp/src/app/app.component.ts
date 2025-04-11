import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number=0;
Increment(){
  this.count++;
}

Decrement(){
  if(this.count > 0 ){
    this.count--;
  }
}
Reset(){
  this.count=0;
}
  
}
