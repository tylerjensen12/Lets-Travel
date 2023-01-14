const { Video } = require("./models");
let videos = [
  {
    url: "https://www.youtube.com/embed/x0tirIu4oGI",
    title: "Sky Princess",
    description: "St. John, turtle snorkeling",
    adventure: true,
    port: false,
  },
  {
    url: "https://www.youtube.com/embed/s6wGNSOcmhs",
    title: "Sky Princess",
    description: "Princess cayes snorkeling",
    adventure: true,
    port: false,
  },
  {
    url: src="https://www.youtube.com/embed/k0MtyrRqNTw",
    title: "Sky Princess",
    description: "Embarkation, balcony tour",
    adventure: true,
    port: false,
  },
  {
    url: "https://www.youtube.com/embed/aGGamPdnQFg",
    title: "Mail Monday",
    description: "---",
    adventure: true,
    port: false,
  },
  {
    url: "https://www.youtube.com/embed/wwAYIALZRog",
    title: "MunchPak",
    description: "Dec. 2022",
    adventure: true,
    port: false,
  },
];

const seed = async () => {
  await Video.bulkCreate(videos);
};

module.exports = seed;
