import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private location: Location, private route: Router) { }
  title = 'Module / Lazy Loading Demo';
  links = [{
    route: '',
    name: 'Home'
  }, {
    route: '/login',
    name: 'Login'
  }, {
    route: '/admin',
    name: 'Admin'
  }, {
    route: '/reporting',
    name: 'Reporting'
  }];
  activeLink = this.links[0];

  ngOnInit() {
    this.route.events.subscribe(x => {
      var s = this.location.path().split('/');
      if (s.length > 0) {
        var matches = this.links.filter(x => {
          return x.name.toLowerCase() == s[1].toLowerCase();
        });
        if (matches.length > 0) {
          this.activeLink = matches[0];
        } else {
          this.activeLink = this.links[0];
        }

      }
    });


  }
}
