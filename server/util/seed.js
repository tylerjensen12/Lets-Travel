const { Video, Trip } = require("./models");
let videos = [
  {
    url: "https://www.youtube.com/embed/x0tirIu4oGI",
    title: "Sky Princess",
    description: "St. John, turtle snorkeling",
    adventure: 'adventure',
    ports: '',
  },
  {
    url: "https://www.youtube.com/embed/s6wGNSOcmhs",
    title: "Sky Princess",
    description: "Princess cayes snorkeling",
    adventure: 'adventure',
    ports: '',
  },
  {
    url: src="https://www.youtube.com/embed/k0MtyrRqNTw",
    title: "Sky Princess",
    description: "Embarkation, balcony tour",
    adventure: 'adventure',
    ports: '',
  },
  {
    url: "https://www.youtube.com/embed/aGGamPdnQFg",
    title: "Mail Monday",
    description: "---",
    adventure: '',
    ports: 'port',
  },
  {
    url: "https://www.youtube.com/embed/wwAYIALZRog",
    title: "MunchPak",
    description: "Dec. 2022",
    adventure: '',
    ports: 'port',
  },
];

let trip = {date: '12/12/2020', ship: 'Princess', length: 5, place: 'Carribean'}

const seed = async () => {
  await Video.bulkCreate(videos);
  await Trip.create(trip)
};

module.exports = seed;
