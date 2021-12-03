import React, { useState } from 'react'
import { Formik, Form } from "formik";
import { Input } from 'antd';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import './SauvetageForm.css'
import {toast} from 'react-hot-toast'
import axios from 'axios'


function SauvetageForm() {


    const [step,setStep] = useState(1)
    const [addingSavior,setAddingSavior] = useState(true)

    const handleCloseAddingSavior = ( ) => {
        setAddingSavior(false)
    }

    const handleStartAddingSavior = ( ) => {
        setAddingSavior(true)
    }



 

    return (
        <div className="sauvetage-form-container">
                <Formik
          initialValues={{date : null,
        sauveteurs : []}}

          onSubmit={(values, { resetForm, setFieldValue }) => {

            if(step === 3 ){
                const req = {
                    date : values.date,
                    title : values.titre,
                    description : values.description,
                    savedCrewNumber: values.nbrEquipageSauves,
                    savedNumber : values.nbrPersonnesSauvees,
                    death : values.nbrSauveteursDecedes,
                    boat : values.boatName,
                    names : values.sauveteurs.map(item => item.id),
                    source : values.source

    
                }
                

                axios.post('https://nuitinfoback.herokuapp.com/rescue',req)  
                   .then(res => console.log(res.data))
                   .catch(err => console.error(err))



                
            }
           
            
           
          }}
        >
             {({
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            handleChange,
            handleBlur,
            values,
            isSubmitting,
          }) => (
            <Form className="av-tooltip tooltip-label-bottom" style={{padding:'5%'}}>

                {step===1?<div className="sauvetage-form">
                    <h3>AJOUTER UN SAUVETAGE</h3>

                    <div >
                        <div style={{margin:"1% 0%"}}>
                        <label>Titre &#42;</label>
                        <Input value={values.titre} onChange={(e)=> setFieldValue("titre",e.target.value)} placeholder="Ajouter un titre" />
                        </div>

                        <div style={{margin:"1% 0%",display:"flex",flexDirection:"column"}}>
                        <label>Date &#42;</label>
                        <DatePicker value={values.datePicker} onChange={(date,dateString)=>{
                            setFieldValue("datePicker",date)
                            setFieldValue("date",dateString)}}/>
                        </div>

                        <div style={{margin:"1% 0%"}}>
                        <label>Nom du bateau </label>
                        <Input value={values.boatName} onChange={(e)=> setFieldValue("boatName",e.target.value)} placeholder="Nom du Bateau" />
                        </div>

                        <div style={{margin:"1% 0%"}}>
                        <label>Description &#42;</label>
                        <textarea style={{width:"100%",minHeight:"15vh",borderRadius:"5px",padding:"5px 10px",color:"black"}} value={values.description} onChange={(e)=> setFieldValue("description",e.target.value)} placeholder="Ajouter Une description" />
                        </div>

                    </div>

                  
                </div>:step === 2?
                
                <div className="sauvetage-form">

                    <div >

                        <div style={{margin:"1% 0%"}}>
                        <label>nombre de personnes sauvees</label>
                        <Input value={values.nbrPersonnesSauvees} onChange={(e)=> setFieldValue("nbrPersonnesSauvees",e.target.value)} placeholder="Basic usage" />
                        </div>

                        <div style={{margin:"1% 0%"}}>
                        <label>nombre d'equipage sauvés</label>
                        <Input value={values.nbrEquipageSauves} onChange={(e)=> setFieldValue("nbrEquipageSauves",e.target.value)} placeholder="Basic usage" />
                        </div>

                        <div style={{margin:"1% 0%"}}>
                        <label>nombre de sauvateurs decedés</label>
                        <Input value={values.nbrSauveteursDecedes} onChange={(e)=> setFieldValue("nbrSauveteursDecedes",e.target.value)} placeholder="Basic usage" />
                        </div>


                        <div style={{margin:"1% 0%"}}>
                        <label>Source</label>
                        <Input value={values.source} onChange={(e)=> setFieldValue("source",e.target.value)} placeholder="Basic usage" />
                        </div>
                    </div>

                  
                </div>
                :

                <div className="sauvetage-form">
                <h3 style={{color:"white"}}>Entrer les données des sauveteurs</h3>

                <div>
                    {values.sauveteurs.map(item => <div style={{display:"flex",flexDirection:"column"}}>
                        <span>{item.name}</span>
                        <span>{item.surname}</span>
                        <span>{item.birthday}</span>
                    </div>)}
                </div>

                <div className="sauvetage-form">
                    {addingSavior&& <div>
                    <div style={{margin:"1% 0%"}}>
                    <label>Nom</label>
                    <Input value={values.saviorSurname} onChange={(e)=> setFieldValue("saviorSurname",e.target.value)} placeholder="Basic usage" />
                    </div>

                    <div style={{margin:"1% 0%"}}>
                    <label>Prenom</label>
                    <Input value={values.saviorName} onChange={(e)=> setFieldValue("saviorName",e.target.value)} placeholder="Basic usage" />
                    </div>

                    <div style={{margin:"1% 0%"}}>
                    <label>JOb</label>
                    <Input value={values.saviorJob} onChange={(e)=> setFieldValue("saviorJob",e.target.value)} placeholder="Basic usage" />
                    </div>

                    <div style={{margin:"1% 0%",display:"flex",flexDirection:"column"}}>
                    <label>Date de naissance</label>
                    <DatePicker value={values.saviorDatePicker} onChange={(date,dateString)=>{
                        setFieldValue("saviorDatePicker",date)
                        setFieldValue("saviorBirthday",dateString)}}/>
                    </div>
                    </div>}
                    {!addingSavior?
                    <div style={{marginTop:"1%"}}>
                    <Button onClick={handleStartAddingSavior} type="primary"  icon={<PlusOutlined />} >Add</Button>
                </div>: values.saviorSurname || values.saviorSurname || values.saviorBirthday ?
                   <div style={{marginTop:"1%"}}>
                   <Button onClick={()=> {
                       const newSauveteurs = values.sauveteurs
                       const savueteur = {
                        name: values.saviorSurname,
                        surname: values.saviorName,
                        birthDate : values.saviorBirthday,
                        job : values.saviorJob
                    }
                       setFieldValue("saviorName",null)
                       setFieldValue('saviorSurname',null)
                       setFieldValue('saviorDatePicker',null)
                       setFieldValue('saviorBirthday',null)
                       setFieldValue('saviorJob',null)
                   
                       
                       axios.post('https://nuitinfoback.herokuapp.com/savior',savueteur)
                           .then(res =>{
                               newSauveteurs.push(res.data)
                               setFieldValue("sauveteurs",newSauveteurs)
                            })
                           .catch(err => console.error(err))
                          
                           
                   }} type="primary" >Submit</Button>
                   </div>
                :
                <div style={{marginTop:"1%"}}>
                <Button onClick={handleCloseAddingSavior} type="primary" >Close</Button>
                </div>
                
                }
                   

                    
                </div>

              
            </div>
                
                }

            
           <div className="form-cta">
               {step !==3 ?
               <div style={{marginTop:"1%"}}>
               <button className="cta" onClick={()=>{ 
                    if(step === 1 ){
                        if(!values.titre) alert('specifiez le titre')
                        else if(!values.description) alert('specifiez la description')
                        else if(!values.date) alert('specifier la date')
                        else setStep(step+1)
                    }else setStep(step+1)

               }}>Next</button>
               </div>
               :
               <div style={{marginTop:"1%"}}>
                <button className="cta" type="submit">Submit</button>
                </div>}
     
      </div>  
            </Form>
          )}
            
            
        </Formik>
        {/* <iframe style="border: 0; overflow: hidden;" frameBorder="0" height="100%" width="100%" src="https://nuit-info-2021.toucantoco.com/embed.html?id=4f1af64e-230a-42b8-b90d-2c805800da26&height=190px&width=320px&stage=staging"></iframe> */}
        <div style={{display:"flex",transform:"scale(1.5)"}}>
            <span className={`step ${step===1&&"active"}`} onClick={()=>setStep(1)}></span>
            <span className={`step ${step===2&&"active"}`} onClick={()=>setStep(2)}></span>
            <span className={`step ${step===3&&"active"}`} onClick={()=>setStep(3)}></span>
        </div>
        </div>
      
    )
}

export default SauvetageForm
