import Header from "../components/Header";
import Footer from "../components/Footer";
import Day from "../components/Day";

function Home() {
  return (
    <div className="overflow-hidden bg-[#ebe7e1] h-full">
      <Header />
      <section className="grid grid-cols-2 mx-2 gap-x-3 md:grid-cols-4">
        <Day day={"Saturday"} />
        <Day day={"Sunday"} />
        <Day day={"Monday"} />
        <Day day={"Tuesday"} />
        <Day day={"Wednesday"} />
        <Day day={"Thursday"} />
        <Day day={"Friday"} />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
