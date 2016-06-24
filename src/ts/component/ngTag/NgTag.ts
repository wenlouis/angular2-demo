import {Component} from '@angular/core';

@Component({
    selector: 'ng-tag',
    styles: [require('./NgTag.scss')],
    template: require('NgTag.html')
})

export class NgTagComponent {
    list:any;
    ngSwitchList:any;
    ngStyleList:any;

    constructor() {
        this.list = [{
                'name': 'xiaomo'
            },{
                'name': 'xiaogang'

            },{
                'name': 'xiaomoxue'
            }];
        this.ngSwitchList=[
            'xiaomo',
            'xiaoming'
        ];
        this.ngStyleList={
            'color':'blue',
            'backgroundColor':'green'
        };
    };
}