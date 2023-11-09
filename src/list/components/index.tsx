import {View, SectionList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ListData} from '../model/ListData';
import {generateData} from '../data/listData';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

const List = () => {
  const [data, setData] = useState<ListData[]>([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  const renderItem = useCallback(({item}: {item: string}) => {
    return <ListItem item={item} />;
  }, []);

  const renderSectionHeader = useCallback(
    ({section: {title}}: {section: {title: string}}) => {
      return <ListHeader title={title} />;
    },
    [],
  );

  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default List;
