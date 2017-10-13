//import liraries
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button,
  TouchableOpacity
} from 'react-native';

// create a component
class ReservationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant_id: '',
      seat_count: '',
      datetime: Date.now()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type){
    // console.log(this.props);
    // console.log(this.state);
    return event => this.setState({[type]: event.nativeEvent.text});
  }
  
  handleSubmit(event){
    const newReservation = {
      restaurant_id: this.state.restaurant_id,
      seat_count: parseInt(this.state.seat_count),
      datetime: this.state.datetime
    };

    this.props.createReservation(newReservation, this.props.userToken);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={{fontSize: 30, marginLeft: 35}}>ReservationForm</Text>

          <Text style={[styles.title, styles.spacePad]}>Restaurant ID</Text>
          <TextInput
            style={[styles.input, styles.spacePad]}
            onChange={this.handleInput('restaurant_id')}
            value={this.state.restaurant_id}
            placeholder='RestaurantID' />
          
          <Text style={[styles.title, styles.spacePad]}>Seat Count</Text>
          <TextInput
            style={[styles.input, styles.spacePad]}
            onChange={this.handleInput('seat_count')}
            value={this.state.seat_count.toString()}
            placeholder='Seat Count' />

          <Text style={[styles.title, styles.spacePad]}>Datetime</Text>
          <TextInput
            style={[styles.input, styles.spacePad]}
            onChange={this.handleInput('datetime')}
            value={this.state.datetime.toString()}
            placeholder='Date Time' />

          <TouchableOpacity
            onPress={this.handleSubmit}
            style={styles.button}
            raised={true}>
            <Text style={styles.text}>Create Reservation</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65CCB8',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 155,
    marginLeft: 65,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F2F2F2',
    paddingLeft: 80
  },
  text: {
    width: 200,
    color: '#F2F2F2'
  },
  infoContainer: {
    width: 300,
    height: 500,
    alignSelf: 'center',
    // backgroundColor: 'red'
  },
  title: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 75
  },
  input: {
    backgroundColor: 'white',
    paddingLeft: 80
  },
  spacePad: {
    margin: 10,
    padding: 5
  }
});

//make this component available to the app
export default ReservationForm;
