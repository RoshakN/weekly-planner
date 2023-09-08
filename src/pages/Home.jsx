import Header from "../components/Header";
import Day from "../components/Day";
import AddTaskModal from "../components/AddTaskModal";
// import Footer from "../components/Footer";

function Home() {
  return (
    <div className="overflow-auto bg-[#ebe7e1] h-full md:h-screen">
      <AddTaskModal />
      <Header />
      <section className="grid grid-cols-2 mx-2 gap-x-3 md:grid-cols-4">
        <Day day={"saturday"} />
        <Day day={"sunday"} />
        <Day day={"monday"} />
        <Day day={"tuesday"} />
        <Day day={"wednesday"} />
        <Day day={"thursday"} />
        <Day day={"friday"} />
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
