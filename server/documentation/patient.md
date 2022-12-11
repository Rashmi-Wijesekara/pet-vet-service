## add new patient
POST api/patient
- only `type` is required
```
{
    "type": "dog",
    "breed": "bulldog",
    "gender": "male",
    "name": "Lucky",
    "client": "107991",
    "dob": "2019-02"
}
```
```
{
    "status": "OK",
    "data": {
        "id": "134668",
        "name": "Lucky",
        "gender": "male",
        "type": "dog",
        "breed": "bulldog",
        "dob": "2019-02-01T00:00:00.000Z",
        "dateRegistered": "2022-12-11T05:46:38.668Z",
        "client": "107991",
        "_id": "63956ebea522ee13d66c5d7e",
        "__v": 0
    }
}
```
## get all patients' data
GET api/patient
```
{
    "status": "OK",
    "data": [
        {
            "_id": "639569f6a132fdc2aefb4458",
            "id": "090407",
            "type": "cat",
            "dateRegistered": "2022-12-11T05:26:14.407Z"
        },
        {
            "_id": "63956d830666ae3a0821ac02",
            "id": "114804",
            "name": "Oscar",
            "type": "cat",
            "dob": "2021-11-01T00:00:00.000Z",
            "dateRegistered": "2022-12-11T05:41:23.804Z",
            "client": "073992"
        },
        {
            "_id": "63956ebea522ee13d66c5d7e",
            "id": "134668",
            "name": "Lucky",
            "gender": "male",
            "type": "dog",
            "breed": "bulldog",
            "dob": "2019-02-01T00:00:00.000Z",
            "dateRegistered": "2022-12-11T05:46:38.668Z",
            "client": "107991"
        }
    ]
}
```
## get patient by id
GET api/patient/:patientId
- localhost:5000/api/patient/134668
```
{
    "status": "OK",
    "data": [
        {
            "_id": "63956ebea522ee13d66c5d7e",
            "id": "134668",
            "name": "Lucky",
            "gender": "male",
            "type": "dog",
            "breed": "bulldog",
            "dob": "2019-02-01T00:00:00.000Z",
            "dateRegistered": "2022-12-11T05:46:38.668Z",
            "client": "107991"
        }
    ]
}
```
