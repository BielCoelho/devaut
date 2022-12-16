import { Inter, Mulish, Righteous } from '@next/font/google';

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
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});

const rightous = Righteous({
  weight: ['400'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});

export const fonts = {
  base: mulishFont.style.fontFamily,
  secondary: interFont.style.fontFamily,
  logo: rightous.style.fontFamily,
};
