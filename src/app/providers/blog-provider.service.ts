import { Injectable } from '@angular/core';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogProviderService {
  blogs: Blog[] = [
    new Blog('First Title', 'Firt body.', '/blog1.jpg'),
    new Blog('Second Title', 'Second body.', '/blog2.jpg'),
    new Blog('Third Title', 'Third body.', '/blog3.jpg'),
  ]
}
