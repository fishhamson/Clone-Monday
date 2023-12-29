import { Button, Input } from 'antd'
import React from 'react'


const SignupTemplate = () => {
  return (
    <div>
      <div className='flex h-screen w-screen font-sans'>
        <div className='flex-3'>
          <div className='flex flex-col items-center h-full'>
            <div className='flex flex-col justify-center flex-1'>
              <div>
                <h1 className='text-4xl font-medium text-center mb-2'>Welcome to monday.com</h1>
                <h2 className='text-lg text-center mb-12'>Get started - it's free. No credit card needed</h2>
              </div>
              <div className='flex flex-col justify-center w-[400px]'>
                <Button className='h-10 flex items-center justify-center text-base'>
                  <img className='w-4 mr-2' src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg" alt="" />
                  <span>Continue with Google</span>
                </Button>
                <div className='grid gap-2 grid-cols-[1fr,auto,1fr] my-4'>
                  <div className='self-end border-t h-1/2' style={{ color: '#d0d4e4' }}></div>
                  Or
                  <div className='self-end border-t h-1/2' style={{ color: '#d0d4e4' }}></div>
                </div>
                <div className='mb-4'>
                  <Input className='h-10 text-base' placeholder="name@company.com" />
                  <div></div>
                </div>
                <Button className='h-10 text-base' style={{ backgroundColor: '#0073ea', color: 'white' }}>Continue</Button>
                <div className='mt-4 flex flex-col items-center'>
                  <div>By proceeding, you agree to the</div>
                  <div className='flex flex-wrap items-center justify-center'>
                    <a href="https://monday.com/l/fr/le-juridique/tos/"><span style={{ color: '#1f76c2' }}>Term of Service</span></a>
                    <h5 className='px-1'>and</h5>
                    <a href="https://monday.com/l/privacy/privacy-policy/"><span style={{ color: '#1f76c2' }}>Privacy Policy</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-16 flex flex flex-wrap items-center justify-center'>
              <h5 className='pr-1'>Already have an account?</h5>
              <a href="/login"><span style={{ color: '#1f76c2' }}>Log in</span></a>
            </div>
          </div>
        </div>
        <div className="flex justify-center overflow-hidden flex-2" style={{ backgroundColor: 'rgb(97,97,255)' }}>
          <img className='h-100% object-cover' src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png" alt="Background" />
        </div>
      </div>
    </div>
  )
}

export default SignupTemplate