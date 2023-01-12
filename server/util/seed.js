const { User, Video } = require("./models");

let users = [
    { 
        username: "test",
        password: "test",
        admin: true
    },
    { 
        username: "test2",
        password: "test2",
        admin: false
    }
];

let videos = [
    {
        url: 'https://www.youtube.com/embed?v=x0tirIu4oGI',
        title: 'Sky Princess',
        description: 'St. John, turtle snorkeling',
        adventure: true,
        port: false
    },
    {
        url: 'https://www.youtube.com/embed?v=s6wGNSOcmhs',
        title: 'Sky Princess',
        description: 'Princess cayes snorkeling',
        adventure: true,
        port: false
    },
    {
        url: 'https://www.youtube.com/watch?v=zHyqvoBO47E',
        title: 'Sky Princess',
        description: 'Embarkation, balcony tour',
        adventure: true,
        port: false
    },
    {
        url: 'https://www.youtube.com/watch?v=aGGamPdnQFg',
        title: 'Mail Monday',
        description: '---',
        adventure: true,
        port: false
    },
    {
        url: 'https://www.youtube.com/watch?v=wwAYIALZRog',
        title: 'MunchPak',
        description: 'Dec. 2022',
        adventure: true,
        port: false
    }
]

const seed = async() => {
    await User.bulkCreate(users)
    await Video.bulkCreate(videos)
}

module.exports = seed