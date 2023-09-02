import { RiAddBoxFill } from "react-icons/ri";

function AddTask() {
  return (
    <div className="absolute bottom-[10px] right-[10px] cursor-pointer hover:text-[#f0ae51]">
      <RiAddBoxFill size={"1.75rem"} />
    </div>
  );
}

export default AddTask;
