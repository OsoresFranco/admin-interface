export interface StatusTravel{
    "equipmentId": string,
    "mark": string,
    "model": string,
    "failure": string,
    "travelEquipmentDTOs": [
      {
        "id": string,
        "operationDate": string,
        "observation": string,
        "cadete": string,
        "operator": {
          "id": string,
          "email": string,
          "fullName": string,
          "address": string,
          "cellPhone": string
        },
        "equipment": string,
        "statusTravel": number
      }
    ]
}