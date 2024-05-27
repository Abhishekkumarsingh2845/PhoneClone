import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Edit from '../Src/Component/Edit';

const Pro = () => {
  return (
    
    <View style={{flex: 1, backgroundColor: 'whitesmoke'}}>
      <Edit />
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          height: '29%',
          marginLeft: 20,
          marginTop: 20,
        }}>
        <View>
          <View
            style={{
              backgroundColor: '#02C7F3',
              width: '100%',
              height: '50%',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                marginTop: 15,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Profile
            </Text>

            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '79%',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Asset/blank.png')}
                style={{height: 25, width: 25, marginTop: 5, marginLeft: 8}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Profile Settings
              </Text>
              <Image
                source={require('../Asset/right-arrow.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  marginLeft: 110,
                  resizeMode: 'contain',
                  tintColor: 'gray',
                  opacity: 0.6,
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 0.1,
                borderWidth: 0.3,
                backgroundColor: 'gainsboro',
                opacity: 0.2,
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '79%',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Asset/Emaill.png')}
                style={{
                  height: 25,
                  width: 25,
                  marginTop: 5,
                  marginLeft: 8,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Email
              </Text>
              <Image
                source={require('../Asset/right-arrow.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  marginLeft: 172,
                  resizeMode: 'contain',
                  tintColor: 'gray',
                  opacity: 0.6,
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 0.1,
                borderWidth: 0.3,
                backgroundColor: 'gainsboro',
                opacity: 0.2,
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '79%',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Asset/Phone.png')}
                style={{height: 25, width: 25, marginTop: 5, marginLeft: 8}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Update Emergency Contact
              </Text>
              <Image
                source={require('../Asset/right-arrow.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  marginLeft: 29,
                  resizeMode: 'contain',
                  tintColor: 'gray',
                  opacity: 0.6,
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 0.1,
                borderWidth: 0.3,
                backgroundColor: 'gainsboro',
                opacity: 0.2,
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '79%',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Asset/fp.png')}
                style={{height: 25, width: 25, marginTop: 5, marginLeft: 8}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Biometric Settings
              </Text>
              <Image
                source={require('../Asset/right-arrow.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  marginLeft: 88,
                  resizeMode: 'contain',
                  tintColor: 'gray',
                  opacity: 0.6,
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 0.1,
                borderWidth: 0.3,
                backgroundColor: 'gainsboro',
                opacity: 0.2,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          height: '29%',
          marginLeft: 20,
          marginTop: 20,
        }}>
        <View>
          <View
            style={{
              backgroundColor: '#02C7F3',
              width: '100%',
              height: '50%',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                marginTop: 15,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Card Sharing Setting
            </Text>

            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '79%',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Asset/bulb.png')}
                style={{height: 25, width: 25, marginTop: 5, marginLeft: 8}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Automatic Brightness
              </Text>
              <Image
                source={require('../Asset/right-arrow.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  marginLeft: 70,
                  resizeMode: 'contain',
                  tintColor: 'gray',
                  opacity: 0.6,
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 0.1,
                borderWidth: 0.3,
                backgroundColor: 'gainsboro',
                opacity: 0.2,
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '79%',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Asset/editing.png')}
                style={{
                  height: 25,
                  width: 25,
                  marginTop: 5,
                  marginLeft: 8,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Email
              </Text>
              <Image
                source={require('../Asset/right-arrow.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  marginLeft: 172,
                  resizeMode: 'contain',
                  tintColor: 'gray',
                  opacity: 0.6,
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 0.1,
                borderWidth: 0.3,
                backgroundColor: 'gainsboro',
                opacity: 0.2,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          height: '29%',
          marginLeft: 20,
          marginTop: 20,
        }}>
        <View>
          <View
            style={{
              backgroundColor: '#02C7F3',
              width: '100%',
              height: '50%',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                marginTop: 15,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Card Sharing Setting
            </Text>

            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '79%',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Asset/bulb.png')}
                style={{height: 25, width: 25, marginTop: 5, marginLeft: 8}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Automatic Brightness
              </Text>
              <Image
                source={require('../Asset/right-arrow.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  marginLeft: 70,
                  resizeMode: 'contain',
                  tintColor: 'gray',
                  opacity: 0.6,
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 0.1,
                borderWidth: 0.3,
                backgroundColor: 'gainsboro',
                opacity: 0.2,
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: '79%',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Asset/editing.png')}
                style={{
                  height: 25,
                  width: 25,
                  marginTop: 5,
                  marginLeft: 8,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                }}>
                Email
              </Text>
              <Image
                source={require('../Asset/right-arrow.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 5,
                  marginLeft: 172,
                  resizeMode: 'contain',
                  tintColor: 'gray',
                  opacity: 0.6,
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 0.1,
                borderWidth: 0.3,
                backgroundColor: 'gainsboro',
                opacity: 0.2,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Pro;
