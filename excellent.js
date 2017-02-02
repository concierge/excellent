const images = require('./images.json'),
    regex = /e+x+c+e+l+l+e+n+t+/ig;

exports.match = event => !!event.arguments.find(a => regex.test(a));

exports.run = (api, event) => {
    const image = api.random(images);
    api.sendImage('url', image, '', event.thread_id);
};
