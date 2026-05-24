import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <View className="flex-1 items-center justify-center bg-white dark:bg-gray-950 p-8">
        <Text className="text-6xl font-bold text-gray-300 dark:text-gray-700">
          404
        </Text>
        <Text className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center">
          This screen doesn't exist.
        </Text>
        <Link href="/" className="mt-8">
          <Text className="text-blue-500 text-base font-semibold">
            Go to home screen
          </Text>
        </Link>
      </View>
    </>
  );
}
