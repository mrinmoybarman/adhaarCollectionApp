import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import SapSchemes from './SapSchemes';


function SapSchemesContainer(props) {
    const [sapStep,setSapStep] = useState(0);
    const[reload,setReload] = useState(false);
    let schemes = [props.isCheckedIGNOAPS,props.isCheckedIGNWPS,props.isCheckedIGNDPS,props.isCheckedSKKSBPA];
    const count = schemes.filter((scheme)=>{return (scheme===true)}).length;
    console.log('step ', sapStep);

    useEffect(() => {
        console.log('reload');
        setReload(true);
    }, [sapStep])
    

    const getSapFormContent = (noOfScheme) => {
        let index = 0;
        let content = [];
        if(props.isCheckedIGNOAPS){
            content.push(<SapSchemes sapStep={sapStep} setSapStep={setSapStep} scheme="IGNOAPS" noOfScheme={noOfScheme} sapData={props.sapData} setSapData={props.setSapData} setIsCompleted={props.setIsCompleted} index={index}/>);
            index++;
        }
        if(props.isCheckedIGNWPS){
            content.push(<SapSchemes sapStep={sapStep} setSapStep={setSapStep} scheme="IGNWPS" noOfScheme={noOfScheme} sapData={props.sapData} setSapData={props.setSapData} setIsCompleted={props.setIsCompleted} index={index}/>);
            index++;
        }
        if(props.isCheckedIGNDPS){
            content.push(<SapSchemes sapStep={sapStep} setSapStep={setSapStep} scheme="IGNDPS" noOfScheme={noOfScheme} sapData={props.sapData} setSapData={props.setSapData} setIsCompleted={props.setIsCompleted} index={index}/>);
            index++;
        }
        if(props.isCheckedSKKSBPA){
            content.push(<SapSchemes sapStep={sapStep} setSapStep={setSapStep} scheme="SKKSBPA" noOfScheme={noOfScheme} sapData={props.sapData} setSapData={props.setSapData} setIsCompleted={props.setIsCompleted} index={index}/>);
            index++;
        }
        return content[sapStep];
    };

    return (
        <>
           {getSapFormContent(count)}
        </>
    )
}

export default SapSchemesContainer