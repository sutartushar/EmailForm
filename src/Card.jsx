const array = [
  "Presentation Designer",
  "Audio-Visualproduction",
  "Translation Service",
  "Graphics Design",
  "Research & Analytics",
  "Data Processing",
];

export default function Card() {
  return (
    <>
      {array.map((items, index) => (
        <div className="card1" key={index}>
          <h3>{items}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            quo.
          </p>
        </div>
      ))}
    </>
  );
}
