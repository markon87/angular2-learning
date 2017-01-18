import {Component} from 'angular2/core';
import {TweetsService} from './tweets.service'

@Component({
    selector: 'tweets',
    templateUrl: 'app/tweets.template.html',
    styles:[`
        .media-object{border-radius: 20px;}
        .media-heading{
            display: inline; 
            margin-right: 5px;
            font-weight: bold;
            color: #333;
        }
        .tweet-handle{
            color: #999;
        }
        .like-btn{
            cursor: pointer;
            font-size: 18px;
            color: #999;
            margin-right: 5px;
        }
        .like-btn.voted{color: deeppink;}
    `],
    providers: [TweetsService]
})
export class TweetsComponent{
    tweets;

    onVote(index){
        this.tweets[index].voted = !this.tweets[index].voted;
        if(this.tweets[index].voted){
            this.tweets[index].voteCount++;
        }else{
            this.tweets[index].voteCount--;
        }
    }

    constructor(tweetsService: TweetsService){
        this.tweets = tweetsService.getTweets();
    }
}