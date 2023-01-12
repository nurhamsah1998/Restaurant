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
  ref,
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
                'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/166451/pexels-photo-166451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '15',
          label: 'Cappucino Ice',
          price: 32000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/186857/pexels-photo-186857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1473714/pexels-photo-1473714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
          price: 9800,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/154145/pexels-photo-154145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
          price: 5500,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/5724555/pexels-photo-5724555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
          price: 2300,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/812868/pexels-photo-812868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/2284604/pexels-photo-2284604.jpeg',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/2942319/pexels-photo-2942319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
          price: 5500,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/6166801/pexels-photo-6166801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
          price: 9000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/3584/healthy-grass-orange-juice-health.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/4725692/pexels-photo-4725692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/3603/healthy-breakfast-orange-juice-health.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '13',
          label: 'Salad',
          price: 20000,
          images: [
            {
              imgLink:
                'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              imgLink:
                'https://images.pexels.com/photos/3026019/pexels-photo-3026019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ],
          review: '1.2k',
          desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
          imgLink:
            'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    },
  ];
  const {width} = Dimensions.get('window');
  const ProductDetailRef = React.forwardRef((props, ref) => {
    console.log('re,render');
    return (
      <View>
        <SectionList
          ref={ref}
          ListHeaderComponent={
            <ScrollView style={{flex: 1}}>
              <View style={{position: 'relative'}}>
                <FlatList
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
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
                  <IconContained
                    onPress={() => navigate.goBack()}
                    icon="left"
                  />
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
          ListFooterComponent={
            <View
              style={{
                height: 80,
                width: '100%',
                backgroundColor: theme.colors.white,
              }}
            />
          }
          renderSectionHeader={({section}) => (
            <View style={{padding: 10, backgroundColor: theme.colors.white}}>
              <Text variant="titleLarge" style={{fontFamily: 'Poppins-Bold'}}>
                {section.title}
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
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
                      style={{
                        width: width / 2.21,
                        height: 150,
                        borderRadius: 20,
                      }}
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
                            style={{
                              marginLeft: 2,
                              color: theme.colors.primary,
                            }}>
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
                            style={{
                              marginLeft: 2,
                              color: theme.colors.primary,
                            }}>
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
  });
  return <ProductDetailRef ref={ref} />;
}

export default SugestionSection;
