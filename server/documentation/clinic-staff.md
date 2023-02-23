## add staff member
POST api/staff
```
{
    "name": "Tharanga Silva",
    "email": "tharanga@pv.lk",
    "phoneNo": "0733212400",
    "password": "1234",
    "position": "front desk"
}
```
```
{
    "status": "OK",
    "data": {
        "id": "147009",
        "name": "Tharanga Silva",
        "phoneNo": "0733212400",
        "email": "tharanga@pv.lk",
        "position": "front desk",
        "dateRegistered": "2022-12-08T07:43:55.009Z"
    }
}
```
## get a list of all the staff members' data
GET /api/staff
```
{
    "status": "OK",
    "data": [
        {
            "_id": "639194dd1b3401dac2f0c47f",
            "id": "102706",
            "name": "Pradeep Silva",
            "phoneNo": "0778446400",
            "email": "pradeep@pv.lk",
            "position": "lab assistant",
            "dateRegistered": "2022-12-08T07:40:13.706Z"
        },
        {
            "_id": "639195bb943ff07876f75baf",
            "id": "147009",
            "name": "Tharanga Silva",
            "phoneNo": "0733212400",
            "email": "tharanga@pv.lk",
            "position": "front desk",
            "dateRegistered": "2022-12-08T07:43:55.009Z"
        }
    ]
}
```
## login authentication
GET /api/staff/auth/:email/:password
- localhost:5000/api/staff/auth/tharanga@pv.lk/1234
```
{
    "status": "OK",
    "data": {
        "id": "147009",
        "name": "Tharanga Silva",
        "email": "tharanga@pv.lk",
        "phoneNo": "0733212400",
        "dateRegistered": "2022-12-08T07:43:55.009Z",
        "position": "front desk"
    }
}
```
## staff log
GET api/staff/staff-log
```
{
    "status": "OK",
    "data": [
        {
            "_id": "63919670943ff07876f75bb7",
            "staff": "639195bb943ff07876f75baf",
            "loginAt": "2022-12-08T07:46:56.965Z"
        },
        {
            "_id": "639196ac943ff07876f75bbb",
            "staff": "639195bb943ff07876f75baf",
            "loginAt": "2022-12-08T07:47:56.868Z"
        }
    ]
}
```
## get staff member by given id
GET api/staff/:staffId
- localhost:5000/api/staff/102706
```
{
    "status": "OK",
    "data": [
        {
            "_id": "639194dd1b3401dac2f0c47f",
            "id": "102706",
            "name": "Pradeep Silva",
            "phoneNo": "0778446400",
            "email": "pradeep@pv.lk",
            "position": "lab assistant",
            "dateRegistered": "2022-12-08T07:40:13.706Z"
        }
    ]
}
```
