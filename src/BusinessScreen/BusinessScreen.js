import {Text, View} from 'react-native';
import React from 'react';
import styles from './BusinessScreenStyle';

const BusinessScreen = ({item, setActive}) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default BusinessScreen;
