import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
export default function TransporterLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorScheme === "light" ? "#3DBC70" : "#2fa325",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#A0AEC0" : "#4A5568",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#141d30" : "#F6F6F6",
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="FavScreen"
        options={{
          title: "FavScreen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MenuScreen"
        options={{
          title: "MenuScreen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
