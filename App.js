import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, Pressable,Alert } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.containerUn}>
      <View style={styles.containerDeux}>
        <Text style={styles.textUn}>Premier texte </Text>
        <Text style={styles.textDeux}>Second texte</Text>
        <Text style={styles.textTrois}>Troisième texte</Text>
      </View>

      <View style={styles.containerLoko}>
        <Image
          style={styles.loko}
          source={{
            uri:
              "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
        ></Image>
        <Image
          style={styles.loko}
          source={require("./img/konexio.png")}
        ></Image>
        
      </View>
      
     <Pressable onPress={() => alert(`Buy it, use it, break it, fix it, trash it, change it, mail, upgrade it
Charge it, point it, zoom it, press it, snap it, work it, quick erase it
Write it, cut it, paste it, save it, load it, check it, quick rewrite it
Plug it, play it, burn it, rip it, drag it, drop it, zip`)}>
        <Text>Click Me</Text>
      </Pressable>
      <ActivityIndicator size="large" color="red" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerUn: {
    backgroundColor: "blue",
  },
  containerDeux: {
    backgroundColor: "white",
  },
  textUn: {
    marginVertical: 80,
    fontSize: 30,
  },
  textDeux: {
    marginVertical: 80,
    textAlign: "center",
  },
  textTrois: {
    marginVertical: 80,
    fontWeight: "bold",
  },
  containerLoko:{
    alignItems: "center",
  
  },
  loko: {
    height: 40,
    width: 124,
    marginVertical: 16,
  }
});
