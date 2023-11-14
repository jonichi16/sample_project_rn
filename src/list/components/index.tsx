import {View, SectionList, Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ListData} from '../model/ListData';
import {generateData} from '../data/listData';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/AppNavigation';
import BlinkingEye from '../../common/components/animations/BlinkingEye';
import {Colors, Typography} from '../../common/styles';
import DataProcessing from './DataProcessing';

type ListProps = NativeStackScreenProps<RootStackParamList, 'List'>;

const List = ({navigation}: ListProps) => {
  const [data, setData] = useState<ListData[]>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [currentFunc, setCurrentFunc] = useState<string>('');
  const [lastItemIndex, setLastItemIndex] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const goToItem = useCallback(
    (item: string) => {
      navigation.navigate('Item', {item});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: string}) => {
      return <ListItem item={item} goToItem={goToItem} />;
    },
    [goToItem],
  );

  const renderSectionHeader = useCallback(
    ({section: {title}}: {section: {title: string}}) => {
      return <ListHeader title={title} />;
    },
    [],
  );

  const loadMoreItem = useCallback(() => {
    const newData = generateData(lastItemIndex, 1);

    setData(prevState => {
      return [...prevState, ...newData];
    });

    setLastItemIndex(prevState => prevState + 1);
    setCurrentFunc('F1');
  }, [lastItemIndex]);

  const unloadItem = useCallback(() => {
    if (currentFunc === 'F1') {
      setLastItemIndex(prevState => prevState - 1);

      setData(prevState => {
        return prevState.splice(0, lastItemIndex - 1);
      });

      setCurrentFunc('F2');
    }
    // setIsDataProcessing(false);
  }, [currentFunc, lastItemIndex]);

  const onViewItemsChangeHandler = ({viewableItems}: any) => {
    if (
      viewableItems[viewableItems.length - 1] &&
      viewableItems[viewableItems.length - 1].item === 'A - item 16'
    ) {
      setCurrentFunc('');
    }
  };

  const onScrollHandler = useCallback(
    (event: any) => {
      if (
        event.nativeEvent.velocity?.y > 0 &&
        event.nativeEvent.contentOffset.y >= 3320 * (data.length - 1)
      ) {
        console.log('F1');
        loadMoreItem();
      } else if (
        event.nativeEvent.velocity?.y < 0 &&
        event.nativeEvent.contentOffset.y <= 1200 * data.length &&
        currentFunc !== ''
      ) {
        console.log('F2');
        unloadItem();
      }

      console.log(event.nativeEvent.velocity.y);
    },
    [currentFunc, data.length, loadMoreItem, unloadItem],
  );

  const movingEye = () => (
    <>
      {/* <BlinkingEye isScrolling={isScrolling} /> */}
      <Text style={styles.function}>{currentFunc}</Text>
    </>
  );

  useEffect(() => {
    setData(generateData(0, 2));
    setLastItemIndex(prevState => prevState + 2);
  }, []);

  useEffect(() => {
    setIsLast(data.length === 26);
    console.log(data.length);
    // console.log(data[data.length - 1]);
  }, [data]);

  useEffect(() => {
    navigation.setOptions({headerRight: movingEye});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling, currentFunc]);

  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={item => item}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        initialNumToRender={20}
        stickySectionHeadersEnabled={true}
        // onScrollBeginDrag={() => setIsScrolling(true)}
        // onScrollEndDrag={() => setIsScrolling(false)}
        // onEndReachedThreshold={currentFunc === 'F1' ? 9 : 7}
        // onEndReached={currentFunc === 'F1' ? unloadItem : loadMoreItem}
        // onStartReachedThreshold={5}
        // onStartReached={unloadItem}
        onScroll={onScrollHandler}
        maxToRenderPerBatch={15}
        onViewableItemsChanged={onViewItemsChangeHandler}
        windowSize={100}
        initialScrollIndex={0}
        ListFooterComponent={<DataProcessing isLast={isLast} />}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  function: {
    ...Typography.subHeader.lg,
    color: Colors.primary.dark,
    marginLeft: 8,
  },
  loading: {
    ...Typography.header.lg,
    color: Colors.primary.dark,
  },
});
