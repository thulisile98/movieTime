import { MovieApiServiceService } from './../../service/movie-api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: any = [];
  trending:any=[];
  constructor(private movieapiservice: MovieApiServiceService) {

  }
  ngOnInit(): void {
    this.bannerData();
    this.trendingMovie();
  }

  bannerData() {
    this.movieapiservice.bannerApiData().subscribe((result) => {
      console.log(result);
      this.movies = result;
    })
  }

  trendingMovie()
  {
    this.movieapiservice.trendingMovies().subscribe((results=>{
      console.log(results);
      this.trending=results;
    }))
  }

}
