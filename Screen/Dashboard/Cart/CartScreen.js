import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../../../Component/Element/MyButton';
import DineIn from './DineIn';
import Delivery from './Delivery';
import {theme} from '../../../App';

function Cart({navigation}) {
  const [tabs, setTabs] = React.useState(0);

  return (
    <View style={{flex: 1, padding: 20, backgroundColor: theme.colors.white}}>
      <View style={{flexDirection: 'row'}}>
        <MyButton
          onPress={() => setTabs(0)}
          sx={{flex: 1}}
          mode={tabs === 0 ? 'contained' : 'outlined'}
          title="Delivery"
        />
        <MyButton
          onPress={() => setTabs(1)}
          sx={{flex: 1}}
          mode={tabs === 1 ? 'contained' : 'outlined'}
          title="Dine In"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 18}}>Upcoming Orders</Text>
        <Button
          onPress={() => console.log('asd')}
          textColor={theme.colors.error}>
          Clear all
        </Button>
      </View>
      <View style={{flex: 1}}>
        {[
          {id: 0, component: <Delivery />},
          {id: 1, component: <DineIn />},
        ].map((x, y) => (
          <View key={y} style={{display: y === tabs ? 'flex' : 'none'}}>
            {x.component}
          </View>
        ))}
      </View>
    </View>
  );
}

export default Cart;
