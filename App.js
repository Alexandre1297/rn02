import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { View, Text, Button } from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 30px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #EEE;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;


const CalcBtn = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #1A91DA;
  color: #000;
  height: 50px;
  width: 150px;
  border-radius: 10px;
`;

const TextBtn = styled.Text`
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const ResultArea = styled.View` 
  margin-top: 80px;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItemBtn = styled.TouchableOpacity`
  margin: 10px 10px 0 10px;
  background-color: #1A91DA;
  color: #000;
  height: 50px;
  width: 70px;
  border-radius: 10px;
`;

const PctItemTextBtn = styled.Text`
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export default ()=> {

  const [ bill, setBill ] = useState(``);
  const [ tip, setTip ] = useState(0);
  const [ pct, setPct ] = useState(10);

  const calc = ()=> {
    //Transformar de string para número - float
    let nBill = parseFloat(bill);

    //fazendo a verificação
    if (nBill) {
      setTip ((pct/100) * (nBill));
    }
  }

useEffect ( ()=> {
  calc();
}, [pct, bill]);

  return (
    <Page>
      
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      
      <Input
        placeholder = "Digite o valor da conta!"
        placeholderTextColor = "#000"
        keyboardType = "numeric"
        value = {bill}
        onChangeText = { n=>setBill(n) }
      />

    <PctArea>
      <PctItemBtn onPress={()=>setPct(5)}>
        <PctItemTextBtn>5%</PctItemTextBtn>
        </PctItemBtn>
      
      <PctItemBtn onPress={()=>setPct(10)}>
        <PctItemTextBtn>10%</PctItemTextBtn>
        </PctItemBtn>
      
      <PctItemBtn onPress={()=>setPct(15)}>
        <PctItemTextBtn>15%</PctItemTextBtn>
        </PctItemBtn>

      <PctItemBtn onPress={()=>setPct(20)}>
        <PctItemTextBtn>20%</PctItemTextBtn>
        </PctItemBtn>

    </PctArea>

    <CalcBtn onPress = {calc}>
      <TextBtn>Calcular{pct}%</TextBtn>
    </CalcBtn>
    
    {tip > 0 &&
      <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat}{bill}.toFixed(2);</ResultItem>
    
          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip}.toFixed(2)</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + (tip).toFixed(2))} ({pct}%)</ResultItem>
      </ResultArea>
    }
  </Page>
 );
}