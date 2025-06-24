import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { NavbarComponent } from './navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripListingComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  protected title = 'Travlr Getaway Admin!';
}
