'use strict';

module.exports = function (Patient) {
    /**
 * getting details of patient
 */

    Patient.getPatientDemography = async () => {
        try {
            let result = await Patient.find({
                include: {
                    relation: 'demodrapics',
                    scope: {
                        fields: ['Dob', 'Age', 'MaritalStatus', 'BloodGroup', 'CreateDate', 'CreateBy', 'ModifyBy', 'ModifyDate']
                    }
                }
            });
            // console.log(result);
            if (result.length > 0) {
                // let patientDetails = result.map(patientDetails => ({
                //     id: patientDetails.PatientId,
                //     email: patientDetails.Email,
                //     name: {
                //         first: patientDetails.FirstName,
                //         last: patientDetails.LastName
                //     },
                //     demography: {
                //         DOB: patientDetails.Dob,
                //         age: patientDetails.Age,
                //         maritalstatus: patientDetails.MaritalStatus,
                //         bloodgroup: patientDetails.BloodGroup,
                //         create: {
                //             on: patientDetails.CreateDate,
                //             by: patientDetails.CreateBy
                //         },
                //         modify: {
                //             by: patientDetails.ModifyBy,
                //             on: patientDetails.ModifyDate
                //         }
                //     },
                //     createOn: patientDetails.CreateDate,
                //     modify: {
                //         by: patientDetails.ModifyBy,
                //         on: patientDetails.ModifyDate
                //     }
                // }))
                console.log("result=>",result);
                console.log('dem=>',patientDetails);
                return result;
            } else {
                let a = `not exist`;
                throw new Error(a);
            }
        } catch (err) {
            return ({
                error: true,
                message: err.message
            });
        }
    };
};
