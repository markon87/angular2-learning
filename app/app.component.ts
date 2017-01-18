import {Component} from 'angular2/core';
import {TweetsComponent} from './tweets.component';

@Component({
    selector: 'my-app',
    template: `<div class="container">
            <h1>Tweet app using Angular2</h1>
            <tweets></tweets>
        </div>`,
    directives: [TweetsComponent]
})
export class AppComponent { }