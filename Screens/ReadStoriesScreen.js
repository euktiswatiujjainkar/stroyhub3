import React from 'react'; 
import { StyleSheet, Text, View ,TextInput,Image,KeyboardAvoidingView} from 'react-native'; 
import { SearchBar } from 'react-native-elements';
import AppHeader from '../Screens/AppHeader'

export default class ReadStoriesScreen extends React.Component{
    constructor(){
        super();
        this.state={
            search:'',
        }
    }
    render(){
        if(this.state.search===''){
            return(
            <KeyboardAvoidingView>
            <AppHeader/>
             <SearchBar 
            onChangeText={(search)=>{
            this.setState({search:search})
            }}
            value={this.state.search}
            placeHolder = "Search Bar"
           
            />
    
            
            <Text style={styls.text}>See the Books of All kinds of stories - 
            science fiction, fiction, non fiction any time </Text>
           </KeyboardAvoidingView>
        
        )
        } else if(this.state.search!==''){
             return(
            <KeyboardAvoidingView>
            <AppHeader/>
            
            <SearchBar 
            onChangeText={(search)=>{
            this.setState({search:search})
            }}
            value={this.state.search}
            placeHolder = "Search Bar"
           
            />
            
           </KeyboardAvoidingView>
        
        )
        }
    }
}

const styls = StyleSheet.create({
     textInput:{
      borderWidth:4,
      borderRadius:2,
      width:450,
      height:50,
      marginTop:100,
      marginLeft:450
    },

    text:{
         fontSize:22,
         textAlign:"center",
         marginTop:180,
    },
     
  
   logo1:{
       marginLeft:200,
       marginTop:-470,
       width:100,
       height:100,
       borderWidth:1,
      borderRadius:100,
   }
})