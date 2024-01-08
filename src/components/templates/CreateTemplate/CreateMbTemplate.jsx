import React from 'react'
import { Input, Button } from 'antd'
const CreateMbTemplate = () => {
    return (
        <div>
            <div className='flex h-screen w-screen font- flex-col'>
                <div className='grow h-full px-8'>
                    <div className='my-8'>
                        <h1 className='text-2xl font-medium'>Sign up for free</h1>
                    </div>
                    <div className='mb-8'>
                        <section className='mb-1'>
                            <label htmlFor="user[name]" className='py-1 text-sm'>Full name</label>
                        </section>
                        <Input size="large" id='user[name]' className='text-base' placeholder="Enter you name" />
                    </div>
                    <div>
                        <section>
                            <label htmlFor="user[password]" className='py-1 text-sm'>Password</label>
                        </section>
                        <Input.Password size="large" id='user[password]' className='text-base' placeholder="Choose a password" />
                    </div>
                    <div className='mt-12 flex justify-center'>
                        <Button size='large' type="primary" disabled className='w-full text-base'>
                            Continute
                        </Button>
                    </div>
                </div>
                <div className='fixed bottom-0 py-2 px-8'>
                    <img className='h-6' src="https://cdn.monday.com/images/logos/monday_logo_full.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default CreateMbTemplate