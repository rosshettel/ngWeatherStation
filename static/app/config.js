angular.module('weatherstation').constant('config', {
    webcams: [
        'http://wx.koin.com/weather/images/Eastside_Exchange.jpg',
        'http://wx.koin.com/weather/images/Riverview_Bank.jpg',
        'http://cdn.tegna-media.com/kgw/weather/wellsfargo.jpg',
        'http://cdn.tegna-media.com/kgw/weather/rosecity.jpg',
        'http://w3.gorge.net/niknas/webcam.jpg',
        'http://wx.koin.com/weather/images/Skamania_Lodge.jpg',
        'https://www.fsvisimages.com/images/photos-main/CORI1_main.jpg',
        'https://tripcheck.com/RoadCams/cams/i84metro_pid588.jpg',
        'https://tripcheck.com/RoadCams/cams/fremontbridge_pid531.jpg',
        'https://tripcheck.com/RoadCams/cams/US30%20at%20St%20Johns%20Bridge%20Top_pid3487.JPG'
    ],
    wundergroundTokens: ['d0dba01007c9d499'],
    darkSkyKey: 'fb7530eb012c152629f2ace23921214e',
    lat: '45.5751419',
    lon: '-122.7093558',
    zip: '97217',
    routeRotation: [
        {route: '/today', time: 15},
        {route: '/weatherRadar', time: 10},
        {route: '/webcam', time: 8},
        {route: '/forecast', time: 12},
        {route: '/webcam', time: 8}
    ],
    clocks: {
        top: {name: 'Chicago', tz: 'America/Chicago'},
        bottom: {name: 'Portland', tz: 'America/Los_Angeles'}
    }
});