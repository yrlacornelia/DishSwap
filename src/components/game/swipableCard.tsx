import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { useState } from 'react';

export const SwipableCard = ({ image, heading, description }) => {
    const motionValue = useMotionValue(0);
    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
    const opacityValue = useTransform(
        motionValue,
        [-200, -150, 0, 150, 200],
        [0, 1, 1, 1, 0]
    );

    const animControls = useAnimation();
    return (
        <div>

            <motion.div
                drag='x'
                style={{
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
                    if (Math.abs(info.point.x) >= 200) {
                      console.log("gone")
                    }
                
                }}

            >
                <img alt="image" src={image} width={400} height={400} className="border rounded-md" />
                <div>
                    <h4>{heading}</h4>
                    <p>{description}</p>
                </div>
            </motion.div>
        </div>
    );
}

export default SwipableCard;
