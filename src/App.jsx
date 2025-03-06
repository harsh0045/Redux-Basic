import Auth from "./components/Auth";
import Counter from "./components/Counter";

 const App = () => {
  return (
    <div>
      <h1>Redux Counter</h1>
      <Counter />
      <Auth/>
    </div>
  );
};

export default App;