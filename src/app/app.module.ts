import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogdetailComponent } from './edit-blogdetail/edit-blogdetail.component';

// Routing imports
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialImports } from './app.material.imports';


const appRoutes: Routes = [
  {
    path: 'blog-list',
    component: BlogListComponent,
    data: { title: 'Blog List' }
  },
  {
    path: 'blog-detail/:id',
    component: BlogDetailComponent,
    data: { title: 'Blogs Detail' }
  },
  {
    path: 'add-blog',
    component: AddBlogComponent,
    data: { title: 'Create Blog' }
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogdetailComponent,
    data: { title: 'Edit Blog' }
  },
  { path: '',
    redirectTo: '/blog-list',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/blog-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    AddBlogComponent,
    EditBlogdetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...AngularMaterialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
