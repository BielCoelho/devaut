import { ButtonVariant } from '../Button.interfaces';

export const getButtonVariants = (variant: ButtonVariant) => {
  const baseClasses =
    'inline-block py-2 px-4 w-full min-w-fit rounded-lg transition ease-linear duration-50';
  const primaryClasses =
    'text-base font-bold bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800 text-white';
  const secondaryClasses =
    'text-base font-bold border-2 border-orange-500 text-orange-500 bg-orange-100 active:text-orange-700 hover:border-orange-600 focus:border-orange-600 active:border-orange-800 active:bg-orange-200';
  const tertiaryClasses =
    'border-2 border-orange-500 text-orange-500 bg-orange-100 active:text-orange-700 hover:border-orange-600 focus:border-orange-600 active:border-orange-800 active:bg-orange-200';

  switch (variant) {
    case ButtonVariant.PRIMARY:
      return `${baseClasses} ${primaryClasses}`;
    case ButtonVariant.SECONDARY:
      return `${baseClasses} ${secondaryClasses}`;
    case ButtonVariant.TERTIARY:
      return `${baseClasses} ${tertiaryClasses}`;
    default:
      return `${baseClasses} ${primaryClasses}`;
  }
};
