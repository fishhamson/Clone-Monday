import { Button, Input } from 'antd'
import React from 'react'

const CreateTemplate = () => {
  return (
    <div>
      <div className='flex h-screen w-screen font-sans'>
        <div className='flex-3 overflow-hidden py-16 px-32 relative'>
          <div className='flex flex-col justify-between w-full'>
            <div className='mb-16'>
              <img className='h-6' src="https://cdn.monday.com/images/logos/logo-full-big.png" alt="" />
            </div>
            <div>
              <div className='mb-6'>
                <h1 className='text-2xl font-medium'>Create your account</h1>
              </div>
              <div>
                <div className='min-h-[100px] md:min-w-[400px] md:w-3/4 min-w-[300px] w-2/3'>
                  <section className='pb-2'>
                    <label htmlFor="user[name]" className='py-1 text-sm'>Full name</label>
                  </section>
                  <Input size="large" id='user[name]' className='text-base' placeholder="Enter you full name" />
                  <div className='alert'></div>
                </div>
                <div className='min-h-[100px] md:min-w-[400px] md:w-3/4 min-w-[300px] w-2/3'>
                  <section className='pb-2'>
                    <label htmlFor="user[password]" className='py-1 text-sm'>Password</label>
                  </section>
                  <Input.Password size="large" id='user[password]' className='text-base' placeholder="Enter at least 8 characters" />
                  <div className='alert'></div>
                </div>
                <div className='min-h-[100px] md:min-w-[400px] md:w-3/4 min-w-[300px] w-2/3'>
                  <section className='pb-2'>
                    <label htmlFor="account[name]" className='py-1 text-sm'>Account name</label>
                  </section>
                  <Input size="large" id='account[name]' className='text-base' placeholder="For example, company's or department's name" />
                  <div className='alert'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 right-0 md:px-32 md:py-20 pr-4 py-20'>
            <div className='flex justify-end items-end'>
              <Button className='h-10 text-base flex justify-center items-center' style={{ backgroundColor: '#0073ea', color: 'white' }}>
                Continue
                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_c85ee8f381 rightIcon_b8664810bd noFocusStyle_7a93ee2575" data-testid="icon">
                  <path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden justify-center flex-2 md:flex" style={{ backgroundColor: 'rgb(97,97,255)' }}>
          <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png" alt="Back ground" />
        </div>
      </div>
    </div>
  )
}

export default CreateTemplate