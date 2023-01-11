import React from 'react';
import {
  View,
  SectionList,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {theme} from '../../../App';
import {FormatCurrency} from '../../../Component/FormatCurrency';
import MyButton from '../../../Component/Element/MyButton';
import IconContained from '../../../Component/Element/IconContained';

function SugestionSection({
  onPressItem,
  handleFavorite,
  isFavorite,
  navigate,
  setQuantity,
  quantity,
  params,
}) {
  const {label, images, review, duration, desc, price} = params;
  const sectionData = [
    {
      title: 'Best Seller',
      data: [
        {
          id: '14',
          label: 'Pizza Mercury',
          price: 12000,
          review: '1.2k',
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '15',
          label: 'Cappucino Ice',
          price: 12000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '16',
          label: 'Noodle Spicy',
          price: 12000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '17',
          label: 'Chicken Strip',
          price: 12000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    },
    {
      title: 'Recomended for you',
      data: [
        {
          id: '1',
          label: 'Rice Bowl',
          price: 12000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/1320917/pexels-photo-1320917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '12',
          label: 'Beef Melt',
          price: 12000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '190',
          label: 'Orange Juice',
          price: 12000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '13',
          label: 'Dragon Fruit Juice',
          price: 12000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/13906952/pexels-photo-13906952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    },
  ];
  const {width} = Dimensions.get('window');
  return (
    <View>
      <SectionList
        ListHeaderComponent={
          <ScrollView style={{flex: 1}}>
            <View style={{position: 'relative'}}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                data={images}
                keyExtractor={item => item.imgLink}
                renderItem={({item, index}) => {
                  return (
                    <Image
                      source={{uri: item.imgLink}}
                      resizeMode="cover"
                      style={{width: width, height: 300}}
                    />
                  );
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: width,
                  padding: 10,
                }}>
                <IconContained onPress={() => navigate.goBack()} icon="left" />
                <IconContained
                  onPress={handleFavorite}
                  icon={isFavorite ? 'heart' : 'hearto'}
                  iconColor={theme.colors.primary}
                />
              </View>
            </View>
            <View
              style={{
                padding: 10,
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                marginTop: -20,
                backgroundColor: theme.colors.white,
                width: '100%',
                height: '100%',
              }}>
              <Text variant="headlineMedium" style={{}}>
                {label}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <AntDesign
                    name="star"
                    size={20}
                    color={theme.colors.primary}
                  />
                  <Text
                    variant="titleMedium"
                    style={{marginLeft: 2, color: theme.colors.primary}}>
                    {`${review} Review`}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <AntDesign
                    name="clockcircle"
                    size={20}
                    color={theme.colors.primary}
                  />
                  <Text
                    variant="titleMedium"
                    style={{marginLeft: 2, color: theme.colors.primary}}>
                    {duration || '5 min'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}>
                  <Text variant="headlineSmall" style={{}}>
                    {FormatCurrency(price * quantity)}
                  </Text>
                  {/* <Text style={{color: theme.colors.backdrop}}>/porsi</Text> */}
                </View>
                <View style={{flexDirection: 'row'}}>
                  <MyButton
                    disabled={quantity <= 1}
                    onPress={() => setQuantity(quantity - 1)}
                    small
                    mode="contained"
                    title="-"
                  />
                  <View
                    style={{
                      borderColor: theme.colors.backdrop,
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 20}}>{quantity}</Text>
                  </View>
                  <MyButton
                    onPress={() => setQuantity(quantity + 1)}
                    small
                    title="+"
                    mode="contained"
                  />
                </View>
              </View>
              <Text style={{marginTop: 20}}>{desc}</Text>
            </View>
          </ScrollView>
        }
        sections={sectionData}
        ListFooterComponent={<View style={{height: 80, width: '100%'}} />}
        renderSectionHeader={({section}) => (
          <View style={{padding: 10, backgroundColor: theme.colors.white}}>
            <Text variant="titleLarge" style={{fontFamily: 'Poppins-Bold'}}>
              {section.title}
            </Text>
            <FlatList
              data={section.data}
              horizontal
              renderItem={({item, index}) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => onPressItem(item)}
                  style={{
                    margin: 5,
                    marginTop: 10,
                    paddingBottom: 10,
                  }}>
                  <Image
                    source={{uri: item.imgLink}}
                    style={{width: width / 2.21, height: 150, borderRadius: 20}}
                  />
                  <View style={{marginTop: 5, paddingBottom: 5}}>
                    <Text variant="bodyLarge">{item.label}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginRight: 10,
                        }}>
                        <AntDesign
                          name="star"
                          size={15}
                          color={theme.colors.primary}
                        />
                        <Text
                          style={{marginLeft: 2, color: theme.colors.primary}}>
                          {`${item.review} Review`}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <AntDesign
                          name="clockcircle"
                          size={15}
                          color={theme.colors.primary}
                        />
                        <Text
                          style={{marginLeft: 2, color: theme.colors.primary}}>
                          {item.duration || '5 min'}
                        </Text>
                      </View>
                    </View>
                    <Text
                      variant="titleLarge"
                      style={{marginTop: 10, fontWeight: '700'}}>
                      {FormatCurrency(item.price)}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        renderItem={({item, index}) => {
          return null;
        }}
      />
    </View>
  );
}

export default SugestionSection;
