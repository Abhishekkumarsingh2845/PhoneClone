import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
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
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
                      Mobile
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
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
                    <Text style={{fontSize: 12, color: 'black', marginTop: 6}}>
                      Mobile
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.linee} />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'black',
  },
  modalView: {
    marginTop: 190,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '100%',
    height: '70%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  line: {
    height: 5,
    width: '30%',
    backgroundColor: '#404040',
    borderRadius: 3,
  },
  linee: {
    height: 5,
    width: '60%',
    backgroundColor: '#404040',
    borderRadius: 3,
    marginTop: 25,
  },
});

export default App;
