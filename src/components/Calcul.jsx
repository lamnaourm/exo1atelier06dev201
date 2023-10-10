import React, { Component } from 'react'

export default class Calcul extends Component {

    constructor(props){
        super(props)

        this.state ={
            capital:0,
            taux:0,
            duree:0,
            menusalite:0
        }

        this.handleChange = this.handleChange.bind(this)
        this.calculer = this.calculer.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        const value = e.target.value
        
        this.setState({[name] :  value})
    }

    calculer(){
        const mensualite = (this.state.capital * (this.state.taux/1200)) / (1 - Math.pow((1+this.state.taux/1200), -this.state.duree))

        this.setState({menusalite:mensualite.toFixed(2)})
    }

    render() {
        return (
            <div className='calcul'>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor="capital">Capital emprunté :</label>
                        <input value={this.state.capital} onChange={this.handleChange} type="number" name="capital" id="capital" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="taux">Taux d'interet :</label>
                        <input value={this.state.taux} onChange={this.handleChange} type="number" name="taux" id="taux" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="duree">Durée de remboursement :</label>
                   
                        <input value={this.state.duree} onChange={this.handleChange} type="number" name="duree" id="duree" />
                    </div >
                    <hr />
                    <button onClick={this.calculer}>Calculer</button>
                    <div className='form-group'>
                        <label htmlFor="mensualite">Mensualité :</label>
                        <input value={this.state.menusalite} onChange={this.handleChange} type="number" name="mensualite" id="mensualite" readOnly/>
                    </div>
                </div>
            </div>
        )
    }
}
