import React, { useEffect } from 'react';
import { Radio, Button } from 'antd';
import './style.scss'
import { useFormik } from 'formik';

const InvitationTemplate = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {
            purpose: "",
            role: ""
        },
    });
    useEffect(() => {
        formik.setFieldValue("role", "");
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [formik.values.purpose]);
    return (
        <div>
            <div className='flex h-screen w-screen font-sans'>
                <div className='flex-3 overflow-hinden py-16 px-32 relative '>
                    <div className='flex flex-col pl-2 md:w-full h-[700px] w-[250px] overflow-auto md:overflow-hidden'>
                        <div className='mb-16'>
                            <img className='h-6' src="https://cdn.monday.com/images/logos/logo-full-big.png" alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl font-medium mb-2 select-none'>Hey there, what brings you here today?</h2>
                            <div className='ml-[-8px]'>
                                <div>
                                    <Radio.Group
                                        className='flex flex-wrap'
                                        onChange={formik.handleChange}
                                        value={formik.values.purpose}
                                        name="purpose"
                                    >
                                        <Radio className='radio_style' value={1}>Work</Radio>
                                        <Radio className='radio_style' value={2}>Personal</Radio>
                                        <Radio className='radio_style' value={3}>School</Radio>
                                        <Radio className='radio_style' value={4}>Nonprofits</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                        {formik.values.purpose === 1 && (
                            <div className='mt-16'>
                                <h2 className='text-2xl font-medium mb-2 select-none'>What best describes your current role?</h2>
                                <div className='ml-[-8px]'>
                                    <div className='flex'>
                                        <Radio.Group
                                            onChange={formik.handleChange}
                                            value={formik.values.role}
                                            name="role"
                                            className='flex flex-wrap'>
                                            <Radio className='radio_style' value={1}>Business owner</Radio>
                                            <Radio className='radio_style' value={2}>Team leader</Radio>
                                            <Radio className='radio_style' value={3}>Team member</Radio>
                                            <Radio className='radio_style' value={4}>Freelancer</Radio>
                                            <Radio className='radio_style' value={5}>Director</Radio>
                                            <Radio className='radio_style' value={6}>C-level</Radio>
                                            <Radio className='radio_style' value={7}>VP</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                        )}
                        {formik.values.purpose === 3 && (
                            <div className='mt-16'>
                                <h2 className='text-2xl font-medium mb-2 select-none'>What best describes your current role?</h2>
                                <div className='ml-[-8px]'>
                                    <div className='flex'>
                                        <Radio.Group
                                            onChange={formik.handleChange}
                                            value={formik.values.role}
                                            name="role"
                                            className='flex flex-wrap'>
                                            <Radio className='radio_style' value={1}>Undergraduate student</Radio>
                                            <Radio className='radio_style' value={2}>Graduate student</Radio>
                                            <Radio className='radio_style' value={3}>Faculty member</Radio>
                                            <Radio className='radio_style' value={4}>Other</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                        )}
                        {formik.values.purpose === 4 && (
                            <div className='mt-16'>
                                <h2 className='text-2xl font-medium mb-2 select-none'>What best describes your current role?</h2>
                                <div className='ml-[-8px]'>
                                    <div className='flex'>
                                        <Radio.Group
                                            onChange={formik.handleChange}
                                            value={formik.values.role}
                                            name="role"
                                            className='flex flex-wrap'>
                                            <Radio className='radio_style' value={1}>Board member</Radio>
                                            <Radio className='radio_style' value={2}>Executive</Radio>
                                            <Radio className='radio_style' value={3}>Employee</Radio>
                                            <Radio className='radio_style' value={4}>Volunteer</Radio>
                                            <Radio className='radio_style' value={5}>IT staff</Radio>
                                            <Radio className='radio_style' value={6}>Other</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='absolute bottom-0 right-0 md:px-32 md:py-20 pr-8 py-20'>
                            <div className='flex justify-end items-end'>
                                <Button onClick={onNext} disabled={!formik.values.role && formik.values.purpose !== 2} className='h-10 text-base flex justify-center items-center' style={!formik.values.role && formik.values.purpose !== 2 ? {} : { backgroundColor: '#0073ea', color: 'white' }}>
                                    <span>Continue</span>
                                    <svg className='ml-1 mt-[2.5px]' viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_c85ee8f381 rightIcon_b8664810bd noFocusStyle_7a93ee2575" data-testid="icon">
                                        <path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden justify-center flex-2 md:flex" style={{ backgroundColor: 'rgb(97,97,255)' }}>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png" alt="Back ground" />
                </div>
            </div>
        </div>
    );
}

export default InvitationTemplate;
