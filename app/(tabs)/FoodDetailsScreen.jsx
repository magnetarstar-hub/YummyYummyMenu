import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { useLocalSearchParams, useRouter } from "expo-router";
import { styled } from "nativewind";
import { ActivityIndicator, Button, Image, View } from "react-native";

const ThemedButton = styled(Button);
const ThemedImage = styled(Image);

export default function FoodDetails() {
  const { name, desc, price, image } = useLocalSearchParams();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#27ae60" />
      </View>
    );
  }

  return (
    <View className="flex-1 p-5 bg-Background-light dark:bg-Background-dark">
      <ThemedImage
        source={{ uri: image }}
        className="w-full h-64 rounded-lg mb-6"
      />

      <View className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-6">
        <View>
          <ThemedText className="text-2xl font-extrabold text-Primary-light dark:text-Primary-dark mb-2 font-montserrat-bold">
            {name}
          </ThemedText>
          <ThemedText className="text-base text-Secondary-light dark:text-Secondary-dark font-semibold mb-2 leading-6 font-montserrat-regular">
            {desc}
          </ThemedText>
          <ThemedText className="text-xl font-semibold text-green-600 font-montserrat-bold">
            ${price}
          </ThemedText>
        </View>
      </View>

      <View className="mt-6">
        <Button
          title="Back to Menu"
          onPress={() => router.push("/MenuScreen")}
        />
      </View>
    </View>
  );
}

/* NativeWind config assumes you extended tailwind.config.js to include:
  colors: {
    Background: {
      light: '#FFF8E7',
      dark: '#1F1B24'
    },
    Primary: {
      light: '#2C5F2D',
      dark: '#A8D5BA'
    },
    Secondary: {
      light: '#7E7E7E',
      dark: '#A9A9A9'
    }
  },
  fontFamily: {
    montserrat: ['Montserrat_400Regular', 'sans-serif'],
    'montserrat-bold': ['Montserrat_700Bold', 'sans-serif'],
  }
*/
