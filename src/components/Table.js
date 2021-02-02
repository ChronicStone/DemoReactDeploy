import React, { Component } from "react"

class Table extends React.Component {
    render() {
        const tableHead = (columns) => {
            return (
                <thead>
                    <tr>
                        {columns.map((col, key) => {
                            return(<th key={key}>{col}</th>)
                        })}
                    </tr>
                </thead>
            )
        }

        const tableBody = (users) => {
            return (
                <tbody>
                    {users.map((item, key) => {
                        return(
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.job}</td>
                            <td>{item.email}</td>
                        </tr>
                        )
                    })}
                </tbody>
            )
        }


        return (
            <table className="table-auto">
                {tableHead(this.props.columns)}
                {tableBody(this.props.users)}
            </table>
        )
    }
}

export default Table