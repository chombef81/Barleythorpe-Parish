import { Hero, Volunteer, Aims, Footer, Subscribe } from "./sections";
import Nav from "./commponents/Nav";

const App = () => {
  return (
    <main className="relative bg-gray-200">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section className=" bg-stone-100 padding">
        <Volunteer />
      </section>
      <section className="padding">
        <Aims />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
