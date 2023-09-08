import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../store/modal";

import { RiAddBoxFill } from "react-icons/ri";
import { planActions } from "../store/plan";

function Day(props) {
  const day = props.day;

  const dailyTasks = useSelector((state) => state.plan[day]);
  const dispatch = useDispatch();

  const addTaskHandler = (dayName) => {
    dispatch(modalActions.setOpen(true));
    dispatch(planActions.setEditingDay(dayName));
  };
  return (
    <div
      id={day}
      className="bg-[#fcf8f0] h-[200px] rounded-md relative my-2 md:h-[300px] shadow-md"
    >
      <h1 className="first-letter:capitalize h-max py-1 text-[#d4993b] font-bold text-xl text-center rounded-t-md bg-gradient-to-br from-[#fce0b3] to-[#f5e2c4]">
        {day}
      </h1>
      <section className="p-3 mx-2 text-lg list-decimal">
        {dailyTasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </section>
      <RiAddBoxFill
        size={"1.75rem"}
        className="absolute bottom-[10px] right-[10px] cursor-pointer active:text-[#f0ae51] md:hover:text-[#f0ae51] md:active:text-[#b6833c]"
        onClick={() => addTaskHandler(day)}
      />
    </div>
  );
}

export default Day;
