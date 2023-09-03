import { RiAddBoxFill } from "react-icons/ri";

function AddTask() {
  return (
    <div className="absolute bottom-[10px] right-[10px] cursor-pointer active:text-[#f0ae51] md:hover:text-[#f0ae51] md:active:text-[#b6833c]">
      <RiAddBoxFill size={"1.75rem"} />
    </div>
  );
}

export default AddTask;
