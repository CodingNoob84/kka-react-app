
import * as yup from "yup";

const schema = yup.object({
// category: yup.string().required('Please Select category').nullable(),

firstname:yup.string("Must be String")
        .required("Please enter Firstname")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),

donationamount:yup.string(),
        

// lastname:yup.string("Must be String")
//         .required("Please enter Lastname")
//         .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
        

// address1:yup.string()
//         .required("Please enter Address"),

// country:yup.string()
//         .required("Please select Country"),

// city: yup.string("Must be String")
//         .required("Please enter City Name"), 

// state: yup.string()
//         .required("Please select State"),

// zipcode:yup.string()
//         .required("Please enter ZipCode")
//         .matches(/(^[0-9]{5}(?:-[0-9]{4})?$)/, "Must be Valid ZipCode"),

// email:yup.string()
//         .required("Please enter Email Address")
//         .matches(/(^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$)/,"Must be Valid Email Address" ), 

// homenumber: yup.string()
//                 .required("Please enter Home Number"),

// mobilenumber:yup.string()
//                 .required("Please enter Phone Number"),
       });

export default schema;