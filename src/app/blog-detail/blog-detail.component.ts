import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
export interface Blog {
  key: string;
  title: string;
  blog_url: string;
  author: string;
}
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.getBlogDetailById(this.route.snapshot.params['id']);}

  getBlogDetailById(id) {
    this.appService.getBlogDetailById(id).subscribe(data => {
      console.log(data);
      this.blog = data;
    });
  }

  deleteBlogById(id) {
    this.appService.deleteBlog(id).subscribe(
      res => {
        this.router.navigate(['/blog-list']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
