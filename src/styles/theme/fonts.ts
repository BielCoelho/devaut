import { Inter, Mulish } from '@next/font/google';

const mulishFont = Mulish({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});

const interFont = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin-ext'],
  preload: true,
});

export const fonts = {
  base: mulishFont.style.fontFamily,
  secondary: interFont.style.fontFamily,
};
