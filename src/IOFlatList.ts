import { FlatList } from 'react-native';

import withIOFlatList, { IOFlatList } from './withIOFlatList';

export default withIOFlatList(FlatList) as typeof IOFlatList;
