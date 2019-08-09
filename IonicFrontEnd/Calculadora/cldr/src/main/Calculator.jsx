import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/button';
import Display from '../components/Display';
const inicialState = {
  displayValue: '0', //Display começa com zero
clearDisplay: false, //Criar uma função que zera
operation : null, //armazenar as operações +-/*...
value: [0, 0], //dois valores, ex: 80 e/ou 20
currect : 0 //Qual está manipulando o 1 ou 2 valores
}
export default class Calculator extends Component {
  state = { ...inicialState }
  //Criamos o clone dentro do objeto
  //Limpar operação AC e C
  //Demonstrar que um número foi apagado
  clearMemory() {
    this.setState({ ...inicialState })
  }
  //Setar que o usuário colocou +-*/
  setOperation(operation) {
    console.log(operation);
  }
  //Adicionar dígito
  addDigito(n) {
    if(n === '.' && this.state.displayValue.includes('.')){
      return //Se já tem ponto na calculadora, não aceite outro
    }
    //Display do valor zero, permanece zero
    const clearDisplay = this.state.displayValue === '0'
    || this.state.clearDisplay
    /*Essa constante é para saber se o valor será limpo
    ou permanece o estado do display */
    const currectValue = clearDisplay ? '' : this.state.displayValue
    //No display terá o valor digitado + o n digitado
    const displayValue = currectValue + n
    //Agora para mudar o display - o false e para não zerar
    this.setState({displayValue, clearDisplay: false})
  }
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigito = this.addDigito.bind(this);
  }
  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.displayValue}/>
        <Display value={100} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigito} />
        <Button label="8" click={this.addDigito} />
        <Button label="9" click={this.addDigito} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigito} />
        <Button label="5" click={this.addDigito} />
        <Button label="6" click={this.addDigito} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigito} />
        <Button label="2" click={this.addDigito} />
        <Button label="3" click={this.addDigito} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigito} double />
        <Button label="." click={this.addDigito} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
