import {useState} from "react";

type CartCounterProps = {
  counter:number
}

const CartCounter = ({ counter }: CartCounterProps) => {
  const [cartCount, setCartCount] = useState<number>(0);
  return <span>
      {cartCount}
  </span>;
};

export default CartCounter;
