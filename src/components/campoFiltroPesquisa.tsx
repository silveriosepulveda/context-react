function CampoFiltroPesquisa(props: any) {    
    return (
        <input 
        type="text" 
        name={props.name} 
        id={props.id} 
        onChange={props.onChange}/>
    )
}

export default CampoFiltroPesquisa