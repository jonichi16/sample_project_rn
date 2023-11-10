import {View, SectionList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ListData} from '../model/ListData';
import {generateData} from '../data/listData';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/AppNavigation';

type ListProps = NativeStackScreenProps<RootStackParamList, 'List'>;

const List = ({navigation}: ListProps) => {
  const [data, setData] = useState<ListData[]>([]);

  const goToItem = (item: string) => {
    navigation.navigate('Item', {item});
  };

  const renderItem = useCallback(
    ({item, index}: {item: string; index: number}) => {
      return <ListItem item={item} index={index} goToItem={goToItem} />;
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

  useEffect(() => {
    setData(generateData());
  }, []);

  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        initialNumToRender={20}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
};

export default List;
