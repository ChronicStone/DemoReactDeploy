function Hello(props) {
    return <h1>Welcome, {props.name}, your are { props.age >= 18 ? 'an adult' : props.age > 15 ? 'a teenage' : 'a child'}</h1>
}

export default Hello