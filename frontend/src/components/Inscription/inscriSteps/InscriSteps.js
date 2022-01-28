import React from 'react'
import './InscriSteps.css'
import { Steps, message, Button} from 'antd';
import FirstStep from '../firstStep/FirstStep';
import SecondStep from '../firstStep/SecondStep';
import LastStep from '../firstStep/LastStep';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux"
import {data} from '../firstStep/SecondStep'
import * as authActions from '../../../redux/actions/Inscription/index'

const { Step } = Steps;
console.log(data)
const steps = [
    {
      title: 'First',
      content: <FirstStep/>,
    },
    {
      title: 'Second',
      content: <SecondStep/>,
    },
   
  ];
function InscriSteps() {
  const dispatch = useDispatch()

    const [current, setCurrent] = React.useState(0);
    const next = () => {
        setCurrent(current + 1);
      };
    const prev = () => {
        setCurrent(current - 1);
      };
      const addVaccin =  (data) => {
        dispatch(authActions.inscription({data}))
      }
    
      const handleAddVaccin = () => {
        message.success('Processing complete!') 
        addVaccin(data)
       
      }
      
    return (
        <div className="firstStep">
            <div className="form1">
                
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                  {current < steps.length - 1 && (
                    console.log(current),
                    <Button className="suivant" onClick={() => next()}>
                      Suivant
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button className="suivant" onClick={() => handleAddVaccin() }>
                      Enregistrer
                    </Button>
                  )}
                  {current > 0 && (
                    <Button style={{ margin: '0 8px' }} className="suivant" onClick={() => prev()}>
                      Précedant
                    </Button>
                  )}
                </div>
                
                <Steps progressDot size="small" current={current} className="steps">
                    {steps.map(item => (
                    <Step key={item.title} />
                    ))}
                </Steps>

            </div>
            
            <img src="/presc.png" alt="inscription" className="img"/>
            
        </div>
    )
}

export default InscriSteps
