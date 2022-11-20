import React, {memo, useEffect} from 'react';
import {View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Post from './Post';
import BusinessScreen from '../BusinessScreen';

const PostProvider = ({
  item,
  setPlay,
  setHeaderShown,
  activeParent,
  setActiveParent,
  activeChild,
  setActiveChild,
}) => {
  useEffect(() => {
    if (activeChild === 1) {
      setHeaderShown(false);
    }
  }, [activeChild, setHeaderShown]);

  return (
    <ViewPager
      onPageSelected={e => {
        setActiveChild(e.nativeEvent.position);
      }}
      orientation="horizontal"
      style={{flex: 1}}
      initialPage={0}>
      <View
        style={{flex: 1}}
        onTouchStart={() => {
          setHeaderShown(false);
        }}
        onTouchEnd={() => {
          if (activeChild === 1) {
            setHeaderShown(false);
          }
        }}>
        <Post item={item} setPlay={setPlay} />
      </View>
      <BusinessScreen
        item={item}
        setActive={() => {
          setActiveParent(activeParent);
          setActiveChild(0);
        }}
      />
    </ViewPager>
  );
};

export default memo(PostProvider);
