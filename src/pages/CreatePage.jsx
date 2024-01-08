import React from 'react'
import { MobileCheck } from '../components/layout/MobileCheck';
import CreateMbTemplate from '../components/templates/CreateTemplate/CreateMbTemplate';
import CreateTemplate from '../components/templates/CreateTemplate/CreateTemplate';

export const CreatePage = () => {
  const isMoblile = MobileCheck()
  return (
    <div>
      {
        isMoblile ? (<CreateMbTemplate/>) : (<CreateTemplate />)
      }
    </div>
  );
}
