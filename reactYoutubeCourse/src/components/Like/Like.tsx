import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}
export const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return <AiFillHeart color="#ff6b81" size={30} onClick={toggle} />;
  }
  return <AiOutlineHeart size={30} onClick={toggle} />;
};
