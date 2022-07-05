import { FlatList } from 'react-native';

import withIOFlatList, { IOFlatList } from './withIOFlatlist';

export default withIOFlatList(FlatList) as typeof IOFlatList;
