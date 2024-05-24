import React, {useRef} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const ExampleBottomSheet = () => {
  // create a ref to the bottom sheet
  const bottomSheetRef = useRef(null);

  // function to open the bottom sheet
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand(); // expands the bottom sheet
  };

  // function to close the bottom sheet
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close(); // closes the bottom sheet
  };

  return (
    <View style={styles.container}>
      <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
      <BottomSheet
        ref={bottomSheetRef} // set the ref
        index={0} // initial index of the bottom sheet
        snapPoints={[10, 300, 450]} // snap points for the bottom sheet
        backgroundComponent={({style}) => (
          <View style={[style, styles.background]}>
            <View style={styles.modalView}>
              {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}></Pressable>  */}
              <View style={styles.line} />
              <View
                style={{
                  width: '125%',
                  height: 163,
                  backgroundColor: 'white',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 12,
                }}>
                <Text style={{fontSize: 20, color: 'black'}}>
                  Social media platform
                </Text>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 70,
                        height: 60,
                        backgroundColor: 'whitesmoke',
                        borderRadius: 13,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          backgroundColor: 'whitesmoke',
                          width: 35,
                          height: 35,
                        }}>
                        <Image
                          source={require('./Asset/call.png')}
                          style={{width: 15, height: 15, resizeMode: 'contain'}}
                        />
                        <Text
                          style={{fontSize: 12, color: 'black', marginTop: 6}}>
                          Mobile
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 70,
                        height: 60,
                        backgroundColor: 'whitesmoke',
                        borderRadius: 13,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          backgroundColor: 'whitesmoke',
                          width: 35,
                          height: 35,
                        }}>
                        <Image
                          source={require('./Asset/global.png')}
                          style={{width: 15, height: 15, resizeMode: 'contain'}}
                        />
                        <Text
                          style={{fontSize: 10, color: 'black', marginTop: 6}}>
                          Website
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 70,
                        height: 60,
                        backgroundColor: 'whitesmoke',
                        borderRadius: 13,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          backgroundColor: 'whitesmoke',
                          width: 50,
                          height: 35,
                        }}>
                        <Image
                          source={require('./Asset/facebook.png')}
                          style={{width: 15, height: 15, resizeMode: 'contain'}}
                        />
                        <Text
                          style={{fontSize: 12, color: 'black', marginTop: 6}}>
                          facebook
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 70,
                        height: 60,
                        backgroundColor: 'whitesmoke',
                        borderRadius: 13,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          backgroundColor: 'whitesmoke',
                          width: 35,
                          height: 35,
                        }}>
                        <Image
                          source={require('./Asset/twitter.png')}
                          style={{width: 15, height: 15, resizeMode: 'contain'}}
                        />
                        <Text
                          style={{fontSize: 12, color: 'black', marginTop: 6}}>
                          twitter
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 70,
                        height: 60,
                        backgroundColor: 'whitesmoke',
                        borderRadius: 13,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          backgroundColor: 'whitesmoke',
                          width: 50,
                          height: 35,
                        }}>
                        <Image
                          source={require('./Asset/whatsapp.png')}
                          style={{width: 15, height: 15, resizeMode: 'contain'}}
                        />
                        <Text
                          style={{fontSize: 12, color: 'black', marginTop: 6}}>
                          whatsapp
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/skype.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        skype
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/twitter.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/telegram.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  width: '125%',
                  height: 163,
                  backgroundColor: 'white',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 12,
                }}>
                <Text style={{fontSize: 20, color: 'black'}}>
                  Payment gateway
                </Text>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/call.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/call.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/call.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/whatsapp.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 50,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/gg.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        whatsapp
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/instagram.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/mm.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 70,
                      height: 60,
                      backgroundColor: 'whitesmoke',
                      borderRadius: 13,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'whitesmoke',
                        width: 35,
                        height: 35,
                      }}>
                      <Image
                        source={require('./Asset/call.png')}
                        style={{width: 15, height: 15, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 6}}>
                        Mobile
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.linee} />
            </View>
          </View>
        )}></BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'white', // semi-transparent background
  },
  content: {
    backgroundColor: 'red',
    padding: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalView: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  linee: {
    height: 5,
    width: '60%',
    backgroundColor: '#404040',
    borderRadius: 3,
    marginTop: 25,
  },
});

export default ExampleBottomSheet;
