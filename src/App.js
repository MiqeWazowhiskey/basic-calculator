import './index.css';
import Dashboard from './components/Dashboard';
import Result from './components/Result';
import Functions from './components/Functions';
function App() {
 
  return (
    <div className="justify-start">
        <div className='bg-black w-96 h-16 text-white'>  </div>
        <div className='flex '>
         
            <div className='bg-orange-400 '>
            <Functions func={'+'} />
            <Functions func={'-'} />
            <Functions func={'*'} />
            <Functions func={'/'} />
            <Functions func={'.'} />
            </div>
                
          <div>
            <Dashboard digit={1}/>
            <Dashboard digit={4}/>
            <Dashboard digit={7}/>
            <Dashboard />
            <Dashboard />
          </div>

          <div>               
            <Dashboard digit={2}/>        
            <Dashboard digit={5}/>
            <Dashboard digit={8}/>
            <Dashboard digit={0} />
            <div className='bg-orange-200 '>
            <Functions func={'AC'} />
            </div>
          </div>

          <div>
            <Dashboard digit={3}/>
            <Dashboard digit={6}/>
            <Dashboard digit={9}/>
            <Dashboard />
            <div className='bg-orange-200 '>
            <Functions func={'='} />
            </div>
          </div>
    
        </div>
      </div>
  

  );
}

export default App;
