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
      if (this.state.filtros.length == 0) {
        this.setState({ filtros: [this.filtroVazio] })
      } else {
        this.setState({
          filtros: this.state.filtros.concat([this.filtroVazio])
        })
        // this.setState((prevState: any) => ({
        //   filtros: [...prevState.filtros, this.filtroVazio]
        // }))
      }


    }

    const alterarFiltro = (event: any, key: number) => {
      this.setState((prevState: any) => {

        return {
          filtros: prevState.filtros.map((filtro: any, id: any) => {
            let filtroAlterado = Object.assign({}, filtro)
            
            if (id == key) {
              filtroAlterado[event.target.name] = event.target.value
            }
            return filtroAlterado;
          })
        }
      })
    }

    const testarFiltros = () => {
      console.log(this.state.filtros);
    }

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
