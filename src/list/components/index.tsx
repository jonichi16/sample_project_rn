import {View, SectionList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ListData} from '../model/ListData';
import {generateData} from '../data/listData';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/AppNavigation';
import BlinkingEye from '../../common/components/animations/BlinkingEye';

type ListProps = NativeStackScreenProps<RootStackParamList, 'List'>;

const List = ({navigation}: ListProps) => {
  const [data, setData] = useState<ListData[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  const goToItem = (item: string) => {
    navigation.navigate('Item', {item});
  };

  const renderItem = useCallback(
    ({item}: {item: string}) => {
      return <ListItem item={item} goToItem={goToItem} />;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const renderSectionHeader = useCallback(
    ({section: {title}}: {section: {title: string}}) => {
      return <ListHeader title={title} />;
    },
    [],
  );

  const movingEye = () => <BlinkingEye isScrolling={isScrolling} />;

  useEffect(() => {
    setData(generateData());
    navigation.setOptions({headerRight: movingEye});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling]);

  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        initialNumToRender={20}
        stickySectionHeadersEnabled={true}
        onScrollBeginDrag={() => setIsScrolling(true)}
        onScrollEndDrag={() => setIsScrolling(false)}
      />
    </View>
  );
};

export default List;
