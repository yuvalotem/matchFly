import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  return (
  <View View style={styles.container}>
    <View style={styles.header}><Text style={styles.headline}>Hello Yuval,</Text></View>
    <View style={styles.flights}><Text style={styles.boxHeader}>Open flights</Text></View>
    <View style={styles.exchanges}><Text style={styles.boxHeader}>Open exchanges</Text></View>
  </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#dfe6e9",
        flex: 1,
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignSelf: "flex-end",
        flex: 1
    },
    headline:{
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    },
  flights: {
        backgroundColor: "#81ecec",
        flex: 3,
        width: "95%",
        margin: 10,
        borderRadius: 10
  },
   exchanges: {
          backgroundColor: "#fdcb6e",
          flex: 2,
          width: "95%",
          margin: 10,
          borderRadius: 10
    },
    boxHeader:{
        color:'white',
        alignSelf:'center',
        fontSize: 20
    }
});

export default HomeScreen;
