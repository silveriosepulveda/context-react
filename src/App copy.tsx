import React, { useState, Component } from 'react'

class App extends React.Component<any, any> {
  filtroVazio: any;

  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.filtroVazio = { campo: '', operador: '=', valor: '' }
    const teste = {
      variaveis: {},
      estrutura: {},
      filtros: []
    }
    this.setState(teste)
  }

  render() {
    const adicionarFiltro = () => {
      let state = this.state;
      //let filtros = this.state.filtros ? Object.assign([], this.state.filtros) : [];
      state.filtros.push(this.filtroVazio)
      const filtros = [
        { campo: '', operador: '=', valor: '' },
        { campo: '', operador: '=', valor: '' },
        { campo: '', operador: '=', valor: '' },
      ]
      this.setState({ filtros: filtros })
    }

    const alterarFiltro = (event: any, key: number) => {
      this.setState((prevState: any) => {

        return {
          filtros: prevState.filtros.map((filtro: any, id: any) => {
            console.log(event.target.name);
            if (id == key) {
              filtro[event.target.name] = event.target.value
            }
            console.log(filtro);

            return filtro
          })
        }
      })
    }

    const testarFiltros = () => {
      console.log(this.state.filtros);
    }

    // const Operador = (props: any) => {
    //   return (
       
    //   )
    // }

    return (
      <>
        <button className="btn btn-primary" onClick={adicionarFiltro}>Adicionar</button>
        <button >Alterar</button>

        <button className="btn btn-primary" onClick={testarFiltros} >Testar</button>
        {
          this.state && this.state.filtros && this.state.filtros.map((val: any, key: any) =>
            <div key={key}>

              <input type="text" key={key} name="campo" onChange={(e) => alterarFiltro(e, key)} />
              {/* <Operador chave={key}/> */}
              <select name="operador" id="operador" value={val.operador} onChange={e => alterarFiltro(e, key)}>
                <option value="=">Igual</option>
                <option value=">">Maior</option>
                <option value="<">Menor</option>
                <option value="<>">Diferente</option>
                <option value="like">Contendo</option>
              </select>
              <h3>Campo = {val.campo} -- {val.operador}</h3>
            </div>
          )
        }
      </>
    )
  }
}

export default App
