const participantsDictionary = {
  don: {
    name: "Don Draper",
    img: "don-draper.jpg",
  },
  joan: {
    name: "Joan Harris",
    img: "joan-harris.webp",
  },
  paul: {
    name: "Paul Kinsey",
    img: "paul-kinsey.jpg",
  },
  peggy: {
    name: "Peggy Olson",
    img: "peggy-olson.webp",
  },
  pete: {
    name: "Pete Campbell",
    img: "pete-campbell.webp",
  },
  roger: {
    name: "Roger Sterling",
    img: "roger-sterling.avif",
  },
};

export default function Participant({ person }) {
  person = participantsDictionary[person];

  const imgUrl = `/images/participants/${person.img}`;

  return (
    <div className="participant" style={{ backgroundImage: `url(${imgUrl})` }}>
      <p className="name">{person.name}</p>
    </div>
  );
}
