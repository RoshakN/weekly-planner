import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../store/modal";

import { RiAddBoxFill } from "react-icons/ri";

function Day(props) {
  const plans = useSelector((state) => state.plan.saturday);
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    dispatch(modalActions.setOpen(true));
  };
  return (
    <div className="bg-[#fcf8f0] h-[200px] rounded-md relative my-2 md:h-[300px] shadow-md">
      <h1 className="first-letter:capitalize h-max py-1 text-[#d4993b] font-bold text-xl text-center rounded-t-md bg-gradient-to-br from-[#fce0b3] to-[#f5e2c4]">
        {props.day}
      </h1>
      <section className="p-3 mx-2 text-lg list-decimal">
        {plans.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </section>
      <RiAddBoxFill
        size={"1.75rem"}
        className="absolute bottom-[10px] right-[10px] cursor-pointer active:text-[#f0ae51] md:hover:text-[#f0ae51] md:active:text-[#b6833c]"
        onClick={addTaskHandler}
      />
    </div>
  );
}

export default Day;
