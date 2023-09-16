import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../store/modal";

import {
  RiAddBoxFill,
  RiCheckboxBlankLine,
  RiCheckboxLine,
  RiDeleteBin2Line,
} from "react-icons/ri";
import { planActions } from "../store/plan";

function Day(props) {
  const day = props.day;

  const dailyTasks = useSelector((state) => state.plan[day]);
  const dispatch = useDispatch();

  const addTaskHandler = (dayName) => {
    dispatch(modalActions.setOpen(true));
    dispatch(planActions.setEditingDay(dayName));
  };

  const taskDoneHandler = (id) => {
    dispatch(planActions.setEditingDay(day));
    dispatch(planActions.setDoneTask(id));
  };

  const taskDeleteHandler = (id) => {
    dispatch(planActions.setEditingDay(day));
    dispatch(planActions.setDeleteTask(id));
  };

  return (
    <div
      id={day}
      className="bg-[#fcf8f0] h-[200px] rounded-md relative my-2 md:h-[300px] shadow-md overflow-y-auto"
    >
      <h1 className="first-letter:capitalize h-max py-1 text-[#d4993b] font-bold text-xl text-center rounded-t-md bg-gradient-to-br from-[#fce0b3] to-[#f5e2c4]">
        {day}
      </h1>
      <section className="p-3 mx-2 text-lg list-decimal">
        {dailyTasks.map(
          (task) =>
            !task.delete && (
              <div
                key={task.id}
                className="flex items-center justify-between px-px my-1"
              >
                <p className="overflow-hidden text-xs md:text-base">
                  {task.taskTitle}
                </p>
                <div className="flex items-center justify-center">
                  {!task.done ? (
                    <RiCheckboxBlankLine
                      onClick={() => taskDoneHandler(task.id)}
                    />
                  ) : (
                    <RiCheckboxLine onClick={() => taskDoneHandler(task.id)} />
                  )}
                  <RiDeleteBin2Line
                    onClick={() => taskDeleteHandler(task.id)} className="ml-2"
                  />
                </div>
              </div>
            )
        )}
      </section>
      <RiAddBoxFill
        size={"1.75rem"}
        className="absolute top-[4px] right-[6px] cursor-pointer text-[#a56307] active:text-[#bd8436] md:hover:text-[#bd8436] md:active:text-[#b6833c]"
        onClick={() => addTaskHandler(day)}
      />
    </div>
  );
}

export default Day;
