const Section = (element) => {
  return (
    <section key={element.index}>
      <h1>{element.category}</h1>
      <div>
        {element.images.map((element, index) => {
          // console.log(element);
          return <img key={index} src={element} alt={element} />;
        })}
      </div>
    </section>
  );
};

export default Section;
