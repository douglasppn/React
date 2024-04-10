import React from 'react';
import './Home.css';



function Home() {
    return (
        <>
            <header>
            <div className='w-auto h-60 bg-gray-400 flex  justify-center items-start m-3'>
                    <div className='basis-1/4 bg-red-500'>Header</div>
            </div>
            </header>
            <div>
                <h3 className='text-xl'>Body</h3>
                <h5>justify-start Esquerda</h5>
                <div className="flex flex-row  justify-start m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-end Direita</h5>
                <div className="flex flex-row  justify-end m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-center Centro</h5>
                <div className="flex flex-row  justify-center m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-around estremidades</h5>
                <div className="flex flex-row  justify-between m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-around estremidades com espaçamento</h5>
                <div className="flex flex-row  justify-around m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>

            </div>

            <footer>
            <div className='w-auto h-60 bg-gray-400 flex  justify-center items-start m-3'>
                    <div className='basis-1/4 bg-red-500'>Footer</div>
            </div>
            </footer>

        </>
    );
}

export default Home;