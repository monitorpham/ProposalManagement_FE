import { ArrayType } from '@angular/compiler';

export class Proposal {
    id: number;
    contentProposal: String;
    Group: String;
    startDate: String;
    endDate: String;
    hospitalDepartment: String;
    currentProgressName: String;
    registerBy: String



    // {
    //     "proposal": {
    //       "id": 1052,
    //       "contentProposal": "sua may tinh",
    //       "startDate": "2020-06-07T11:58:17.136+07:00",
    //       "endDate": null,
    //       "status": false,
    //       "hospitalDepartment": {
    //         "id": 1,
    //         "hospitalDepartmentName": "A1-A"
    //       },
    //       "userExtra": {
    //         "id": 1002,
    //         "phone": "0332724486",
    //         "user": {
    //           "id": 1002,
    //           "login": "du.nv1",
    //           "firstName": "du",
    //           "lastName": "nguyen",
    //           "email": "du@localhost",
    //           "activated": false,
    //           "langKey": "en",
    //           "imageUrl": "",
    //           "resetDate": null
    //         },
    //         "equiqmentGroup": {
    //           "id": 1152,
    //           "nameGroup": "1",
    //           "department": {
    //             "id": 1101,
    //             "departmentName": "Equipment1"
    //           }
    //         }
    //       }
    //     },
    //     "currentProgress": {
    //       "id": 1101,
    //       "startDate": null,
    //       "endDate": null,
    //       "proposalId": 1052,
    //       "progressId": 1
    //     }
    //   }
    // ]
}