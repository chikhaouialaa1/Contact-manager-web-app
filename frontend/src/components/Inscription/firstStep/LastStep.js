import React from 'react'
import './FirstStep.css'
import { Input, DatePicker, InputNumber, Button, Radio} from 'antd';
import {data} from './SecondStep'

function LastStep() {
    console.log(data)

    return (
        <div className="formulaire">

                <h6> Avez vous déjà attrapé le COVID-19</h6>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
                    <Radio value={1}>Oui</Radio>
                    <Radio value={2}>Non</Radio>
                </Radio.Group>
                <h6 style={{marginBottom:"10px"}}> Si oui quelle est la date</h6>
                <DatePicker className="inputInfo"/>
                
        </div>
    )
}

export default LastStep
