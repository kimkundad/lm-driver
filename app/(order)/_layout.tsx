import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="detail" options={{ headerShown: false }} />
      <Stack.Screen name="success" options={{ headerShown: false }} />
      <Stack.Screen name="danger" options={{ headerShown: false }} />
    </Stack>
  );
}
