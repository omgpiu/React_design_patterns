import { useState } from 'react';
import ControlledSteps from './ControlledSteps';
import ControlledModal from './ControlModal';
import UncontrolledSteps from './UncontrolledSteps';
import PixelButton from '../Common/Buttons/PixelButton';
import { Modals } from '../Common/enums';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';


const StepOne = ({ goToNext }: any) => {
    return <>
        <h1>Step One</h1>
        <input type="text"/>
        <PixelButton onClick={ () => goToNext({ name: 'Step1' }) }>Next</PixelButton>
    </>;
};
const StepTwo = ({ goToNext }: any) => {
    return <>
        <h1>Step Two</h1>
        <input type="text"/>
        <PixelButton onClick={ () => goToNext({ age: 'Step2' }) }>Next</PixelButton>
    </>;
};
const StepThree = ({ goToNext }: any) => {
    return <>
        <h1>Step Three</h1>
        <input type="text"/>
        <PixelButton onClick={ () => goToNext({ name3: 'Step3' }) }>Next</PixelButton>
    </>;
};
const StepFour = ({ goToNext }: any) => {
    console.log('StepThree');
    return <>
        <h1>Step Four</h1>
        <input type="text"/>
        <PixelButton onClick={ () => goToNext({ hairColor: 'Step4' }) }>Next</PixelButton>
    </>;
};

const Forms = () => {
    const [show, shouldShow] = useState(false);
    const [data, setData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const onNext = (stepData: any) => {
        setData({ ...data, ...stepData });
        setCurrentIndex(currentIndex + 1);
    };
    const onFinish = (data: any) => {
        console.log(data);
    };
    return (<div>
        <ControlledForm/>
        <UncontrolledForm/>
        <PixelButton onClick={ () => shouldShow(true) }> { show ? Modals.Hide : Modals.Show }</PixelButton>
        <ControlledModal shouldShow={ show } onClose={ () => shouldShow(false) }/>
        <UncontrolledSteps onFinish={ onFinish }>
            <StepOne/>
            <StepTwo/>
            <StepThree/>
            <StepFour/>
        </UncontrolledSteps>
        <ControlledSteps onNext={ onNext } currentIndex={ currentIndex }>
            <StepOne/>
            <StepTwo/>
            {/*@ts-ignore*/ }
            { data.name3 === 'Step4' && <StepThree/> }
            <StepFour/>
        </ControlledSteps>
    </div>);
};
export default Forms;
