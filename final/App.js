import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity, FlatList,Alert ,Button } from 'react-native';
 
export default class App extends Component
{
    constructor()
    {
        super();
 
        this.state = { 

          idauto: '', 
          ActivityIndicator_Loading: false, 

        }
    }
 
  Selact_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://100.76.234.74/reacteselectname.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  fname : this.state.fname
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://100.76.234.74/reactinsert.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  fname : this.state.fname,
                  sname : this.state.sname,
                  nphone : this.state.nphone
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  Update_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://100.76.234.74/reactupdate.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  idauto : this.state.idauto,
                  fname : this.state.fname,
                  sname : this.state.sname,
                  nphone :this.state.nphone
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

    Delete_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://100.76.234.74/reactdelete.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  idauto : this.state.idauto

                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

    checkdelete = () => { 
      Alert.alert(
        'delete data',
        'do you want to delete this information? ?',
        [
          {
            text: 'No', onPress: () => console.log('cancel delete'), style: 'cancel'
          },
          {
            text: 'Yes', onPress: () => this.Delete_Data_Into_MySQL()
          },
        ],
        {cancelable: false },
      );
      return true;
    };

    async componentDidMount() {
      try {
          const response = await fetch('http://100.76.234.74/datalist.php');
          const responseJson = await response.json();
          this.setState({
              isLoading: false,
              dataSource: responseJson
          }, function () {
              // In this block you can do something with new state.
          });

      } catch (error) {
          console.error(error);
      }
  }

  FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: 10,
            width: "100%",
            backgroundColor: "#607D8B",
          }}
        />
      );
  }
  GetFlatListItem (idauto,fname,sname,nphone) 
  {
      Alert.alert(idauto,fname,sname,nphone);
  }

    render()
    {
      
        return(

            <View style = { styles.MainContainer }>
              <FlatList
               data={ this.state.dataSource }
               ItemSeparatorComponent = {this.FlatListItemSeparator}
               renderItem={({item}) => <Text style={styles.FlatListItemStyle} 
               onPress={this.GetFlatListItem.bind(this, item.idauto , item.fname, item.sname, item.phone)}> 
               ID: {item.idauto} Name: {item.fname} {item.sname} {"\n"}Phone: {item.nphone}</Text>}
               keyExtractor={(item, index) => index.toString()}
              />

                  <TextInput 
                  placeholder = "Enter idauto"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ idauto: TextInputText })} />
                  
                  <TextInput 
                  placeholder = "Enter fname"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ fname: TextInputText })} />
                 
                  <TextInput 
                  placeholder = "Enter sname"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ sname: TextInputText })} />
                

                  <TextInput 
                  placeholder = "Enter nphone"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ nphone: TextInputText })} />
                  
                  
                
                <TouchableOpacity 
                  activeOpacity = { 0.3 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.SElN_Data_Into_MySQL }>
                <Text style = { styles.TextStyle }>Selct Name</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  activeOpacity = { 0.3 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.INS_Data_Into_MySQL }>
                <Text style = { styles.TextStyle }>Insert MySQL Database</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  activeOpacity = { 0.3 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.UP_Data_Into_MySQL }>
                <Text style = { styles.TextStyle }>Update MySQL Database</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  activeOpacity = { 0.3 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.checkdelete }>
                <Text style = { styles.TextStyle }>Delete  MySQL Database</Text>
                </TouchableOpacity>
                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
            </View> 
        ); 
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },
 
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },

    TouchableOpacityStyle:
    {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
    },
 
    TextStyle:
    {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18
    },

    ActivityIndicatorStyle:
    {  
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },

    FlatListItemStyle:
    {
      padding: 10,
      fontSize: 16,
      height: 57,
      width: 320,
    }
});