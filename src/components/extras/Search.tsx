import { useAppSelector } from "../../app/hooks"
import { mode } from "../../appSlices/generalSlice"


const Search = () => {
    const darkMode =useAppSelector(mode)
  return (
   <div className="px-[24px] lg:px-0">
     <div
    className={`w-full lg:w-[338px] p-[5px_10px_5px_18px] mb-[26px] lg:mb-0  shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)] flex items-center rounded-[16px] self-end ${
      darkMode === "true" ? "bg-bgBlack" : "bg-textWhite"
    }`}
  >
    <img src="/images/search.png" alt="" />
    <input
      type="text"
      placeholder="Search"
      className={`w-full p-[5px] outline-none ${
        darkMode === "true" ? "bg-bgBlack" : "bg-textWhite"
      }`}
    />
  </div>
   </div>
  )
}

export default Search