import React, {Component} from 'react';

const TableHeader = ({setSortOrder}) => {
    function updateSortOrder(key) {
        setSortOrder(key);
    }

    return(
        <thead>
            <tr>
                <th>Nom</th>
                <th>Job</th>
                <th>Email</th>
            </tr>
        </thead>
    )
}

const TableBody = ({users}) => {
    return(
        <tbody>
            {users.map((user, key) => {
                return (
                    <tr key={key}>
                        <td>{user.name}</td>
                        <td>{user.job}</td>
                        <td>{user.email}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

class Table extends Component {
    render() {
        return( 
            <table style={{marginTop: "60px"}} border="1">
                <TableHeader setSortOrder={this.props.setSortOrder}/>
                <TableBody users={this.props.users}/>
            </table>
        )
    }
}

export default Table