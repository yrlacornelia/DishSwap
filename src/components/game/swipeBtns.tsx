import { SwipeButtonProps } from "../../lib/cardData";
export default function SwipeButton({
  exit,
  removeCard,
  id,
}: SwipeButtonProps) {
  const handleSwipe = (action: 'left' | 'right') => {
    console.log(action)
    if (action === 'left') {
      exit(-200);
    } else if (action === 'right') {
      exit(200);
    }
    removeCard(id, action);
  };
  return (
    <div className="flex items-center z-30 space-x-28 mt-96 absolute">
      <button
        onClick={() => handleSwipe('left')}
        className="w-20 h-20 mt-10 rounded-full flex justify-center items-center
        border border-blue-light "    >
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
      </button>
      <button
        onClick={() => handleSwipe('right')}
        className="w-20 h-20 rounded-full mt-10 flex justify-center items-center
        border border-blue-light "       >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
      </button>
    </div>
  );
}
