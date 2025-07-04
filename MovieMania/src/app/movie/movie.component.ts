import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import {} from '@angular/common'
import { OnInit} from '@angular/core';
@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent  implements OnInit{
  id = 0;
  data:any={};
  videos:any = [];
x!: SafeResourceUrl;
  
 constructor(private sc:ActivatedRoute,private api:ApiService,private sanitizer:DomSanitizer){
  this.sc.params.subscribe((res) => {
    this.id = res[ 'id' ];
  })
 }
ngOnInit(){
       this.api.getMovie(this.id).subscribe((res) => { this.data=res;
       console.log(this.data)
     });
     this.api.getMoviesVideos(this.id)
    .subscribe((res:any) =>{
      console.log(res);
      this.videos = res.results;
      const url = 'https://www.youtube.com/embed/' + this.videos[1].key;
      this.x = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
}


} 
