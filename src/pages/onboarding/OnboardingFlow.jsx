import { useState } from "react";
import OnboardingStart from "./OnboardingStart";
import SingleStoreStep1 from "./SingleStoreStep1";
import SingleStoreStep2 from "./SingleStoreStep2";
import SingleStoreStep3 from "./SingleStoreStep3";
import MultiStoreStep1 from "./MultiStoreStep1";
import MultiStoreStep2 from "./MultiStoreStep2";
import MultiStoreStep3 from "./MultiStoreStep3";

export default function OnboardingFlow() {
    const [step, setStep] = useState(0);
    const [storeType, setStoreType] = useState(null);
    const [storeCount, setStoreCount] = useState(1); // Default to 1 store

    const selectStoreType = (type) => {
        setStoreType(type);
        setStep(1);
    };

    const renderStep = () => {
        if (step === 0) return <OnboardingStart selectStoreType={selectStoreType} />;
        if (storeType === "single") {
            return [
                <SingleStoreStep1 setStep={setStep} />,
                <SingleStoreStep2 setStep={setStep} />,
                <SingleStoreStep3 setStep={setStep} />
            ][step - 1];
        }
        return [
            <MultiStoreStep1 setStep={setStep} setStoreCount={setStoreCount} />,
            <MultiStoreStep2 setStep={setStep} storeCount={storeCount} />,
            <MultiStoreStep3 setStep={setStep} />
        ][step - 1];
    };

    return <div>{renderStep()}</div>;
}