import React,{} from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import { AuthContext } from '../Component/AuthProvider';


const Root = () => {

  
    return (
        <div>
          <header>
      
    </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='bg-green-50 py-10'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;