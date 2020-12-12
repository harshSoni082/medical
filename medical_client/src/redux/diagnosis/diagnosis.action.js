import { 
    LOADING_DIAGNOSIS_RESULTS, 
    LOAD_DIAGNOSIS_RESULTS_SUCCESS,  
    LOAD_DIAGNOSIS_RESULTS_FAILURE
} from './diagnosis.type'

import diagnosis from 'model/index';
import diagnose from 'model/index';


export const loadingDiagnosisResults = () => {
    return {
        type: LOADING_DIAGNOSIS_RESULTS,
    }
}

export const loadDiagnosisResultSuccess = result => {
    return {
        type: LOAD_DIAGNOSIS_RESULTS_SUCCESS,
        response: result,
    }
}

export const loadDiagnosisResultFaliure = error => {
    return {
        type: LOAD_DIAGNOSIS_RESULTS_FAILURE,
        response: error.message
    }
}

// export const getResult = (imgURL, callback) => {
//     return (dispatch) => {
//         dispatch(loadingDiagnosisResults)
//         // return diagnose(imgURL, callback)
//         //         .then(response => {
//         //             const result = response
//         //             console.log("inside reducer");
//         //             console.log(result);
//         //             alert("action");
//         //             dispatch(loadDiagnosisResultSuccess(result))
//         //             return result
//         //         })
//         //         .catch(error => {
//         //             const err = error
//         //             dispatch(loadDiagnosisResultFaliure(err))
//         //             return err
//         //         })
//         try {
//             const result = diagnose(imgURL, callback)
//             dispatch(loadDiagnosisResultSuccess(result))
//             return result;
//         }
//         catch (error) {
//             dispatch(loadDiagnosisResultFaliure(error))
//             return error;
//         }
//     }
// }
