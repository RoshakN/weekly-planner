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
        <div className="z-50 bg-[#fcf8f0] h-screen w-screen fixed flex justify-center items-center">
          <div className="w-1/2 bg-gradient-to-br from-[#fce0b3] to-[#f5e2c4] h-1/3 flex flex-col items-center rounded-lg">
            <div className="flex font-greatVibes w-full h-max items-center bg-gradient-to-br from-[#f8d49a] to-[#f1b95f] rounded-t-lg">
              <h1 className="p-3 text-xl">Create a new task</h1>
              <RiCloseCircleFill
                className="m-3 ml-auto cursor-pointer hover:text-[#efefef]"
                onClick={closeHandler}
              />
            </div>
            <input
              type="text"
              placeholder="New Task..."
              className="h-8 w-3/4 md:w-1/2 placeholder:p-2 mt-auto mb-5"
              onChange={handleChange}
            />
            <div className="p-5 w-3/4 flex justify-around text-sm md:text-base">
              <button
                className="bg-gradient-to-br from-[#f8d49a] to-[#f1b95f] p-2"
                onClick={addHandler}
              >
                Add
              </button>
              <button
                className="bg-gradient-to-br from-[#f8d49a] to-[#f1b95f] p-2"
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
