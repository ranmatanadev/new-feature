import React, {useEffect, useState, useCallback} from 'react';
import {View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {PostProvider} from './src/Post';
import HeaderFeed from './src/HeaderFeed';

const posts = [
  {
    id: 0,
    businessId: 12,
    type: 0,
    name: 'מועדון השלוותא',
    description:
      'יום שישי הכי חם שהולך להיות, אתם מוכנים??? 21+ בר אלכוהול, DJ SHARP על העמדה ועוד המון בלאגן.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx03QYq0zf_ACJPQwE0agr7IayNxWeWvO25Q&usqp=CAU',
    timeArrived: '12:30',
    likes: 9444,
    comments: 6340,
    arriving: 111,
    photo:
      'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/05/ibiza-opening-parties-20171.jpg',
    liked: true,
  },
  {
    id: 1,
    businessId: 13,
    type: 0,
    name: 'מועדון הלייט האוס',
    description:
      'יום שישי הכי חם שהולך להיות, אתם מוכנים??? 21+ בר אלכוהול, DJ SHARP על העמדה ועוד המון בלאגן.',
    logo: 'https://img.freepik.com/premium-vector/light-house-logo-template-with-white-background_327390-128.jpg?w=2000',
    timeArrived: '12:30',
    likes: 444,
    comments: 340,
    arriving: 11,
    photo: 'https://m.media-amazon.com/images/I/5184+Ql-PiL._SL500_.jpg',
    liked: false,
  },
];

const App = () => {
  const [activeParent, setActiveParent] = useState(0);
  const [activeChild, setActiveChild] = useState(0);
  const [play, setPlay] = useState(true);
  const [headerShown, setHeaderShown] = useState(true);

  const setHeaderShownCallback = useCallback(val => {
    setHeaderShown(val);
  }, []);

  const setPlayCallback = useCallback(() => {
    const innerPlay = !play;
    if (innerPlay) {
      alert('play');
    } else {
      alert('stop');
    }
    setPlay(!play);
  }, [play]);

  useEffect(() => {
    setHeaderShown(true);
  }, [activeParent]);

  useEffect(() => {
    if (activeChild === 0) {
      setHeaderShown(true);
    }
  }, [activeChild]);

  return (
    <View style={[{flex: 1, backgroundColor: 'white'}]}>
      {headerShown && <HeaderFeed item={posts[activeParent]} />}
      <ViewPager
        onPageSelected={e => {
          setActiveParent(e.nativeEvent.position);
        }}
        orientation="vertical"
        style={{flex: 1}}
        initialPage={0}
        scrollEnabled={activeChild !== 1}>
        {posts.map((item, index) => (
          <View
            key={item?.id}
            onTouchEnd={() => {
              if (activeParent === index && activeChild === 0) {
                setHeaderShown(true);
              }
            }}>
            <PostProvider
              setHeaderShown={setHeaderShownCallback}
              item={item}
              setPlay={setPlayCallback}
              activeParent={activeParent}
              setActiveParent={setActiveParent}
              activeChild={activeChild}
              setActiveChild={setActiveChild}
            />
          </View>
        ))}
      </ViewPager>
    </View>
  );
};

export default App;
