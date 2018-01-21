// img, title, tags, desc, complete, github_url, project_date
export default function () {
    return (
    [
        {
            img: 'https://i.imgur.com/JaC4IIZ.png',
            title: 'WackoMVCJspWebApp',
            tags: ['jsp','java','jmdb'],
            desc: 'Use MVC design to build a JSP web app',
            complete: true,
            github_url: 'https://github.com/zachyutw/WackoJsp',
            project_date: new Date(2017, 2, 1).toDateString()
        },
        {
            img: 'https://i.imgur.com/hkUDeVw.png',
            title: 'LefflerWebApp',
            tags: ['html','javascript'],
            desc: 'Use Canvos and JavaScript to rebuild a flash web app',
            complete: true,
            github_url: 'https://github.com/zachyutw/LafflerSoftwareProject',
            project_date: new Date(2017, 3, 1).toDateString()
        },
        {
            img: 'https://i.imgur.com/QUdxBLY.png',
            title: 'LWTLReactNativeApp',
            tags: ['react-native','RESTFul'],
            desc: 'Use RESTFul and React-native to build a mobile-app prototype',
            complete: true,
            github_url: 'https://github.com/zachyutw/LWTL-react-native-app',
            project_date: new Date(2017, 4, 1).toDateString()
        },
        {
            img: 'https://i.imgur.com/FX1ogms.png',
            title: 'ReactJSPersonalWebsite',
            tags: ['reactjs'],
            desc: 'Use ReactJS to rebuild front-end interface of my website , include css and html design',
            complete: true,
            github_url: 'https://github.com/zachyutw/PersonalWebReactJS',
            url_link: 'http://35.185.68.146:80',
            project_date: new Date(2017, 5, 1).toDateString()
        },
        {
            img: 'https://i.imgur.com/dx21c0V.png',
            title: 'ParkingCalAppNodeMongo',
            tags: ['mongo','nodejs','mongoose','mocha'],
            desc: 'Design a parking fee calculate system (Currently Working On)',
            complete: false,
            github_url: 'https://github.com/zachyutw/ParkingCalAppNodeMongo',
            project_date: new Date(2017, 11, 1).toDateString()
        }
        ,
        {
            img: 'https://i.imgur.com/PQtwr5i.png',
            title: 'PortfolioReactReduxNode',
            tags: ['reactjs','redux','nodejs','mongodb','sendgrid','heroku','RESTful','GoogleOauth2.0'],
            desc: 'Incorporate some of the techniques I have applied from the exercise project and present it as a portfolio website(Currently Working On)',
            complete: false,
            url_link: 'http://www.zachyutw.net',
            github_url: 'https://github.com/zachyutw/PortfolioReactReduxNode',
            project_date: new Date(2018, 0, 9).toDateString()
        },
        {
            img: 'https://i.imgur.com/E9Pze4X.png',
            title: 'Email Survey',
            tags: ['reactjs','redux','nodejs','mongodb','sendgrid','StripCheck','GoogleOauth2.0'],
            desc: 'A React Web App. Use StripeCheck to let users buy Credits and allow users to consume credit to send Emails to targets.',
            complete: true,
            link: '/surveys',
            github_url: 'https://github.com/zachyutw/PortfolioReactReduxNode',
            project_date: new Date(2018, 0, 18).toDateString()
        },
        {
            img: 'https://i.imgur.com/S6qFViK.png',
            title: 'Google Map Search',
            tags: ['reactjs','react-google-maps','google-map-api'],
            desc: 'A React Web App. Use react-google-maps to make a google search map and styling',
            complete: true,
            link: '/GoogleSearchMap',
            github_url: 'https://github.com/zachyutw/PortfolioReactReduxNode',
            project_date: new Date(2018, 0,20).toDateString()
        }

    ]);
}