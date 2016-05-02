var Xray = require("x-ray");

var xray = new Xray();

xray('http://google.com', 'a',
    [{
        a:'',
        href:'@href',
        css:'@class'
    }]
)
.write('google-a-results.json');
