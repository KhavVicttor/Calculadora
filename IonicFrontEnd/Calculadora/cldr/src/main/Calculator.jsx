import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/button';
import Display from '../components/Display';
export default class Calculator extends Component {
  //Demonstrar que um número foi apagado
  clearMemory() {
    console.log('Limpar');
  }
  //Setar que o usuário colocou +-*/
  setOperation(operation) {
    console.log(operation);
  }
  //Adicionar dígito
  addDigito(n) {
    console.log(n);
  }
  render() {
    return (
      <div className="Calculator">
        <Display value={100} />
        <Button label="AC" />
        <Button label="()" />
        <Button label="%" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="+/-" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </div>
    );
  }
}
