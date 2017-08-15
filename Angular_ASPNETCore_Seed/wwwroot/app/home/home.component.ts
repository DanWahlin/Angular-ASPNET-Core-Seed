import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';

@Component({
    selector: 'home',
    template: `
        <h1>{{ message }}</h1>
    `
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