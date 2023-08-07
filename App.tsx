import { useFonts } from 'expo-font';
import { useColorScheme } from 'react-native';
import {
	TamaguiProvider,
	Theme,
	YStack,
	TextArea,
	XStack,
	Label,
	Input,
	Switch,
} from 'tamagui';
import config from './tamagui.config';

export default function App() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),

		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	});
	if (!loaded) {
		return null;
	}
	return (
		<TamaguiProvider config={config}>
			<Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
				<YStack padding='$3' minWidth={300} space='$4'>
					<XStack alignItems='center' space='$4'>
						<Label width={90} htmlFor='name'>
							Name
						</Label>
						<Input flex={1} id='name' defaultValue='Nate Wienert' />
					</XStack>

					<XStack alignItems='center' space='$4'>
						<Label width={90} htmlFor='notify'>
							Notifications
						</Label>
						<Switch id='notify'>
							<Switch.Thumb animation='quick' />
						</Switch>
					</XStack>
				</YStack>
			</Theme>
		</TamaguiProvider>
	);
}
