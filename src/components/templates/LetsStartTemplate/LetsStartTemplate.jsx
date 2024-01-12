import React from 'react'
import './style.scss'
import { Button, Input } from 'antd'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
const LetsStartTemplate = () => {
    return (
        <div>
            <div className='flex h-screen w-screen font-sans'>
                <div className='content justify-center'>
                    <div className='flex flex-col justify-between h-[510px] w-[440px] m-auto'>
                        <div className='mb-16'>
                            <img className='h-6' src="https://cdn.monday.com/images/logos/logo-full-big.png" alt="" />
                        </div>
                        <div className='flex flex-col h-full justify-between'>
                            <div>
                                <div className='mb-6'>
                                    <h1 className='text-[#323338] text-2xl font-semibold'>Let's start working together</h1>
                                </div>
                                <div className='w-full '>
                                    <section className='flex pb-1 items-center'>
                                        <label className='font-normal text-[#323338] p-1' style={{ fontSize: '12px' }} htmlFor="user_board">Give your board a name, e.g. marketing plan, sales pipeline, quarterly roadmap...</label>
                                    </section>
                                    <Input className='text-[#323338]' id='user_board' style={{ fontSize: '16px' }} placeholder="My first board" />
                                </div>
                            </div>
                            <div className='mb-auto'>
                                <div className='mb-8 mt-12 bg-[#f6f7fb] p-6 rounded-lg text-[#323338]' style={{ fontSize: '14px' }}>In monday.com, "boards" are the place where all your content lives.</div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className='content p-0.5'>
                    <div className='flex flex-col items-end bg-[#f6f7fb] rounded-xl h-full w-full p-1 relative'>
                        <Button className='flex justify-center items-center w-[40px] h-[40px]' type='text'>
                            <CloseOutlined style={{ fontSize: '18px' }} />
                        </Button>
                        <div className='bg-table h-[551px] bg-white flex flex-col pt-8 absolute right-0 top-1/2'>
                            <div className='flex flex-1 flex-col overflow-hidden'>
                                <div className='ml-8'>
                                    <div className='flex justify-start items-center h-8 w-full'>
                                        <div className='top-bar my-3 w-[30%] h-2'></div>
                                    </div>
                                    <div className='flex flex-col justify-between mb-4 mr-8 mt-2'>
                                        <div className='flex flex-row h-[42px] pointer-events-none'></div>
                                    </div>
                                </div>
                                <div className='ml-8 overflow-auto'>
                                    <div className='flex flex-col gap-8'>
                                        <div className='ex-table grid gap-0 justify-center items-start'>
                                            {/* table 1 */}
                                            <div className='col-table mb-2 flex h-9 w-full items-center justify-start'>
                                                <div className='h-[6px] bg-[#579bfc] w-[70%] rounded-lg'></div>
                                            </div>
                                            {/* row 1 */}
                                            <div className='col-table-1 style-table rounded-tl-lg px-6 flex h-[36px] w-full justify-start items-center'>
                                                <div className='w-[70%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-2 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-3 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-4 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-5 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='items-center flex justify-center mx-5'>
                                                    <PlusOutlined className='w-4 h-4 text-gray-500' />
                                                </div>
                                            </div>
                                            {/* row 2 */}
                                            <div className='col-table-1 style-table px-6 flex h-[36px] w-full justify-start items-center'>
                                                <div className='w-[70%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-2 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-3 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-4 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-5 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='items-center flex justify-center mx-5'>
                                                </div>
                                            </div>
                                            {/* row 3 */}
                                            <div className='col-table-1 style-table px-6 flex h-[36px] w-full justify-start items-center'>
                                                <div className='w-[70%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-2 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-3 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-4 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-5 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='items-center flex justify-center mx-5'>
                                                </div>
                                            </div>
                                            {/* row 4 */}
                                            <div className='col-table-1 style-table px-6 flex h-[36px] w-full justify-start items-center'>
                                                <div className='w-[70%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-2 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-3 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-4 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-5 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='items-center flex justify-center mx-5'>
                                                </div>
                                            </div>
                                            {/* row 5 */}
                                            <div className='col-table-1a style-table-a rounded-bl-lg px-6 flex h-[36px] w-full justify-start items-center'>
                                                <div className='w-[70%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-2 style-table-a px-6 flex h-[36px] w-full justify-start items-center'></div>
                                            <div className='col-table-3 style-table-a px-6 flex h-[36px] w-full justify-start items-center'></div>
                                            <div className='col-table-4 style-table-a px-6 flex h-[36px] w-full justify-start items-center'></div>
                                            <div className='col-table-5 style-table-a px-6 flex h-[36px] w-full justify-start items-center'></div>
                                            {/* table 2 */}
                                            <div className='col-table mb-2 flex h-9 w-full items-center justify-start'>
                                                <div className='h-[6px] bg-[#00c875] w-[70%] rounded-lg'></div>
                                            </div>
                                            {/* row 1 */}
                                            <div className='col-table-1b style-table rounded-tl-lg px-6 flex h-[36px] w-full justify-start items-center'>
                                                <div className='w-[70%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-2 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-3 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-4 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='w-[30%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-5 style-table flex justify-center items-center h-[36px] w-full'>
                                                <div className='items-center flex justify-center mx-5'>
                                                    <PlusOutlined className='w-4 h-4 text-gray-500' />
                                                </div>
                                            </div>
                                            {/* row 2 */}
                                            <div className='col-table-1c style-table-a rounded-bl-lg px-6 flex h-[36px] w-full justify-start items-center'>
                                                <div className='w-[70%] h-1 bg-[#c3c6d4] rounded-lg'></div>
                                            </div>
                                            <div className='col-table-2 style-table-a px-6 flex h-[36px] w-full justify-start items-center'></div>
                                            <div className='col-table-3 style-table-a px-6 flex h-[36px] w-full justify-start items-center'></div>
                                            <div className='col-table-4 style-table-a px-6 flex h-[36px] w-full justify-start items-center'></div>
                                            <div className='col-table-5 style-table-a px-6 flex h-[36px] w-full justify-start items-center'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsStartTemplate