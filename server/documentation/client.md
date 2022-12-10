## add new client
POST api/client
```
{
    "name": "Rashmi Wijesekara",
    "phoneNo": "0771999003",
    "address": "No:12, Meepe, Padukka",
    "email": "rashmiw@gmail.com"

}
```
```
{
    "status": "OK",
    "data": {
        "id": "075422",
        "name": "Rashmi Wijesekara",
        "email": "rashmiw@gmail.com",
        "phoneNo": "0771999003",
        "address": "No:12, Meepe, Padukka",
        "dateRegistered": "2022-12-10T07:14:10.422Z",
        "pets": []
    }
}
```
## get all clients data
GET api/client
```
{
    "status": "OK",
    "data": [
        {
            "_id": "639430d407c647dfc3703f83",
            "id": "073992",
            "name": "Mahinda Perera",
            "phoneNo": "0771237773",
            "address": "No:2, Meepe, Padukka",
            "email": "mahindap@gmail.com",
            "dateRegistered": "2022-12-10T07:10:12.992Z"
        },
        {
            "_id": "639431a7d7fb3f74107506d9",
            "id": "107991",
            "name": "Mahima Perera",
            "phoneNo": "0771200003",
            "address": "No:24, Meepe, Padukka",
            "email": "mahima@gmail.com",
            "dateRegistered": "2022-12-10T07:13:43.991Z"
        },
        {
            "_id": "639431c2d7fb3f74107506de",
            "id": "075422",
            "name": "Rashmi Wijesekara",
            "phoneNo": "0771999003",
            "address": "No:12, Meepe, Padukka",
            "email": "rashmiw@gmail.com",
            "dateRegistered": "2022-12-10T07:14:10.422Z"
        }
    ]
}
```
## get client by given phone number
GET /api/client/phoneNo/:phoneNo
- localhost:5000/api/client/phoneNo/0771999003

```
{
    "status": "OK",
    "data": [
        {
            "_id": "639431c2d7fb3f74107506de",
            "id": "075422",
            "name": "Rashmi Wijesekara",
            "phoneNo": "0771999003",
            "address": "No:12, Meepe, Padukka",
            "email": "rashmiw@gmail.com",
            "dateRegistered": "2022-12-10T07:14:10.422Z",
            "pets": []
        }
    ]
}
```
## get client by given client id
GET api/client/:clientId
- localhost:5000/api/client/075422

```
{
    "status": "OK",
    "data": [
        {
            "_id": "639431c2d7fb3f74107506de",
            "id": "075422",
            "name": "Rashmi Wijesekara",
            "phoneNo": "0771999003",
            "address": "No:12, Meepe, Padukka",
            "email": "rashmiw@gmail.com",
            "dateRegistered": "2022-12-10T07:14:10.422Z",
            "pets": []
        }
    ]
}
```
## add new patient id into client's pets list
POST api/client/patients
```
{
    "clientId": "073992",
    "patientId": "12366"
}
```
```
{
    "status": "OK",
    "data": {
        "_id": "639430d407c647dfc3703f83",
        "id": "073992",
        "name": "Mahinda Perera",
        "phoneNo": "0771237773",
        "address": "No:2, Meepe, Padukka",
        "email": "mahindap@gmail.com",
        "dateRegistered": "2022-12-10T07:10:12.992Z",
        "pets": [
            "123",
            "12366"
        ],
        "__v": 0
    }
}
```
