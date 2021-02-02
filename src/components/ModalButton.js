import axios from "axios"

const MyModalButton = ({type, data, setData, setShowModal}) => {
    function triggerAction() {
        type == 'modal' && setShowModal(true)
        type == 'random' && generateRandomUser()
    }

    function generateRandomUser() {
        let requestParams = {
            "token": "s-VX-JKZMdVzya5N7I4Q6Q",
            "data": {
              "_repeat": 5,
              "firstName": "nameFirst",
              "lastName": "nameLast",
              "email": "internetEmail",
              "job": "personTitle"
            }
          }
        axios.post('https://app.fakejson.com/q', requestParams)
        .then((response) => response.data)
        .then(users => {
            let newUsers = users.map(user => {
                return {
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    job: user.job
                }
            })
            setData([...data, ...newUsers])
        })
    }
    return (<button className={ type == 'modal' ? 'BtnAddUsersModal' : 'BtnAddUsersRandom' } onClick={triggerAction}>{ type == 'modal' ? '+' : 'R'}</button>)
}

export default MyModalButton