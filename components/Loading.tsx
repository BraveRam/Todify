import { FaSpinner } from "react-icons/fa6";

const Loading = () => {
  return (
    <div className="flex items-center justify-center py-48">
      <FaSpinner className="animate-spin text-5xl"/>
    </div>
  )
}

export default Loading