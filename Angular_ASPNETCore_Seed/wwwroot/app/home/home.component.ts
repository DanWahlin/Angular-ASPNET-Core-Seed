import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    message: string;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getMessage().subscribe((message: string) => {
            this.message = message;
        })
    }
}