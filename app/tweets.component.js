System.register(['angular2/core', './tweets.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweets_service_1;
    var TweetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            }],
        execute: function() {
            TweetsComponent = (function () {
                function TweetsComponent(tweetsService) {
                    this.tweets = tweetsService.getTweets();
                }
                TweetsComponent.prototype.onVote = function (index) {
                    this.tweets[index].voted = !this.tweets[index].voted;
                    if (this.tweets[index].voted) {
                        this.tweets[index].voteCount++;
                    }
                    else {
                        this.tweets[index].voteCount--;
                    }
                };
                TweetsComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        templateUrl: 'app/tweets.template.html',
                        styles: ["\n        .media-object{border-radius: 20px;}\n        .media-heading{\n            display: inline; \n            margin-right: 5px;\n            font-weight: bold;\n            color: #333;\n        }\n        .tweet-handle{\n            color: #999;\n        }\n        .like-btn{\n            cursor: pointer;\n            font-size: 18px;\n            color: #999;\n            margin-right: 5px;\n        }\n        .like-btn.voted{color: deeppink;}\n    "],
                        providers: [tweets_service_1.TweetsService]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetsService])
                ], TweetsComponent);
                return TweetsComponent;
            }());
            exports_1("TweetsComponent", TweetsComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map