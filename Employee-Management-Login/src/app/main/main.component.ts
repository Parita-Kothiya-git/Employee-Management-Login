import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';
import '../_content/app.less';

@Component({ selector: 'main', templateUrl: 'main.component.html' })
export class MainComponent implements OnInit {
    currentUser: User;
    selected :any = 'Home';
    public href: string = "";

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.href = this.router.url;
        if(!this.href.match(this.selected.toLowerCase())) this.selected = 'Employee';
    }

    select(item) {
        this.selected = item; 
    };
    isActive(item) {
        return this.selected === item;
    };
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}