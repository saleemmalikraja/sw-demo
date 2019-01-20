import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  ref = firebase.firestore().collection('blogs');
  constructor() { }

  getAllBlogs(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        const blogs = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          blogs.push({
            key: doc.id,
            title: data.title,
            blog_url: data.blog_url,
            author: data.author
          });
        });
        observer.next(blogs);
      });
    });
  }

  getBlogDetailById(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        const data = doc.data();
        observer.next({
          key: doc.id,
          title: data.title,
          blog_url: data.blog_url,
          author: data.author
        });
      });
    });
  }

  postBlog(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  updateBlogById(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deleteBlog(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
