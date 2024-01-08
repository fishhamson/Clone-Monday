import React from 'react'
import { Radio, Button } from 'antd';
import './style.scss'

const SelectTemplate = () => {
    return (
        <div>
            <div className='flex h-screen w-screen font-sans'>
                <div className='flex-3 overflow-hinden py-16 px-32 relative '>
                    <div className='flex flex-col pl-2 md:w-full h-[700px] w-[250px] overflow-auto md:overflow-hidden'>
                        <div className='mb-16'>
                            <img className='h-6' src="https://cdn.monday.com/images/logos/logo-full-big.png" alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl font-medium mb-2 select-none'>Select what you'd like to manage first</h2>
                            <h4 className='text-[#323338] mb-4 text-sm'>You can always add more in the future</h4>
                            <div className='ml-[-8px]'>
                                <div>
                                    <Radio.Group
                                        className='flex flex-wrap'
                                        name="purpose"
                                    >
                                        <Radio className='radio_style' value={1}>Sales and CRM</Radio>
                                        <Radio className='radio_style' value={2}>Nonprofits</Radio>
                                        <Radio className='radio_style' value={3}>Operations</Radio>
                                        <Radio className='radio_style' value={4}>HR and Recruiting</Radio>
                                        <Radio className='radio_style' value={5}>Legal</Radio>
                                        <Radio className='radio_style' value={6}>Marketing</Radio>
                                        <Radio className='radio_style' value={7}>Construction</Radio>
                                        <Radio className='radio_style' value={8}>Finance</Radio>
                                        <Radio className='radio_style' value={9}>Software development</Radio>
                                        <Radio className='radio_style' value={10}>IT</Radio>
                                        <Radio className='radio_style' value={11}>Product management</Radio>
                                        <Radio className='radio_style' value={12}>PMO</Radio>
                                        <Radio className='radio_style' value={13}>Design and Creative</Radio>
                                        <Radio className='radio_style' value={14}>Education</Radio>
                                        <Radio className='radio_style' value={15}>Other</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-0 md:px-32 md:py-20 pl-8 py-20'>
                            <div className='flex justify-end items-end'>
                                <Button className='h-10 text-base flex justify-center items-center'>
                                    <svg className='mr-2' viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_c85ee8f381 leftIcon_3226e2c5bf noFocusStyle_7a93ee2575" data-testid="icon"><path d="M7.46967 10.5303L8 10L7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303ZM9.06066 10L12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L7.46967 9.46967L8 10L7.46967 10.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303C12.8232 14.2374 12.8232 13.7626 12.5303 13.4697L9.06066 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    <span>Back</span>
                                </Button>
                            </div>
                        </div>
                        <div className='absolute bottom-0 right-0 md:px-32 md:py-20 pr-8 py-20'>
                            <div className='flex justify-end items-end'>
                                <Button className='h-10 text-base flex justify-center items-center' style={{ backgroundColor: '#0073ea', color: 'white' }}>
                                    <span>Continue</span>
                                    <svg className='ml-1 mt-[2.5px]' viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_c85ee8f381 rightIcon_b8664810bd noFocusStyle_7a93ee2575" data-testid="icon">
                                        <path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden justify-center flex-2 md:flex" style={{ backgroundColor: '#ffcc00' }}>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/select-what-youd-like-to-manage.png" alt="Back ground" />
                </div>
            </div>
        </div>
    )
}

export default SelectTemplate