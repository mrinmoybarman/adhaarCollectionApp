import React, { useEffect, useState } from 'react'
import FamilyMemberAadhaar from './FamilyMemberAadhaar';

function FamilyStepContainer(props) {
    const [familyStep,setFamilyStep] = useState(0);
    const getFamilyAadharContent = (noOfFamilyMember) => {
        let content = [];
        for (let i = 0; i < noOfFamilyMember; i++) {
            content.push(<FamilyMemberAadhaar key={i} index={i} setAadharDataAll={props.setAadharDataAll} aadharDataAll={props.aadharDataAll} setFamilyStep={setFamilyStep} noOfFamilyMember={noOfFamilyMember} setStep={props.setStep} setIsCompleted={props.setIsCompleted} isCompleted={props.isCompleted}/>);
        }
        return content[familyStep];
    };
    return (
        <>
           {getFamilyAadharContent(props.noOfFamilyMember)}
        </>
    )
}

export default FamilyStepContainer