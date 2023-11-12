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
    const newData = generateData(lastItemIndex);

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
        return prevState.slice(0, lastItemIndex - 1);
      });

      setCurrentFunc('F2');
    }
    // setIsDataProcessing(false);
  }, [currentFunc, lastItemIndex]);

  const movingEye = () => (
    <>
      {/* <BlinkingEye isScrolling={isScrolling} /> */}
      <Text style={styles.function}>{currentFunc}</Text>
    </>
  );

  useEffect(() => {
    setData(generateData(0));
    setLastItemIndex(prevState => prevState + 1);
  }, []);

  useEffect(() => {
    navigation.setOptions({headerRight: movingEye});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFunc]);

  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={item => item}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        initialNumToRender={1}
        stickySectionHeadersEnabled={true}
        onScrollBeginDrag={() => setIsScrolling(true)}
        onScrollEndDrag={() => setIsScrolling(false)}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreItem}
        onStartReachedThreshold={0.5 * lastItemIndex}
        onStartReached={unloadItem}
        ListFooterComponent={<DataProcessing />}
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
