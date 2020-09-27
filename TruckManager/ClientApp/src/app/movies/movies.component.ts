import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  loading=false;
  movies;

  constructor(private route:ActivatedRoute,private http: HttpClient) { }
  
  
  ngOnInit(): void {
      this.loading=true;

      
        this.http.get("/api/getmovies/")
          .subscribe(
            response => {
              console.log("response=",response);
              this.loading=false;  
              this.movies=response['movies']


            },
            (error: HttpErrorResponse) => {
              alert("An unexpected error occured. Error: " + error.message)
              this.loading=false;
  
            });

  
    }

}
