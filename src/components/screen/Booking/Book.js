/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Icon, Button} from 'native-base';
import {connect} from 'react-redux';
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrap: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    height: 522,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 13,
    flexDirection: 'row',
    padding: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class BookList extends Component {
  static navigationOptions = {
    title: 'My Book',
    headerTintColor: '#57DBE9',
    headerTitleStyle: {
      fontSize: 18,
    },
  };
  etiket = e => {
    this.props.navigation.navigate('ETicket', {
      data: e,
    });
  };
  render() {
    const BookView = () => {
      if (this.props.book) {
        return (
          <>
            {this.props.book.map(data => (
              <View style={styles.card}>
                <View>
                  <Text style={{marginTop: 15, fontSize: 17}}>
                    {' '}
                    {data.hotel}
                  </Text>
                  <Text style={{marginTop: 10, fontSize: 13, color: '#565656'}}>
                    {' '}
                    IDR {data.gross_amount}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Icon
                      style={{color: '#BDC0C6', fontSize: 20, marginRight: 10}}
                      name="locate"
                    />
                    <Text style={{color: '#565656', forntSize: 15}}>
                      {data.address}
                    </Text>
                  </View>
                  <Text>Payment Code: {data.payment_code}</Text>
                  <Text style={{fontWeight: 'bold'}}>
                    Payment Method: {data.store}
                  </Text>
                  <Button
                    onPress={() => this.etiket(data)}
                    rounded
                    small
                    bordered
                    info
                    style={{
                      justifyContent: 'center',
                      marginRight: 100,
                      marginLeft: 75,
                      marginTop: 15,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>E-Ticket</Text>
                  </Button>
                </View>
              </View>
            ))}
          </>
        );
      }
    };
    return (
      <View style={styles.wrap}>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BookView />
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Icon name="home" style={{fontSize: 30, color: '#BDC0C6'}} />
            <Text style={{fontSize: 10, marginTop: -5, color: '#BDC0C6'}}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}
            onPress={() => this.props.navigation.navigate('BookingList')}>
            <Icon name="book" style={{fontSize: 30, color: '#57DBE9'}} />
            <Text style={{fontSize: 10, marginTop: -5, color: '#57DBE9'}}>
              Book
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}
            onPress={() => this.props.navigation.navigate('History')}>
            <Icon name="alarm" style={{fontSize: 30, color: '#BDC0C6'}} />
            <Text style={{fontSize: 10, marginTop: -5, color: '#BDC0C6'}}>
              History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}
            onPress={() => this.props.navigation.navigate('ComingSoon')}>
            <Icon name="mail" style={{fontSize: 30, color: '#BDC0C6'}} />
            <Text style={{fontSize: 10, marginTop: -5, color: '#BDC0C6'}}>
              Indox
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}
            onPress={() => this.props.navigation.navigate('User')}>
            <Icon name="person" style={{fontSize: 30, color: '#BDC0C6'}} />
            <Text style={{fontSize: 10, marginTop: -5, color: '#BDC0C6'}}>
              Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const book = state => {
  return {
    book: state.booking.booking,
  };
};
export default connect(book)(BookList);
