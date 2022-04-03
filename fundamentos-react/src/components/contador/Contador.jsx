import React, { Component } from "react";
import Buttons from "./Buttons";
import './Contador.css'
import Display from "./Display";
import StepForm from "./StepForm";

class Contador extends Component{

    state = {
        number : this.props.numberInitial || 0,
        step  : this.props.step || 1,

    }

    inc = ( ) =>{
        this.setState ({
            number : this.state.number + this.state.step
        })
    }

    dec = ( ) =>{
        this.setState ({
            number : this.state.number - this.state.step
        })
    }


    setStep = (newStep) =>{
        this.setState({
            step: newStep
        });
    }

    render(){
        return (
            <div className="Contador">
                <Display number={this.state.number} />
                <StepForm step={this.state.step} setStep={this.setStep} />
                <Buttons setInc={this.inc} setDec = {this.dec} />
            </div>
        )
    }
}

export default Contador;