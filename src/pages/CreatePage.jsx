import React from 'react'
import CreateTemplate from '../components/templates/CreateTemplate'
import CreateMbTemplate from '../components/templates/CreateMbTemplate';
import { MobileCheck } from '../components/layout/MobileCheck';

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
