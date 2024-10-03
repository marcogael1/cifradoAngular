import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderComponent } from './components/header/header.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, HttpClientModule ],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CifradoAngular';
}
