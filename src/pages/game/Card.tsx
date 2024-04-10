import { CardProps } from '../../lib/cardData';
import {
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import SwipeButton from '../../components/game/swipeBtns';

const Card = ({ data, active, removeCard }: CardProps) => {
  const cardId = data && data.idMeal !== undefined ? data.idMeal : null;

  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -125, 0, 125, 200], [0, 1, 1, 1, 0]);

  // const dragEnd = (
  //   e: MouseEvent | TouchEvent | PointerEvent,
  //   info: PanInfo
  // ) => {

  //   console.log(info.offset.x)
  //   if (info.offset.x > 100) {
  //     setExitX(200);
  //     removeCard(cardId, 'right');
  //   } else if (info.offset.x < -100) {
  //     setExitX(-200);
  //     removeCard(cardId, 'left');
  //   }
  // };
  
  return (
    <>
      {active ? (
        <motion.div
       // whileTap={{ scale: 0.55 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          className="card absolute top-10 z-30 flex h-[500px] w-[300px] items-center justify-center self-center "
       //   onDragEnd={dragEnd}
          //initial={{ scale: 0.95, opacity: 0.5 }}
          // animate={{
          //   scale: 1.05,
          //   opacity: 1,
          // }}
          style={{ x, rotate, opacity }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeIn' }}
          whileDrag={{ cursor: 'grabbing' }}
          exit={{ x: exitX }}
        >
          <div className="scrollCards absolute m-auto h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-y-scroll ">
    
          <img  alt="image" src={data.strMealThumb} width={400} height={400} className="border rounded-md" />
                <div>
                    <h4>{data.strMeal}</h4>
                    <p>{data.strCategory}</p>
                </div>
         
      
          </div>
        </motion.div>
      ) : null}
      <SwipeButton exit={setExitX} removeCard={removeCard} id={cardId} />
    </>
  );
};

export default Card;