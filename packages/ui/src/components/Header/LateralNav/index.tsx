import { A } from '@solidjs/router';
import Item from './Item';

interface LateralNavProps {
  transparent?: boolean;
}

const LateralNav = ({ transparent = false }: LateralNavProps) => {
  const bgColor = transparent ? '' : 'bg-bg-200';
  return (
    <div
      class={`hidden w-[300px] md:block ${bgColor} m-0 border-r border-primary-600 p-3`}>
      <Item title='Componentes'></Item>
      <div class='flex h-full'>
        <div class='h-5 w-1 bg-accent-300'></div>
        <ul class={`flex h-full flex-1 flex-col pl-4`}>
          <li>
            <A
              href='/docs/componentes/boton'
              class='font-medium text-primary-300 underline underline-offset-4'>
              Botón
            </A>
          </li>
          <span class='font-normal text-gray-200'>Test</span>
          <span class='font-normal text-gray-200'>Test</span>
          <span class='font-normal text-gray-200'>Test</span>
          <A
            class='font-normal text-gray-200 underline-offset-4 hover:text-gray-100 hover:underline'
            href='/menu'>
            Menu
          </A>
          <A
            class='font-normal text-gray-200 underline-offset-4 hover:text-gray-100 hover:underline'
            href='/calendar'>
            Calendar
          </A>
          <A
            class='font-normal text-gray-200 underline-offset-4 hover:text-gray-100 hover:underline'
            href='/mobile'>
            Mobile
          </A>
        </ul>
      </div>
    </div>
  );
};

export default LateralNav;
