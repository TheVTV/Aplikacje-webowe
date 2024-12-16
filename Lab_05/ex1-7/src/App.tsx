import React from "react";
import Koszyk from "./components/koszyk/Koszyk";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
import "./App.css";
// import Licznik from "./components/liczniki/Licznik";
import Licznik from "./components/efekty/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizacja";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";
import Komentarz from "./components/produkty/Komentarz";
import Komentarze from "./components/produkty/Komentarze";

const App: React.FC = () => {
  const sampleComment = {
    id: 1,
    body: "To jest przykładowa treść komentarza.",
    postId: 1,
    likes: 5,
    user: {
      id: 1,
      username: "janek",
      fullName: "Jan Kowalski",
    },
  };

  return (
    <div>
      <h1>Moja Aplikacja</h1>
      {/* <Komentarz
        id={sampleComment.id}
        body={sampleComment.body}
        postId={sampleComment.postId}
        likes={sampleComment.likes}
        user={sampleComment.user}
      /> */}

      <Komentarze />
    </div>
  );
};

export default App;
