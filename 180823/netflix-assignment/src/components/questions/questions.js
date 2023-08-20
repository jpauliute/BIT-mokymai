import Question from "../question";

function Questions() {
  return (
    <div className="container mx-auto py-24">
      <h2 className="text-5xl font-extrabold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <Question text="What is Netflix" />

      <Question text="How much does Netflix cost?" />

      <Question text="Where can I watch?" />

      <Question text="How do I cancel" />

      <Question text="What can I watch on Netflix" />

      <Question text="Is Netflix good for kids?" />

      <Question text="Why am I seeing this language?" />
    </div>
  );
}

export default Questions;
