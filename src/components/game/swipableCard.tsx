import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

export const SwipableCard = ({ image, color }) => {
    const motionValue = useMotionValue(0);
    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);

    const opacityValue = useTransform(
        motionValue,
        [-200, -150, 0, 150, 200],
        [0, 1, 1, 1, 0]
    );

    const animControls = useAnimation();

    const style = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        boxShadow: '5px 10px 18px #888888',
        borderRadius: 10,
        height: 160,

    };

    return (
        <div>
            <motion.div
                drag='x'
                style={{
                    ...style,
                    x: motionValue,       
                    rotate: rotateValue,
                    opacity: opacityValue,
                    userSelect: 'none' 
                }}
                dragConstraints={{ left: -1000, right: 1000 }}
                onDragEnd={(event, info) => {
                  if (Math.abs(info.point.x) <= 150) {
                      animControls.start({ x: 0 });
                  } else {
                      animControls.start({ x: info.point.x < 0 ? -200 : 200 });
                  }
              }}
         
            />
        </div>)
}
 
export default Card;