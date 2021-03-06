import React from "react";
import { View, Text } from "react-native";
import { HeaderBackButton, NavigationActions } from "react-navigation";

class app extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <HeaderBackButton
        onPress={() =>
          navigation.navigate(
            "Home",
            {},
            NavigationActions.navigate({ routeName: "Home" })
          )
        }
      />
    ),
    headerTitle: "Configuration"
  });

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{"Configuration Screen"}</Text>
      </View>
    );
  }
}

export default app;
