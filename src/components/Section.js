const Section = (props) => {
  return (
    <section key={index}>
      <h1>{element.category}</h1>
      <div>
        {tabMovies[index].images.map((element, index) => {
          // console.log(element);
          return <img key={index} src={element} alt={element} />;
        })}
      </div>
    </section>
  );
};

export default Section;
