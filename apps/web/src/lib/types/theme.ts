export type ThemeMode = 'system' | 'light' | 'dark';

export type ThemeColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple';

export type ThemeFontSize = 'sm' | 'md' | 'lg' | 'xl';

export type ThemeRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const defaultThemeValues = (): {
	mode: ThemeMode;
	color: ThemeColor;
	fontSize: ThemeFontSize;
	radius: ThemeRadius;
} => ({
	mode: 'system',
	color: 'blue',
	fontSize: 'md',
	radius: 'lg',
});
