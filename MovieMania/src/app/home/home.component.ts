import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SimpleDirective } from '../simple.directive';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NgForOf, RouterLink,SimpleDirective,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
popularMovies:any[] = [];
s = '';



  genres =[
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

constructor(public api:ApiService){
  this.api.getPopularMovies().subscribe((res:any) =>{
    console.log(res.results);
    this.popularMovies = res.results
  });
}
changeMoviesCategory(e:any){
 console.log(e?.target.value);
this.api.getGenreMovies(e?.target.value).subscribe((res:any) =>
{
  this.popularMovies = res.results;
  console.log(this.popularMovies[0].title,res.results);
  
})
 
}

SearchMovies(){
  this.api.getMovieBySearch(this.s).subscribe((res:any) =>{
    console.log(res)
    this.popularMovies = res.results;
    // console.log(this.popularMovies)
    this.s = '';
  
  })
}

   
}
