import React from 'react'
import { Checkbox, Button } from 'antd';
import './style.scss'

const SelectTemplate = ({ onNext, onPrev }) => {
    return (
        <div>
            <div className='flex h-screen w-screen font-sans'>
                <div className='flex-3 overflow-hinden py-16 px-32 relative '>
                    <div className='flex flex-col pl-2 md:w-full h-[700px] w-[250px] overflow-auto md:overflow-hidden'>
                        <div className='mb-16'>
                            <img className='h-6' src="https://cdn.monday.com/images/logos/logo-full-big.png" alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl font-medium mb-2 select-none'>One last question, how did you hear about us?</h2>
                            <div className='ml-[-8px]'>
                                <div className='flex flex-wrap'>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>Consultant</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>Search engine (Google, Bing, etc.)</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>Audio ad (Podcast, Spotify)</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>YouTube ad</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>LinkedIn</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>TV / Streaming service</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>Billboard / Public transit ad</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>Friend / Colleague</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>Social media (Facebook, Instagram, Reddit, etc.)</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879] mr-2'>Software review sites</Checkbox>
                                    <Checkbox className='Checkbox-style text-base text-[#676879]'>Other</Checkbox>
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-0 md:px-32 md:py-20 pl-8 py-20'>
                            <div className='flex justify-end items-end'>
                                <Button onClick={onPrev} className='h-10 text-base flex justify-center items-center'>
                                    <svg className='mr-2' viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_c85ee8f381 leftIcon_3226e2c5bf noFocusStyle_7a93ee2575" data-testid="icon"><path d="M7.46967 10.5303L8 10L7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303ZM9.06066 10L12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L7.46967 9.46967L8 10L7.46967 10.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303C12.8232 14.2374 12.8232 13.7626 12.5303 13.4697L9.06066 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    <span>Back</span>
                                </Button>
                            </div>
                        </div>
                        <div className='absolute bottom-0 right-0 md:px-32 md:py-20 pr-8 py-20'>
                            <div className='flex justify-end items-end'>
                                <Button onClick={onNext} className='h-10 text-base flex justify-center items-center' style={{ backgroundColor: '#0073ea', color: 'white' }}>
                                    <span>Continue</span>
                                    <svg className='ml-2 mt-[2.5px]' viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_c85ee8f381 rightIcon_b8664810bd noFocusStyle_7a93ee2575" data-testid="icon">
                                        <path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden justify-center flex-2 md:flex" style={{ backgroundColor: '#ffcc00' }}>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png" alt="Back ground" />
                </div>
            </div>
        </div>
    )
}

export default SelectTemplate