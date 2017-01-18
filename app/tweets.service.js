System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetsService;
    return {
        setters:[],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                }
                TweetsService.prototype.getTweets = function () {
                    return [
                        { name: 'Windward', tweetHandle: '@windwardstudios', text: 'Looking for a better company reporting or docgen app? ', imgUrl: 'http://www.stazeibogaze.info/gandalf.jpg', voteCount: 10, voted: true },
                        { name: 'TELUS', tweetHandle: '@telus', text: 'Our carbon pricing tweet late yesterday was not meant to be partisan or political, but we know it appeared that way, and we’re sorry', imgUrl: 'http://www.avatarsdb.com/avatars/kung_fu_panda_ready.jpg', voteCount: 17, voted: false },
                        { name: 'City of Biloxi', tweetHandle: '@CityofBiloxi', text: "Even the state calendar of holidays doesn't say it. Maybe you got mixed up with Six Flags Great America? Good coasters there", imgUrl: 'https://yt3.ggpht.com/-eI51QmWStew/AAAAAAAAAAI/AAAAAAAAAAA/Dz6Un_ypgCY/s100-c-k-no-mo-rj-c0xffffff/photo.jpg', voteCount: 7, voted: false },
                        { name: 'TechCrunch', tweetHandle: '@TechCrunch', text: 'Hulu will offer offline access to videos in a few months ', imgUrl: 'https://yt3.ggpht.com/-NoG7o5O9YIY/AAAAAAAAAAI/AAAAAAAAAAA/qNwBa3hKsgE/s100-c-k-no-mo-rj-c0xffffff/photo.jpg', voteCount: 15, voted: false }
                    ];
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map