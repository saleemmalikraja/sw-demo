import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-edit-blogdetail',
  templateUrl: './edit-blogdetail.component.html',
  styleUrls: ['./edit-blogdetail.component.css']
})
export class EditBlogdetailComponent implements OnInit {

  blogsForm: FormGroup;
  id = '';
  title = '';
  blog_url = '';
  author = '';
  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBlogById(this.route.snapshot.params['id']);
    this.blogsForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'blog_url' : [null, Validators.required],
      'author' : [null, Validators.required]
    });
  }

  getBlogById(id) {
    this.appService.getBlogDetailById(id).subscribe(data => {
      this.id = data.key;
      this.blogsForm.setValue({
        title: data.title,
        blog_url: data.blog_url,
        author: data.author
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.appService.updateBlogById(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/blog-list']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  blogDetails() {
    this.router.navigate(['/blog-detail', this.id]);
  }

}
