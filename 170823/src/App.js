import "./App.css";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container title="Sekcijos pavadinimas">
      <Button
        classes="primary"
        text="Pirmas mygtukas"
        style={{
          fontSize: "2rem",
        }}
      />
      <Button classes="secondary" text="Antras mygtukas" />
      <Button classes="success" text="Trecias mygtukas" />
      <Button classes="danger" text="Ketvirtas mygtukas" />
      <Button classes="warning" text="Penktas mygtukas" />
      <Button classes="info" text="Sestas mygtukas" />
      <Button classes="light" text="Septintas mygtukas" />
      <Button classes="dark" text="Astuntas mygtukas" />
    </Container>
  );
}
export default App;
