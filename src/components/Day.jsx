import AddTask from "./AddTask";

function Day(props) {
  return (
    <div className="bg-[#fcf8f0] h-[200px] rounded-md relative">
      <h1 className="h-max text-[#d4993b] font-bold text-lg text-center my-1 bg-gradient-to-br from-[#fce0b3] to-[#f5e2c4]">
        {props.day}
      </h1>
      <section className="m-3 text-base list-decimal">
        <li>task1</li>
        <li>task2</li>
      </section>
      <AddTask />
    </div>
  );
}

export default Day;
