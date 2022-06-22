import './index.css';
import Dashboard from './components/Dashboard';
import Functions from './components/Functions';
import React,{ useState } from 'react';
function App() {
  const [calc, setCalc]= useState('')
  const [result,setResult]=useState('')
  const updateCalc = x => {
    setCalc(calc+x)
  }
  
  return (
    <div className="flex flex-col items-center mt-32">
        <div className='flex bg-black w-96 h-16 justify-end text-white pr-2 pt-5'>
          {result ? '0' : calc}
          </div>
        <div className='flex'>
         
            <div className='bg-orange-400 '>
            <Functions click={()=> updateCalc('+')} func={'+'} />
            <Functions click={()=> updateCalc('-')} func={'-'} />
            <Functions click={()=> updateCalc('x')} func={'x'} />
            <Functions click={()=> updateCalc('/')} func={'/'} />
            <Functions click={()=> updateCalc('.')} func={'.'} />
            </div>
                
          <div>
            <Dashboard click={()=> updateCalc('1')} digit={1}/>
            <Dashboard click={()=> updateCalc('4')} digit={4}/>
            <Dashboard click={()=> updateCalc('7')} digit={7}/>
            <Dashboard click={()=> updateCalc('(')} digit={'('}/>
            <Dashboard />
          </div>

          <div>               
            <Dashboard click={()=> updateCalc('2')} digit={2}/>        
            <Dashboard click={()=> updateCalc('5')} digit={5}/>
            <Dashboard click={()=> updateCalc('8')} digit={8}/>
            <Dashboard click={()=> updateCalc('0')} digit={0} />
            <div className='bg-orange-200 '>
            <Functions click={()=> setCalc('')} func={'AC'} />
            </div>
          </div>

          <div>
            <Dashboard click={()=> updateCalc('3')} digit={3}/>
            <Dashboard click={()=> updateCalc('6')} digit={6}/>
            <Dashboard click={()=> updateCalc('9')} digit={9}/>
            <Dashboard click={()=> updateCalc(')')} digit={')'}/>
            <div className='bg-orange-200 '>
            <Functions click={()=> {}} func={'='} />
            </div>
          </div>
    
        </div>
      </div>
  

  );
}

export default App;
