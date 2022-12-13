import { Mulish, Poppins } from '@next/font/google';

const mulishFont = Mulish({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

const poppinsFont = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const fonts = {
  base: mulishFont,
  secondary: poppinsFont,
};
