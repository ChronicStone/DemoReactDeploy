const user = {
    first_name: "Cyprien",
    last_name: "THAO",
}

function FormatName(user) {
    return `${user.first_name} ${user.last_name}`
}

const JsxExample = () => {
    return (
        <>
            <p>Bonjour, bienvenue à {FormatName(user)}</p>
        </>
    )
}

export default JsxExample