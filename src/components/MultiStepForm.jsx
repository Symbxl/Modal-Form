import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import { useState } from "react";

const modalForm = {
  firstName: "",
  lastName: "",
  date: "",
  email: "",
  userName: "",
  password: "",
  select: "",
  dropDown: "",
  file: ""
};


const MultiStepForm = ({closed}) => {
  const [formData, setFormData] = useState(modalForm);
  const [submitData, setSubmitData] = useState([]);
  const [pageOne, setPageOne] = useState(true)
  const [pageTwo, setPageTwo] = useState(false)
  const [pageThree, setPageThree] = useState(false)


  const onChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: [e.target.value]
    }
    )
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitData([formData, ...submitData]);
    console.log(submitData)
  }
  const nextPageOne = () => {
    setPageOne(false)
    setPageTwo(true)
  }
  const nextPageTwo = () => {
    setPageTwo(false)
    setPageThree(true)
  }
  const backPageTwo = () => {
    setPageTwo(false)
    setPageOne(true)
  }
  const backPageThree = () => {
    setPageTwo(true)
    setPageThree(false)
  }
  return (
    <>
    <form className="Modal">
        <StepOne pageOne={pageOne} nextPageOne={nextPageOne} formData={formData} onChange={onChange} closed={closed} />
        <StepTwo pageTwo={pageTwo} nextPageTwo={nextPageTwo} backPageTwo={backPageTwo} formData={formData} onChange={onChange} closed={closed} /> 
        <StepThree pageThree={pageThree} backPageThree={backPageThree} backPageThree={backPageThree} formData={formData} onChange={onChange} closed={closed} onSubmit={onSubmit} />
      </form>
    </>
  )
}
export default MultiStepForm