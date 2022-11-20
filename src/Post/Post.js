import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './PostStyle';
import LinearGradient from 'react-native-linear-gradient';
import Pressable from '../Pressable';

const Post = ({item, setPlay, onCloseFilter, filterIsOpen}) => {
  const {
    id,
    businessId,
    name,
    description,
    logo,
    likes,
    comments,
    arriving,
    photo,
  } = item;

  const orderPlace = () => {
    alert('order place');
  };

  return (
    <Pressable
      businessId={businessId}
      singleTap={() => {
        if (filterIsOpen) {
          onCloseFilter();
        } else {
          setPlay();
        }
      }}
      doubleTap={() => {
        alert(`like item: ${id}`);
      }}
      onLongPress={() => {
        orderPlace();
      }}
      delay={200}>
      <LinearGradient
        colors={['rgba(0,0,0,.3)', 'transparent']}
        style={styles.topLinearGradient__Post}
      />
      <View style={styles.container__Post}>
        <Image
          source={{
            uri: photo,
          }}
          style={styles.item__Post}
        />
      </View>
      <View style={styles.container_body__Post}>
        <View style={styles.container_logo_name__Post}>
          <TouchableOpacity
            style={styles.logo_post_container__Post}
            hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
            <Image
              resizeMode="contain"
              source={{
                uri: logo,
              }}
              style={styles.logo_post__Post}
            />
          </TouchableOpacity>

          <View style={styles.name_container__Post}>
            <Text style={styles.name_post}>{name}</Text>
          </View>
        </View>
        <View style={styles.details_container__Post}>
          <View style={styles.order_container__Post}>
            <TouchableOpacity
              onPress={() => orderPlace()}
              style={styles.order__Post}
              hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
              <Text style={styles.order_text__Post}>dsladm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.desc_container__Post}>
            <Text style={styles.desc_text__Post}>{description}</Text>
          </View>
        </View>
        <View style={styles.values_container__Post}>
          <View style={styles.values_data__Post}>
            <Text style={[styles.details_title, {fontSize: 20}]}>
              fmklsadsa
            </Text>
            <Text style={styles.details_title}>dfnslk</Text>
          </View>
          <View style={styles.values_data__Post}>
            <Text style={[styles.details_title, {fontSize: 20}]}>dsadsa</Text>
            <Text style={styles.details_title}>fdsfds</Text>
          </View>
          <View style={styles.values_data__Post}>
            <Text style={[styles.details_title, {fontSize: 20}]}>dsa</Text>
            <Text style={styles.details_title}>fdsfsd</Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={['transparent', '#614080']}
        style={styles.bottomLinearGradient__Post}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.4)']}
        style={styles.bottomLinearGradient__Post}
      />
    </Pressable>
  );
};

export default Post;
