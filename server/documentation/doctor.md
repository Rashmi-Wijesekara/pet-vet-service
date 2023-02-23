## add new doctor
POST api/doctor
- name, phoneNo, email, password fields are required.

```
{
    "id": "123444",
    "name": "Sunil Pathirana",
    "phoneNo": "0770004657",
    "email": "sunilp@pv.lk",
    "address": "No.22, Meegoda, Homagama",
    "qualifications": "Bachelor of Veterinary Science (Honours)",
    "password": "1234"
}
```
```
{
    "status": "OK",
    "data": {
        "id": "123444",
        "name": "Sunil Pathirana",
        "phoneNo": "0770004657",
        "email": "sunilp@pv.lk",
        "address": "No.22, Meegoda, Homagama",
        "qualifications": "Bachelor of Veterinary Science (Honours)",
        "dateRegistered": "2022-12-11T06:38:36.012Z"
    }
}
```
## get all doctors' data
GET api/doctor
```
{
    "status": "OK",
    "data": [
        {
            "_id": "63957aa97dfe90fb5c62b50d",
            "id": "12345",
            "name": "Namal Silva",
            "phoneNo": "0772234657",
            "email": "namalsilva@pv.lk",
            "address": "No.12/A, Meegoda, Homagama",
            "qualifications": "Bachelor of Veterinary Science (Honours), Doctor of Veterinary Medicine",
            "dateRegistered": "2022-12-11T06:37:29.511Z"
        },
        {
            "_id": "63957aec7dfe90fb5c62b514",
            "id": "123444",
            "name": "Sunil Pathirana",
            "phoneNo": "0770004657",
            "email": "sunilp@pv.lk",
            "address": "No.22, Meegoda, Homagama",
            "qualifications": "Bachelor of Veterinary Science (Honours)",
            "dateRegistered": "2022-12-11T06:38:36.012Z"
        }
    ]
}
```
## get doctor by id
GET api/doctor/:doctorId
- localhost:5000/api/doctor/12345
```
{
    "status": "OK",
    "data": [
        {
            "_id": "63957aa97dfe90fb5c62b50d",
            "id": "12345",
            "name": "Namal Silva",
            "phoneNo": "0772234657",
            "email": "namalsilva@pv.lk",
            "address": "No.12/A, Meegoda, Homagama",
            "qualifications": "Bachelor of Veterinary Science (Honours), Doctor of Veterinary Medicine",
            "dateRegistered": "2022-12-11T06:37:29.511Z"
        }
    ]
}
```