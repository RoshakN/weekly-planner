import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../store/modal";
import { planActions } from "../store/plan";

import { RiCloseCircleFill } from "react-icons/ri";
import { Fragment } from "react";

function AddTaskModal() {
  const modalState = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(planActions.addTask(modalState.text));
    dispatch(modalActions.setOpen(false));
  };

  const closeHandler = () => {
    dispatch(modalActions.setOpen(false));
  };

  const handleChange = () => {
    dispatch(modalActions.setText(event.target.value));
  };

  return (
    <Fragment>
      {modalState.open && (
        <div className="z-50 bg-[#fcf8f0] bg-opacity-40 h-screen w-screen fixed flex justify-center items-center">
          <div className="w-1/2 bg-gradient-to-br from-[#fce0b3] to-[#f5e2c4] h-1/3 flex flex-col items-center justify-between rounded-lg">
            <div className="flex font-fredericka w-full h-max items-center bg-gradient-to-br from-[#f8d49a] to-[#f1b95f] rounded-t-lg">
              <h1 className="p-3 text-xl">Create a new task</h1>
              <RiCloseCircleFill
                className="m-3 ml-auto cursor-pointer hover:text-[#efefef]"
                onClick={closeHandler}
              />
            </div>
            <input autoFocus
              type="text"
              placeholder="New Task..."
              className="w-3/4 p-2 focus-within:outline-[#f1b95f]"
              onChange={handleChange}
            />
            <div className="flex justify-between w-3/4 py-2 mb-5 text-sm md:text-base">
              <button
                className="bg-gradient-to-br from-[#f8d49a] to-[#f1b95f] p-2 w-1/3 rounded-sm"
                onClick={addHandler}
              >
                Add
              </button>
              <button
                className="rounded-sm bg-gradient-to-br from-[#f8d49a] to-[#f1b95f] p-2 w-1/3"
                onClick={closeHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default AddTaskModal;
