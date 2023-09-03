import AddTask from "./AddTask";

function Day(props) {
  return (
    <div className="bg-[#fcf8f0] h-[200px] rounded-md relative my-2 md:h-[300px] shadow-md">
      <h1 className="h-max py-1 text-[#d4993b] font-bold text-xl text-center rounded-t-md bg-gradient-to-br from-[#fce0b3] to-[#f5e2c4]">
        {props.day}
      </h1>
      <section className="p-3 mx-2 text-lg list-decimal">
        <li>task1</li>
        <li>task2</li>
      </section>
      <AddTask />
    </div>
  );
}

export default Day;
