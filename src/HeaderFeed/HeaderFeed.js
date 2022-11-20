import React from 'react';
import {View} from 'react-native';
import {filter, like, search, share} from '../assets';
import styles from './HeaderFeedStyle';
import ButtonAction from '../ButtonAction';

const HeaderFeed = () => {
  return (
    <View style={styles.container__HeaderFeed}>
      <View style={styles.left__HeaderFeed}>
        <ButtonAction style={styles.left_btn__HeaderFeed} source={filter} />
      </View>
      <View style={styles.right__HeaderFeed}>
        <ButtonAction style={styles.right_btn__HeaderFeed} source={search} />
        <ButtonAction style={styles.right_btn__HeaderFeed} source={like} />
        <ButtonAction style={styles.right_btn__HeaderFeed} source={share} />
      </View>
    </View>
  );
};

export default HeaderFeed;
