import React from "react";
import { EstruturaGerencia } from "../estruturaContext";

class SelectOperador extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <select name="operador" id="operador" value={this.props.value}
                 onChange={e => this.context.alterarFiltro(e, this.props.chave)}
                >
                <option value="=">Igual</option>
                <option value=">">Maior</option>
                <option value="<">Menor</option>
                <option value="<>">Diferente</option>
                <option value="like">Contendo</option>
            </select>
        )
    }
}

SelectOperador.contextType = EstruturaGerencia

export default SelectOperador