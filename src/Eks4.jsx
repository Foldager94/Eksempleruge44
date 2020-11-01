const PersonTable = () => {
    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState({ name: "", id: null });
    const [count, setCount] = useState(1);

    const updatePerson = (person) => {
        const id = Number(person.id);
        persons.forEach(p => {
            if (p.id === id) {
                p.name = person.name;
            }
        });
        setPersons([...persons])
        setPerson({ name: "", id: null })
    }

    const addPerson = (name) => {
        const person = { name: name, id: count };
        setPersons([...persons, person]);
        setCount(count + 1);
    };

    const editPerson = (event) => {
        const target = event.target;
        const id = Number(target.id);
        setPerson({ id: id })
    }

    const deletePerson = (event) => {
        const target = event.target;
        const id = Number(target.id);
        const newList = persons.filter((person) => person.id !== id);
        console.log(newList)
        setPersons(newList)


    }

    return (
        <>
            <PersonTableShow list={persons} deletePerson={deletePerson} editPerson={editPerson} />
            <PersonTableAdd person={person} addPerson={addPerson} updatePerson={updatePerson} />
        </>
    );

}

const PersonTableShow = (props) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map((person, index) => {
                    return (
                        <tr key={index}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>
                                <a href="#" id={person.id} onClick={props.deletePerson}>Delete</a>
                                {" / "}
                                <a href="#" id={person.id} onClick={props.editPerson}>Edit</a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

}

const PersonTableAdd = (props) => {
    const [name, setName] = useState(props.person.name)

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        setName(value);
        console.log(name)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (props.person.id) {
            props.updatePerson({ name: name, id: props.person.id });
        } else {
            props.addPerson(name);

        }
        setName("")
    }
    return (
        <>
            <form>
                {props.person.id}
                <input name="name" type="text" value={name} onChange={handleChange} placeholder="Navn" />
                <button name={name} onClick={handleSubmit}>Tilføj Navn</button>
            </form>
        </>
    );


}
