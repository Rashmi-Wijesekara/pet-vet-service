### localhost:5000/api/admin
---

## add new admin
POST /admin

```
{
    "name": "Pradeep Silva",
    "email": "pradeeps@pv.lk",
    "phoneNo": "0778345400",
    "password": "1234"
}
```

```
{
    "status": "OK",
    "data": {
        "id": "117193",
        "name": "Tharanga Silva",
        "email": "tharangas@pv.lk",
        "phoneNo": "0778349990",
        "dateRegistered": "2022-12-07T08:49:19.193Z",
        "superAdmin": false
    }
}
```
- already registered admin
```
{
    "message": "Admin email already available"
}
```


## get all admins data
GET /admin

```
{
    "status": "OK",
    "data": [
        {
            "_id": "636bcf12fc5be3fd2ec8530b",
            "id": "086438",
            "name": "Rohan Perera",
            "phoneNo": "0778654400",
            "email": "rohanpe@pv.lk",
            "superAdmin": true,
            "dateRegistered": "2022-11-09T16:02:26.434Z"
        },
        {
            "_id": "636bcf7b3c86024ae7fd66cc",
            "id": "073247",
            "name": "Pradeep Silva",
            "phoneNo": "0778345400",
            "email": "pradeeps@pv.lk",
            "superAdmin": false,
            "dateRegistered": "2022-11-09T16:04:11.247Z"
        },
    ]
}
```

## get admin by adminID
GET admin/:adminId
- localhost:5000/api/admin/073247

```
{
    "status": "OK",
    "data": [
        {
            "_id": "636bcf7b3c86024ae7fd66cc",
            "id": "073247",
            "name": "Pradeep Silva",
            "phoneNo": "0778345400",
            "email": "pradeeps@pv.lk",
            "superAdmin": false,
            "dateRegistered": "2022-11-09T16:04:11.247Z"
        }
    ]
}
```
- invalid admin id
```
{
    "message": "could not find admin ID 073247454"
}
```

## admin login authentication
GET admin/auth/:email/:password
- localhost:5000/api/admin/auth/rohanpe@pv.lk/1234

```
{
    "status": "OK",
    "data": {
        "id": "086438",
        "name": "Rohan Perera",
        "email": "rohanpe@pv.lk",
        "phoneNo": "0778654400",
        "dateRegistered": "2022-11-09T16:02:26.434Z",
        "superAdmin": true
    }
}
```
- invalid password
```
{
    "message": "Invalid password"
}
```
- invalid email
```
{
    "message": "Invalid email"
}
```

## get full admin log
GET /admin/admin-log

```
{
    "status": "OK",
    "data": [
        {
            "_id": "636c73e4fc85d265fd567dbd",
            "admin": "636bcf12fc5be3fd2ec8530b",
            "loginAt": "2022-11-10T03:45:40.646Z"
        },
        {
            "_id": "636c79b14ca94be03fbb5c42",
            "admin": "636bcf12fc5be3fd2ec8530b",
            "loginAt": "2022-11-10T04:10:25.244Z"
        },
        {
            "_id": "63901b3a49f11d0e13101c47",
            "admin": "636bcf12fc5be3fd2ec8530b",
            "loginAt": "2022-12-07T04:48:58.075Z"
        },
        {
            "_id": "63905487f4c6cb8583f510d6",
            "admin": "636bcf12fc5be3fd2ec8530b",
            "loginAt": "2022-12-07T08:53:27.514Z"
        }
    ]
}
```
## get default time slot amount
GET /admin/parameters/time-slot
```
{
    "status": "OK",
    "data": 15
}
```
## default open, close time
GET /admin/parameters/day-time
```
{
    "status": "OK",
    "data": {
        "openAt": "9:00 AM",
        "closeAt": "8:00 PM"
    }
}
```
## set special open, close time
POST /admin/parameters/day-time
```
{
    "date": "2022-11-28",
    "openAt": "10:00 AM",
    "closeAt": "5:00 PM",
    "reason": "poya day",
    "adminId": "086438"
}
```
## open, close time of given date
GET /admin/parameters/day-time/2022-11-28
```
{
    "status": "OK",
    "data": {
        "openAt": "10:00 AM",
        "closeAt": "5:00 PM"
    }
}
```
## get full treating animals list
GET /admin/animals
```
{
    "status": "OK",
    "data": [
        {
            "_id": "639026176ee87f9a05be5819",
            "type": "dog",
            "breeds": [
                "bulldog"
            ]
        },
        {
            "_id": "639028b7968803ce1cc042b0",
            "type": "cat",
            "breeds": [
                "persian cat",
                "burmese cat",
                "birman",
                "maine coon",
                "ragdoll",
                "british shorthair"
            ]
        }
    ]
}
```
## add new animal breed
POST admin/animals
```
{
    "type": "cat",
    "breeds": [
        "ragdoll",
        "british shorthair"
    ]
}
```
```
{
    "status": "OK",
    "data": [
        {
            "_id": "639028b7968803ce1cc042b0",
            "type": "cat",
            "breeds": [
                "persian cat",
                "burmese cat",
                "birman",
                "maine coon",
                "ragdoll",
                "british shorthair"
            ],
            "__v": 0
        }
    ]
}
```
## get breeds list for the given animal type
GET admin/animals/:type
- localhost:5000/api/admin/animals/cat
```
{
    "status": "OK",
    "data": [
        "persian cat",
        "burmese cat",
        "birman",
        "maine coon",
        "ragdoll",
        "british shorthair"
    ]
}
```
## get all the animal types list
GET admin/animals/types
```
{
    "status": "OK",
    "data": [
        "dog",
        "cat"
    ]
}
```
## total counts display in the dashboard
GET admin/total-counts
```
{
    "status": "OK",
    "data": {
        "clients": 3,
        "patients": 0,
        "staff": 2,
        "doctors": 0
    }
}
```

