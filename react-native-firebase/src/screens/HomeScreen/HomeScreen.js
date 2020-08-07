import React from 'react'
import { 
    Text, 
    View, 
    TouchableOpacity,
    FlatList,
    Image,
    ImageBackground,
    Share
} from 'react-native'

import { FontAwesome } from 'react-native-vector-icons/FontAwesome5';

import { firebase } from '../../firebase/config.js'

import styles from './styles';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
        isloading: true,
        data: [],
        favorite: [],
    };
  }
  
  componentDidMount() {
    firebase.database().ref('restau/').once('value', (snapshot) => {
        this.setState({data: snapshot.val()});
    });
    firebase.database().ref(`users/${this.props.route.params.id}/favorite`).once('value', (snapshot) => {
        this.setState({favorite: snapshot.val()});
        this.setState({isloading: false});
      });
  };

  _ShareMessage=(data)=>
  {
      let message = "Venez découvrir le " + data.Name + "\nPour ça rdv au " + data.Adresse;
        Share.share({
            message: message
        }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
  }

  _getfav(name) {
    let favorite = [];
    favorite = this.state.favorite;
    let isInArray = favorite.indexOf(name);
    if (isInArray  > -1)
      favorite.splice(isInArray, 1);
    else
      favorite.push(name);
    firebase.database().ref('users/' + this.props.route.params.id).set({"favorite": favorite});
    firebase.database().ref(`users/${this.props.route.params.id}/favorite`).once('value', (snapshot) => {
        this.setState({favorite: snapshot.val()});
      });
  }

  _ischecked(name) {
    let isInArray = this.state.favorite.indexOf(name);
    if (isInArray  > -1)
      return (true);
    else
      return (false);
  }

  _displaylist() {
    var displaychecked = (
        <View>
            <Image
                style={styles.logo}
                source={require('../../../assets/star_solid.png')}
            />
        </View>
    );
    var displayunchecked = (
        <View>
            <Image
                style={styles.logo}
                source={require('../../../assets/star_regular.png')}
            />
        </View>
    );
    var displaylist = (
        <View style={styles.container}>
          <View style={styles.titlebox}>
            <Text style={styles.titleb}>Mes restaurants</Text>
          </View>
          <FlatList
            style={styles.flat}
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item._id}
                style={styles.box}
                onPress={() => {
                    this._ShareMessage(item);
                }}>
                <ImageBackground
                    source={{ uri: item.Photo }}
                    style={styles.box}
                    imageStyle={{ borderRadius: 30 }}
                    >
                    <TouchableOpacity
                        key={item._id}
                        style={styles.star}
                        onPress={() => {
                            this._getfav(item.Name);
                        }}>
                            {this._ischecked(item.Name) === true ? displaychecked : displayunchecked}
                    </TouchableOpacity>
                    <View style={styles.boxtitle}>
                        <Text style={styles.textTitle}>{item.Name}</Text>
                        <Text style={styles.text}>{item.Adresse}</Text>
                    </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    return (
        <View>
            {this.state.isLoading === true ? null : displaylist}
        </View>
      )
  }

  render() {
        return (
            <View>
                {this._displaylist()}
            </View>
        );
    }
}