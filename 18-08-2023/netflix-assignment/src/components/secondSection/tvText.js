function TvText({ heading, text }) {
  return (
    <div className="max-w-[50%]">
      <h2 className="text-5xl font-extrabold mb-4 pt-20">{heading}</h2>

      <p className="text-lg">{text}</p>
    </div>
  );
}

export default TvText;
