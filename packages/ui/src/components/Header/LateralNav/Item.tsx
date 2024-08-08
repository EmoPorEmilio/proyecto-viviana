import { JSX } from 'solid-js';

interface ItemProps {
  title: string;
  children?: JSX.Element;
}

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <li class='flex items-center'>
      <span class='text-lg text-primary-200 font-bold'>{props.title}</span>
      {children}
    </li>
  );
};

export default Item;
