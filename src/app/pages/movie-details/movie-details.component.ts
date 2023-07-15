import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  getMovieDetailsResults:any;
  constructor(private service:MovieApiServiceService,private router:ActivatedRoute){}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#')
    this.getMovie(getParamId);

  }

  getMovie(id:any){
  this.service.getMovieDetails(id).subscribe((results=>{
  console.log(results,'getMoviedetails#');
  this.getMovieDetailsResults = results;
  }))

  }


}
