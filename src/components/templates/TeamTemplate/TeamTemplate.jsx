import React, { useState } from 'react'
import { Button, Input, Form, Select } from 'antd'
import './style.scss'

const TeamTemplate = () => {
    const { Option } = Select;
    const roles = [
        {
            value: 'admin',
            label: 'Admin',
            description: `Can invite & manage new users`,
        },
        {
            value: 'member',
            label: 'Member',
            description: 'Can add and edit content',
        },
    ];
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div>
            <div className='flex h-screen w-screen font-sans'>
                <div className='flex-3 overflow-hinden py-16 px-32 relative '>
                    <div className='flex flex-col pl-2 md:w-full h-[700px] w-[250px] overflow-auto md:overflow-hidden'>
                        <div className='mb-16'>
                            <img className='h-6' src="https://dapulse-res.cloudinary.com/image/upload/platform-products-signup/dev/monday-dev-new-logo.png" alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl font-medium mb-2 select-none'>Invite your teammates</h2>
                            <h4 className='text-sm mb-4'>Collaborate with your team to get the most out of monday.com</h4>
                            <div className='ml-[-8px]'>
                                <div>
                                    <Form name="dynamic_form" initialValues={{ friends: [''] }}>
                                        <Form.List name="friends">
                                            {(fields, { add }) => {
                                                return (
                                                    <div>
                                                        {fields.map(field => (
                                                            <Form.Item
                                                                {...field}
                                                                name={[field.name, 'friend']}
                                                            >
                                                                <Input
                                                                    className='w-[720px]'
                                                                    onChange={handleInputChange}
                                                                    addonAfter={
                                                                        <Select
                                                                            labelInValue
                                                                            defaultValue={{ label: 'Admin' }}
                                                                            optionLabelProp="label"
                                                                            style={{ width: 120 }}
                                                                            getPopupContainer={trigger => trigger.parentNode}
                                                                        >
                                                                            {roles.map(role => (
                                                                                <Option value={role.value} label={role.label} key={role.value}>
                                                                                    <div className='flex flex-col'>
                                                                                        <span>{role.label}</span>
                                                                                        <small>{role.description}</small>
                                                                                    </div>
                                                                                </Option>
                                                                            ))}
                                                                        </Select>
                                                                    }
                                                                    placeholder="Add email here" />
                                                            </Form.Item>
                                                        ))}
                                                        <Form.Item>
                                                            <div className='w-[140px] h-[40px] px-4 py-2'>
                                                                <div className='flex justify-center items-center pl-2'>
                                                                    <Button type='text' className='h-10 text-base flex justify-center items-center' onClick={() => add()}>
                                                                        <svg className='mr-2' viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_3a7b5e0d63 leftIcon_6c94251e33 noFocusStyle_2e4989587e" data-testid="icon"><path d="M10.75 6C10.75 5.58579 10.4142 5.25 10 5.25C9.58579 5.25 9.25 5.58579 9.25 6V9.25H6C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75H9.25V14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H10.75V6Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                                        <span>Add another</span>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </Form.Item>
                                                    </div>
                                                );
                                            }}
                                        </Form.List>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-0 md:px-32 md:py-20 pl-8 py-20'>
                            <div className='flex justify-end items-end'>
                                <Button type='text' className='h-10 text-base flex justify-center items-center'>
                                    <span>Remind me later</span>
                                </Button>
                            </div>
                        </div>
                        <div className='absolute bottom-0 right-0 md:px-32 md:py-20 pr-8 py-20'>
                            <div className='flex justify-end items-end'>
                                <Button type='primary' className='h-10 text-base flex justify-center items-center' block disabled={!inputValue} style={inputValue ? { backgroundColor: '#0073ea', color: 'white' } : {}}>
                                    <span>Invite your team</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden justify-center flex-2 md:flex" style={{ backgroundColor: '#00ca72' }}>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png" alt="Back ground" />
                </div>
            </div>
        </div>
    )
}

export default TeamTemplate