import React, { useState } from 'react';
import { MobileCheck } from '../../components/layout/MobileCheck';
import CreateMbTemplate from '../../components/templates/CreateTemplate/CreateMbTemplate';
import CreateTemplate from '../../components/templates/CreateTemplate/CreateTemplate';
import InvitationTemplate from '../../components/templates/InvitationTemplate/InvitationTemplate';
import SelectTemplate from '../../components/templates/SelectTemplate/SelectTemplate';
import TeamTemplate from '../../components/templates/TeamTemplate/TeamTemplate';


const GetInfo = () => {
    const isMoblile = MobileCheck()
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 0:
                return isMoblile ? (<CreateMbTemplate onNext={handleNext} />) : (<CreateTemplate onNext={handleNext} />);
            case 1:
                return <InvitationTemplate onNext={handleNext} />;
            case 2:
                return <SelectTemplate onPrev={handlePrev} onNext={handleNext} />;
            case 3:
                return <TeamTemplate/>;
            default:
                return isMoblile ? (<CreateMbTemplate onNext={handleNext} />) : (<CreateTemplate onNext={handleNext} />);
        }
    };

    return <div>{renderPage()}</div>;
};

export default GetInfo;
