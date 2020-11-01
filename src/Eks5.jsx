const FahrenheitToCelcius = () => {
    const [degree, setDegree] = useState(0);
    const update = (e) => {
      const fahrenheit = e.target.value;
      const celcius = (fahrenheit - 32) / 1.8;
      setDegree(celcius)
    }
  
    return (
      <div style={parentborder}>
        <h2>Parent componet holding the state</h2>
        <InputComp update={update}></InputComp>
        <ShowComp degree={degree}></ShowComp>
      </div>);
  
  }
  const InputComp = (props) => {
    return (<div style={redborder}>
      <input type="text" onChange={props.update} placeholder="write input to show in sibling component" />
    </div>);
  }
  
  const ShowComp = (props) => {
    return <div style={blueborder}> Show content:{props.degree} </div>
  }