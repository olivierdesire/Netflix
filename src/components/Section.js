const Section = ({ element }) => {
  //   console.log(element);
  return (
    <section>
      <h1>{element.category}</h1>
      <div>
        {element.images.map((url, index) => {
          console.log(url);
          return <img key={index} src={url} alt="snapshot" />;
        })}
      </div>
    </section>
  );
};

export default Section;
