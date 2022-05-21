import Header from "./components/Header";
import CartContainer from "./components/CartContainer";
import DialogModal from "./components/DialogModal";
import "./App.css";

function App() {
  return (
    <div>
      <DialogModal />
      <Header />
      <CartContainer />
    </div>
  );
}

export default App;
