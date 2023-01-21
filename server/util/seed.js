const { Video, Trip } = require("./models");
let videos = [
  {
    url: "https://www.youtube.com/embed/x0tirIu4oGI",
    title: "Sky Princess",
    description: "St. John, turtle snorkeling",
    adventure: "adventure",
    ports: "",
  },
  {
    url: "https://www.youtube.com/embed/s6wGNSOcmhs",
    title: "Sky Princess",
    description: "Princess cayes snorkeling",
    adventure: "adventure",
    ports: "",
  },
  {
    url: "https://www.youtube.com/embed/k0MtyrRqNTw",
    title: "Sky Princess",
    description: "Embarkation, balcony tour",
    adventure: "adventure",
    ports: "",
  },
  {
    url: "https://www.youtube.com/embed/aGGamPdnQFg",
    title: "Mail Monday",
    description: "---",
    adventure: "",
    ports: "",
  },
  {
    url: "https://www.youtube.com/embed/MfVm9QUyCkk",
    title: "St. Thomas",
    description: "What We Think You Should Know Before You Go!",
    adventure: "",
    ports: "port",
  },
  {
    url: "https://www.youtube.com/embed/NNyxB47my2M",
    title: "St. Kitts",
    description: "What We Think You Should Know Before You Go!",
    adventure: "",
    ports: "port",
  },
  {
    url: "https://www.youtube.com/embed/Lz6wu8FaDZw",
    title: "Barbados",
    description: "What We Think You Should Know Before You Go!",
    adventure: "",
    ports: "port",
  },
  {
    url: "https://www.youtube.com/embed/wwAYIALZRog",
    title: "MunchPak",
    description: "Dec. 2022, Unboxing and Taste Test",
    adventure: "",
    ports: "",
  },
  {
    url: "https://www.youtube.com/embed/8JHutsE8iVo",
    title: "Bonaire",
    description: "What We Think You Should Know Before You Go!",
    adventure: "",
    ports: "port",
  },
  {
    url: "https://www.youtube.com/embed/wU5ViECAHl4",
    title: "Aruba",
    description: "What We Think You Should Know Before You Go!",
    adventure: "",
    ports: "port",
  },
];

let trips = [
  {
    date: "03/06/2023",
    ship: "Carnival Paradise",
    length: 5,
    place: " Western Carribean",
  },
  {
    date: "01/29/2023",
    ship: "Norwegian Breakaway",
    length: 7,
    place: "Western Carribean",
  },
  {
    date: "04/08/2023",
    ship: "Celebrity Apex",
    length: 7,
    place: "Eastern Carribean",
  },
  {
    date: "06/01/2023",
    ship: "Regal Princess",
    length: 12,
    place: "British Isles",
  },
];

const seed = async () => {
  await Video.bulkCreate(videos);
  await Trip.bulkCreate(trips);
};

module.exports = seed;
