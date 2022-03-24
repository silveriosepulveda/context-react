import React from "react"

export const estruturaGerencia = {
    estrutura: {},
    variaveis: {},
    filtros: null,
    alterarFiltro: () => {}
}

export const EstruturaGerencia = React.createContext<any>(estruturaGerencia)