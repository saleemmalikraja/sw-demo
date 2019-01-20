import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {


  blogsForm: FormGroup;
  title = '';
  blog_url = '';
  author = '';


  constructor(private appService: AppService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.blogsForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'blog_url': [null, Validators.required],
      'author': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.appService.postBlog(form)
      .subscribe(res => {
          const id = res['key'];
          this.router.navigate(['/boards-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

}
