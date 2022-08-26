import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import schema from "./schema/schema";

import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import Packages from "./components/Packages";
import Registration from "./components/Registration";
import GrandTotal from "./components/GrandTotal";
import Members from "./components/Members";
import Submit from "./components/Submit";

const INITIAL_VALUES = {
  salution: 'Mr',
  firstname:'karthik'
}

function App() {
  
  const methods = useForm({
    defaultValues: INITIAL_VALUES,
    mode: "onTouched", // "onChange"
    resolver: yupResolver(schema)

});

const onSubmit = (data) => {
  console.log("submitting");
  console.log(JSON.stringify(data));
};
  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Header />
      <PersonalInformation />
       <Packages />
      {/*<Registration />*/}
      <GrandTotal />
      {/*<Members /> */}
      {/* <Submit /> */}
      <input type="submit"/>
    </form>

    </FormProvider>
    
  );
}

export default App;
