import {TextStyle} from 'react-native';

type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export const fontSize: Record<FontSize, TextStyle> = {
  xs: {
    fontSize: 13,
  },
  sm: {
    fontSize: 14,
  },
  md: {
    fontSize: 16,
  },
  lg: {
    fontSize: 20,
  },
  xl: {
    fontSize: 24,
  },
  xxl: {
    fontSize: 32,
  },
  xxxl: {
    fontSize: 38,
  },
};

type FontWeight = 'regular' | 'semibold' | 'bold';
export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    fontWeight: '400',
  },
  semibold: {
    fontWeight: '600',
  },
  bold: {
    fontWeight: '700',
  },
};

type Header = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export const header: Record<Header, TextStyle> = {
  xs: {
    ...fontSize.xs,
    ...fontWeight.bold,
  },
  sm: {
    ...fontSize.sm,
    ...fontWeight.bold,
  },
  md: {
    ...fontSize.md,
    ...fontWeight.bold,
  },
  lg: {
    ...fontSize.lg,
    ...fontWeight.bold,
  },
  xl: {
    ...fontSize.xl,
    ...fontWeight.bold,
  },
  xxl: {
    ...fontSize.xxl,
    ...fontWeight.bold,
  },
  xxxl: {
    ...fontSize.xxxl,
    ...fontWeight.bold,
  },
};

type SubHeader = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export const subHeader: Record<SubHeader, TextStyle> = {
  xs: {
    ...fontSize.xs,
    ...fontWeight.semibold,
  },
  sm: {
    ...fontSize.sm,
    ...fontWeight.semibold,
  },
  md: {
    ...fontSize.md,
    ...fontWeight.semibold,
  },
  lg: {
    ...fontSize.lg,
    ...fontWeight.semibold,
  },
  xl: {
    ...fontSize.xl,
    ...fontWeight.semibold,
  },
  xxl: {
    ...fontSize.xxl,
    ...fontWeight.semibold,
  },
  xxxl: {
    ...fontSize.xxxl,
    ...fontWeight.semibold,
  },
};

type Body = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export const body: Record<Body, TextStyle> = {
  xs: {
    ...fontSize.xs,
    ...fontWeight.regular,
  },
  sm: {
    ...fontSize.sm,
    ...fontWeight.regular,
  },
  md: {
    ...fontSize.md,
    ...fontWeight.regular,
  },
  lg: {
    ...fontSize.lg,
    ...fontWeight.regular,
  },
  xl: {
    ...fontSize.xl,
    ...fontWeight.regular,
  },
  xxl: {
    ...fontSize.xxl,
    ...fontWeight.regular,
  },
  xxxl: {
    ...fontSize.xxxl,
    ...fontWeight.regular,
  },
};
