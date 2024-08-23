//import { data } from 'autoprefixer';
import ApplicationStore from './ApplicationService';


const successCaseCode = [200, 201];

const _fetchService = (PATH, serviceMethod, data, successCallback, errorCallBack) => {
    // const { user_token, userDetails } = ApplicationStore().getStorage('userDetails');
    const END_POINT = 'http://localhost:3001/';

    // https://varmatrix.com/MachoIndustryNew/api/
    //https://varmatrix.com/MachoLatest/api/

    // const { emailId, userRole, companyCode } = userDetails;

    const headers = {
        'Content-Type': 'application/json',
        // authorization: `Bearer ${user_token}`,
        // companyCode: `${companyCode}`,
        // userId: `${emailId}`,
        // userRole: `${userRole}`,
    };
    const body = (serviceMethod === 'GET') || (serviceMethod === 'DELETE') ? {} : { body: JSON.stringify(data) };

    const bodyParameters = {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        headers,
        ...body,
    };

    const bodyObject = {
        method: serviceMethod,
        ...bodyParameters,
    };

    return fetch(END_POINT + PATH, bodyObject)
        .then((response) => {
            console.log(response.status)
            if (successCaseCode.indexOf(response.status) > -1) {
                console.log("return")
                return response.json();
            }
            // eslint-disable-next-line no-throw-literal
            throw {
                errorStatus: response.status,
                errorObject: response.json(),
            };
        })
        .then((dataResponse) => successCallback(dataResponse))
        .catch((error) => {
            console.log("Error")
            error.errorObject.then((errorResponse) => {
                if (error.errorStatus === 401 && errorResponse.message === 'Unable to access the page, Token Expired') {
                    ApplicationStore().clearStorage();
                    // location.reload();
                }
                errorCallBack(error.errorStatus, errorResponse.message);
            });
        });
};

// export const LoginService = (data) => {
//     const PATH = 'api/auth/login';
//     const END_POINT = 'http://localhost:3001/';
//     const SERVICE_METHOD = 'POST';
//     const headers = {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     };

//     return fetch(END_POINT + PATH, {
//         method: SERVICE_METHOD,
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers,
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data),
//     });
// };


// export const TaskShowData = (successCallback, errorCallBack) => _fetchService('Task/addTask', 'POST', {}, successCallback, errorCallBack);

//Template table
export const DeviceShowData = (successCallback, errorCallBack) => _fetchService('template/displayTemp', 'GET', {}, successCallback, errorCallBack);
export const AddTemp = (data, successCallback, errorCallBack) => _fetchService('template/addTemp', 'POST', data, successCallback, errorCallBack);
export const TempEditData = (data,successCallback, errorCallBack) => _fetchService(`template/editTemp/${data.id}`, 'POST', data, successCallback, errorCallBack);
export const TempDeletetData = (data,successCallback, errorCallBack) => _fetchService(`template/deleteTemp/${data.id}`, 'DELETE', data, successCallback, errorCallBack);
//TempAssign
export const AddTempAssign = (data,successCallback, errorCallBack) => _fetchService('tempAssign/addTempAssign', 'POST', data, successCallback, errorCallBack);
export const DeviceShowData1 = (successCallback, errorCallBack) => _fetchService('tempAssign/displayTempAssign', 'GET', {}, successCallback, errorCallBack);
export const DropdownData =(successCallback, errorCallBack) => _fetchService('tempAssign/Dropdowndata', 'GET', {}, successCallback, errorCallBack);
export const UpdateTemplate = (data, successCallback, errorCallBack)=> _fetchService('tempAssign/displayTempAssign/updateTemplate','POST', data, successCallback,errorCallBack);
export const UpdateQcActual = (data, successCallback, errorCallBack)=> _fetchService(`qcactual/updateqcactual`, 'POST', data, successCallback, errorCallBack);
//Quality Field(QCField) Table
// export const DeviceQC = (successCallback, errorCallBack) => _fetchService('quality/displayqc/'+qcField, 'GET', {}, successCallback, errorCallBack);
// export const DeviceQC = (data,successCallback, errorCallBack) => _fetchService('quality/displayqc/', 'GET', {}, successCallback, errorCallBack);
export const DeviceQC = (data,successCallback, errorCallBack) => _fetchService('quality/displayqc/'+data.id, 'GET', {}, successCallback, errorCallBack);
export const AddQC = (data,successCallback, errorCallBack) => _fetchService('quality/addqc', 'POST', data, successCallback, errorCallBack);
export const EditQC = (data,successCallback, errorCallBack) => _fetchService(`quality/editqc/${data.id}`, 'POST', data, successCallback, errorCallBack);
export const DeleteQC = (data,successCallback, errorCallBack) => _fetchService(`quality/deleteqc/${data.id}`, 'DELETE', data, successCallback, errorCallBack);
export const LoginService = (data,successCallback, errorCallBack) => _fetchService(`api/auth/login`,`POST`, data, successCallback, errorCallBack);
export const DeviceQcReading = (data, successCallback, errorCallBack) =>  _fetchService(`qcactual/qcreadings/?tempName=${data.tempName}&rowId=${data.rowId}`, 'GET', {}, successCallback, errorCallBack);
//QCReport
export const QCReportApi = (data,successCallback, errorCallBack) => _fetchService('qcreport/displayQcReport/'+data[0]+"/"+data[1], 'GET', {}, successCallback, errorCallBack);
export const GetTemp = (successCallback, errorCallBack) => _fetchService('qcreport/getTemplate', 'GET', {}, successCallback, errorCallBack);
export const GetItem = (successCallback, errorCallBack) => _fetchService('qcreport/getItemNo', 'GET', {}, successCallback, errorCallBack);
export const GetTempMinMax = (data,successCallback, errorCallBack) => _fetchService('qcreport/getminmax/'+data, 'GET', {}, successCallback, errorCallBack);
//Dashboard
export const GetCount = (successCallback, errorCallBack) => _fetchService('dashBoard/itemCounts', 'GET', {}, successCallback, errorCallBack);
export const GetGraph = (successCallback, errorCallBack) => _fetchService('dashBoard/testedPerHour', 'GET', {}, successCallback, errorCallBack);

