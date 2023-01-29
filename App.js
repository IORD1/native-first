import React ,{useState}from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';


const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState('column');
  return (
    <>
      <PreviewLayout 
      lable='flexDirection'
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValues = {flexDirection}
      setSelectedValues = {setflexDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'blue'}]} />

      </PreviewLayout>
    </>
    

      
  );
};


const PreviewLayout = ({
  lable,
  values,
  selectedValues,
  setSelectedValues,
  children
}
) => {

  return(
    <View style={{padding:10,flex: 1}}>
      <Text style={styles.lable} >{lable}</Text>

    <View style={styles.row}>
      {
        values.map(value => (
          <TouchableOpacity
          key={value}
          onPress={() => setSelectedValues(value)}
          style={[styles.button,selectedValues === value && styles.selected]}
          >
            <Text
            style={[styles.buttonLabel, selectedValues === value && styles.selectedLabel]}>{value}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
    <Text style={styles.header}>Current configuration : {selectedValues}</Text>

      <View style={[styles.container,{[lable] : selectedValues}]}>{children}</View>

    </View>
  );

};


const styles = StyleSheet.create({
  lable : {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
    marginTop :40,
  },
  row : {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button :  {
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  box: {
    width: 50,
    height: 50,
  },
   container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    borderWidth: 2,
    borderRadius : 30,
    padding : 20,
    borderColor : "lightblue"
  },
  header: {
    textAlign : 'center',
    fontSize : 17,
    marginTop : 20,
    
  }

});

export default FlexDirectionBasics;









