import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { AppService } from '../app.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  displayedColumns = ['title', 'blog_url', 'author'];
dataSource = new BlogDataSource(this.appService);
  constructor(private appService: AppService) {}

  ngOnInit() {}
}



export class BlogDataSource extends DataSource<any> {

  constructor(private appService: AppService) {
    super();
  }

  connect() {
    return this.appService.getAllBlogs();
  }

  disconnect() {

  }
}
