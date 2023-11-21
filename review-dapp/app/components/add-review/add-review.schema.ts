import * as Yup from "yup";

let reviewSchema = Yup.object({
  company: Yup.string().required("Company Name is required"),
  year: Yup.string().required("Year is required"),
  comment: Yup.string().required("Comment is required"),
  rating: Yup.number().required("Rating is required"),
});


export default reviewSchema;