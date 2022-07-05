import { FlatList } from 'react-native';

import withIOList, { IOFlatList } from './withIOList';

export default withIOList(FlatList) as typeof IOFlatList;
