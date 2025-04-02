/* eslint-disable jsx-a11y/accessible-emoji */
import { SafeAreaView, Text, StatusBar } from "react-native";
import { Navigation } from "@csb/csb-shared";

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Text>ok yessss</Text>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default App;
