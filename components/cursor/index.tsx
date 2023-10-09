"use client";

import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CursorProps {
  sticktyElement: React.RefObject<HTMLElement>;
}

/**
 * Cursor component
 * An animated circle that follows the mouse cursor
 */
const Cursor: React.FC<CursorProps> = ({ sticktyElement }) => {
  // Logo hover state
  const [isHovering, setIsHovering] = useState(false);
  // Cursor ref
  const cursorRef = useRef(null);
  // Cursor size
  const size = isHovering ? 70 : 0;
  // Mouse position
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Rotate the cursor
  const rotateCursor = (distance: { x: number; y: number }) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: angle + "rad" }, { duration: 0 });
  };

  // Mouse move event
  const manageMouseMove = (e: { clientX: number; clientY: number }) => {
    const element = sticktyElement.current;
    if (!element) return;
    const {
      left = 0,
      top = 0,
      width = 0,
      height = 0,
    } = element.getBoundingClientRect();
    // Element center
    const center = {
      x: left + width / 2,
      y: top + height / 2,
    };
    const distance = {
      x: e.clientX - center.x,
      y: e.clientY - center.y,
    };

    if (isHovering) {
      // Rotate the cursor to the mouse position
      rotateCursor(distance);
      // stretch cursor based on distance and cursor
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      // Move cursor based on distance
      mouse.x.set(center.x - size / 2 + distance.x * 0.12);
      mouse.y.set(center.y - size / 2 + distance.y * 0.12);
    } else {
      mouse.x.set(e.clientX - size / 2);
      mouse.y.set(e.clientY - size / 2);
    }
  };

  // Mouse over event
  const manageMouseOver = () => {
    setIsHovering(true);
  };
  // Mouse leave event
  const manageMouseLeave = () => {
    setIsHovering(false);
    animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0.3 });
  };
  // Mouse move event listener
  useEffect(() => {
    const element = sticktyElement.current;
    window.addEventListener("mousemove", manageMouseMove);
    element?.addEventListener("mouseover", manageMouseOver);
    element?.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      element?.removeEventListener("mousemove", manageMouseOver);
      element?.removeEventListener("mouseleave", manageMouseLeave);
    };
  });
  // Smooth mouse options
  const smoothMouseOptions = {
    damping: 20,
    stiffness: 300,
    mas: 0.5,
  };
  // Smooth mouse position
  const smoothMouse = {
    x: useSpring(mouse.x, smoothMouseOptions),
    y: useSpring(mouse.y, smoothMouseOptions),
  };

  // Cursor scale
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  // Rotation Transform template
  const template = ({
    rotate,
    scaleX,
    scaleY,
  }: {
    rotate: string;
    scaleX: number;
    scaleY: number;
  }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <motion.div
      ref={cursorRef}
      className="bg-black dark:bg-white fixed rounded-full pointer-events-none hidden md:block"
      transformTemplate={template}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{ width: size, height: size }}
    ></motion.div>
  );
};

export default Cursor;
