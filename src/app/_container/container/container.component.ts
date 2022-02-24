import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.showContainer) {
      if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
          document.getElementById('navbar').classList.add('bg-dark');
          document.getElementById('navbar').classList.add('top-0');
        }

        if (document.documentElement.scrollTop == 0) {
          document.getElementById('navbar').classList.remove('bg-dark');
          document.getElementById('navbar').classList.remove('top-0');
        }
    }
  }

  showContainer: boolean = true;

  constructor(private router: Router,) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showContainer = (event.url == '/home') ? false : true;
        if (event.url != '/home') {
          if (window.innerHeight >= document.body.scrollHeight) {
            document.getElementById('navbar').classList.add('bg-dark');
            document.getElementById('navbar').classList.add('top-0');
          }
        } else {
          document.getElementById('navbar').classList.remove('bg-dark');
          document.getElementById('navbar').classList.remove('top-0');
        }
        // console.log('event.url: + ' + event.url);
    }});
  }

  ngOnInit(): void {
    // create an Observer instance
    // const resizeObserver = new ResizeObserver(
    //   entries => {
    //     console.log('Body height changed:', entries[0].target.clientHeight);
    //     this.onResize();
    // });

    // start observing a DOM node
    // resizeObserver.observe(document.body)
  }

  onResize() {
    if (window.innerHeight >= document.body.scrollHeight) {
      document.getElementById('navbar').classList.add('bg-dark');
      document.getElementById('navbar').classList.add('top-0');
    }
    // console.log('window.innerHeight: ' + window.innerHeight
    // + ', document.body.scrollHeight: ' + document.body.scrollHeight);
  }
}
