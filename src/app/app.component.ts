import { Component, OnInit, VERSION } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public content: any = null;

  constructor(private contentService: ContentService) {
    this.contentService.content().subscribe((content) => {
      this.content = content;
    });
    console.log('content:', this.content);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.contentService.content().next({
        ...this.content,
        asyncProp: 'Be patient.',
      });
    }, 1000);
    setTimeout(() => {
      this.contentService.content().next({
        ...this.content,
        asyncProp: 'Something is comming 🙈',
      });
    }, 2000);
    setTimeout(() => {
      this.contentService.content().next({
        ...this.content,
        asyncProp: 'This value is added asynchronously 🥳.',
      });
    }, 3000);
  }
}
