import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc:HttpClient) { }
 getPopularMovies(){
  return this.hc.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=913862d6e63cdf880f7c350b36dca1cc`);
 }
 getGenreMovies(g:number){
  return this.hc.get(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${g}&include_video=true&api_key=913862d6e63cdf880f7c350b36dca1cc`)
 }  
getMovie(id: number){
  return this.hc.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=913862d6e63cdf880f7c350b36dca1cc`
  ); 
}
getMoviesVideos(id:number){
  return this.hc.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=913862d6e63cdf880f7c350b36dca1cc`
  ); 
}

getMovieBySearch(name:string){
  return this.hc.get(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=913862d6e63cdf880f7c350b36dca1cc`)
}
   
} 
// https://api.themoviedb.org/3/movie/${id}/videos?api_key=913862d6e63cdf880f7c350b36dca1cc