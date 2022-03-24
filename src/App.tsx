import React from 'react'
import { FaPlusCircle, FaMinusSquare } from 'react-icons/fa'
import { EstruturaGerencia } from './estruturaContext';
import SelectOperador from './components/SelectOperador'
import CampoFiltroPesquisa from './components/campoFiltroPesquisa';
class App extends React.Component<any, any> {
  filtroVazio: any;

  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.filtroVazio = { campo: '', operador: '=', valor: '' }
    const teste = {
      filtros: [this.filtroVazio],
      alterarFiltro: this.alterarFiltro
    }
    this.setState(teste)
  }

  alterarFiltro = (event: any, key: number) => {
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

  excluirFiltro = (keyEntrada: number) => {
    let novoFiltro: any = [];

    this.state.filtros.map((value: any, key: any) => {
      if (keyEntrada != key)
        novoFiltro.push(value)
    })
    this.setState({ filtros: novoFiltro })
  }

  render() {
    const adicionarFiltro = () => {
      if (this.state.filtros.length == 0) {
        this.setState({ filtros: [this.filtroVazio] })
      } else {
        this.setState({
          filtros: this.state.filtros.concat([this.filtroVazio])
        })
      }
    }

    return (
      <EstruturaGerencia.Provider value={this.state}>
        <button className="btn btn-primary" onClick={adicionarFiltro}  >Adicionar <FaPlusCircle /></button>

        {
          this.state && this.state.filtros && this.state.filtros.map((val: any, key: any) =>
            <div key={key} className="container">

              {/* <input type="text" key={key} name="campo" value={val.campo} onChange={(e) => this.alterarFiltro(e, key)} /> */}
              <CampoFiltroPesquisa chave={key} id="campo" name="campo" onChange={(e: any) => this.alterarFiltro(e, key)} />
              <SelectOperador chave={key} value={val.operador} />
              <button className='btn btn-danger' onClick={() => this.excluirFiltro(key)}>
                <FaMinusSquare /></button>
                <br />
                <small>{val.campo} -- {val.operador}</small>
              <hr />
            </div>
          )
        }
      </EstruturaGerencia.Provider>
    )
  }
}

App.contextType = EstruturaGerencia

export default App
