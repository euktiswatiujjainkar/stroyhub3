import React from 'react'; 
import { 
StyleSheet, 
Text, 
View,
TextInput,
TouchableOpacity,
ScrollView,
KeyboardAvoidingView,
 ToastAndroid
} from 'react-native'; 
import AppHeader1 from '../Screens/AppHeader1';
import firebase from 'firebase';
import db from '../config';
import * as Speech from 'expo-speech';

export default class WriteStoriesScreen extends React.Component{

  constructor(){
      super();
      this.state={
        story:'',
        author:'',
        storyTitle:'',
    
      }
  }
submitStory= async ()=>{
  if(this.state.story!==''){
     db.collection("story").add({
   'storyTitle':this.state.storyTitle,
   'author':this.state.author,
   'story':this.state.story,
  
 })
  ToastAndroid.show("Congratulations ! You have submitted your stroy !", ToastAndroid.SHORT);
  }  else if(this.state.story===''){
 
    ToastAndroid("oh ! write  your stroy !", ToastAndroid.SHORT);
   
  }

}

    render(){
        return(
               <KeyboardAvoidingView>
        
            <AppHeader1/>
             <TextInput style={{
                 borderWidth:4,
                 borderRadius:2,
                 height:50,
                 width:1300,
                 marginTop:30
                 ,marginLeft:30,
                 marginRight:30,

             }}
            placeholder = "Story Title"
            onChangeText={(storyTitle) => {
            this.setState({ storyTitle: storyTitle });
          }}
          value={this.state.storyTitle}
            />

             <TextInput style={{
                 borderWidth:4,
                 borderRadius:2,
                 height:50,
                 width:1300,
                 marginLeft:30,
                 marginRight:30,
                 marginTop:10
             }}
            placeholder = "Author"
            onChangeText={(author) => {
            this.setState({ author: author });
          }}
          value={this.state.author}
            />

            <TextInput style={styles.textInput}
            placeholder = "WriteStory here"
            onChangeText={(story) => {
            this.setState({ story:story });
          }}
          value={this.state.story}
            />

            <TouchableOpacity style={styles.button} onPress={()=>{
              this.submitStory()
            
            }}>
            <Text>Submit</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        )
    }
}


const styles=StyleSheet.create({
  textInput:{
       borderWidth:4,
       borderRadius:2,
       height:200,
       width:1300,
       marginLeft:30,
       marginRight:30,
       marginTop:10
  },
  button:{
   backgroundColor:"lightgreen",
   borderWidth:2,
   borderRadius:20,
   marginTop:30,
   alignItems:"center",
   justifyContent:"center",
   width:100,
   height:45,
   marginLeft:650
  }
})