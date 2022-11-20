import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './ButtonActionStyle';

const ButtonAction = ({
  action = () => alert('action empty'),
  source,
  style,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
      style={style}
      onPress={action}>
      <Image
        style={iconStyle ? iconStyle : styles.btn__HeaderFeed}
        source={source}
      />
    </TouchableOpacity>
  );
};

export default ButtonAction;
