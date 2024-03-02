import React from 'react';
import clsx from 'clsx';

import { ButtonProps } from '../_types/button';

const VARIANTS = {
  outline: 'border-[1.2px] border-eco-500 text-eco-500 font-medium',
  solid: 'bg-eco-500  text-white',
};

const Button = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>,
) => {
  const { children, as, className, variant, ...buttonProps } = props;
  const Component = as || 'button';
  const buttonClasses = 'px-[32px] py-[12px] rounded-[3px] text-[16px]';

  return (
    <Component
      className={clsx(buttonClasses, variant && VARIANTS[variant], className)}
      {...buttonProps}
    >
      {!props.isLoading && children}
    </Component>
  );
};

export default Button;
