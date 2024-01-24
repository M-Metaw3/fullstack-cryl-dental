import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
<div className="NavBar" style={{width: 1920, height: 88, paddingLeft: 140, paddingRight: 140, paddingTop: 24, paddingBottom: 24, background: '#F5F5F5', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
  <div className="Logo" style={{width: 94, height: 40.75, position: 'relative'}}>
    <div className="Vector" style={{width: 8.47, height: 13.06, left: 18.67, top: 0.28, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 8.66, height: 13.27, left: 12.91, top: 0, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 12.09, height: 10.65, left: 3.52, top: 5.41, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 13.17, height: 9.64, left: 0, top: 9.52, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 13.32, height: 10.09, left: 0.55, top: 20.92, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 12.88, height: 10.04, left: 2.83, top: 25.98, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 8.44, height: 13.01, left: 13.61, top: 27.27, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 9.20, height: 13.57, left: 18.98, top: 27.17, position: 'absolute'}}></div>
    <div className="Vector" style={{width: 8.70, height: 13.30, left: 19.12, top: 27.44, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 12.04, height: 10.79, left: 25.38, top: 24.71, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="ClipPathGroup" style={{width: 13.31, height: 10.08, left: 27.74, top: 21.48, position: 'absolute'}}>
      <div className="Vector" style={{width: 13.31, height: 10.08, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
      <div className="Vector" style={{width: 13.11, height: 9.79, left: 0.17, top: 0.22, position: 'absolute', background: '#00A9EB'}}></div>
    </div>
    <div className="Vector" style={{width: 13.36, height: 10, left: 27.28, top: 9.96, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 12.94, height: 9.88, left: 25.50, top: 4.89, position: 'absolute', background: '#00A9EB'}}></div>
    <div className="Vector" style={{width: 39.12, height: 0, left: 45.65, top: 39.94, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
    <div className="Vector" style={{width: 6.33, height: 7.67, left: 51.49, top: 7.08, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 6.95, height: 7.67, left: 59.31, top: 7.08, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.61, height: 7.67, left: 68.18, top: 7.08, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.83, height: 5.22, left: 51.06, top: 18.86, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 3.81, height: 5.22, left: 56.83, top: 18.86, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.52, height: 5.22, left: 61.71, top: 18.86, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.18, height: 5.22, left: 66.99, top: 18.86, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 5.48, height: 5.22, left: 71.24, top: 18.86, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 3.14, height: 5.22, left: 77.42, top: 18.86, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.83, height: 5.22, left: 51.12, top: 28.30, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 3.81, height: 5.22, left: 56.90, top: 28.30, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.10, height: 5.28, left: 61.28, top: 28.27, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 0.88, height: 5.22, left: 66.41, top: 28.30, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.80, height: 5.27, left: 68.22, top: 28.28, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.52, height: 5.22, left: 74.23, top: 28.30, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 3.81, height: 5.22, left: 80.13, top: 28.30, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.31, height: 5.22, left: 85.01, top: 28.30, position: 'absolute', background: 'black'}}></div>
    <div className="Vector" style={{width: 4.10, height: 5.28, left: 89.90, top: 28.27, position: 'absolute', background: 'black'}}></div>
  </div>
  <div className="HeaderRight" style={{justifyContent: 'flex-end', alignItems: 'center', gap: 32, display: 'flex'}}>
    <div className="NavList" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
      <div className="Services" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="Services" style={{textAlign: 'center', color: '#6D758F', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Services</div>
      </div>
      <div className="Blog" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="Blog" style={{textAlign: 'center', color: '#6D758F', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Blog</div>
      </div>
      <div className="About" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="About" style={{textAlign: 'center', color: '#6D758F', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>About Us</div>
      </div>
      <div className="ContactUs" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="ContactUs" style={{textAlign: 'center', color: '#6D758F', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Contact Us</div>
      </div>
      <div className="ContactUs" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="ContactUs" style={{textAlign: 'center', color: '#6D758F', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Language</div>
      </div>
    </div>
    <div className="Button" style={{justifyContent: 'flex-end', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
      <div className="PrimaryButton" style={{paddingLeft: 18, paddingRight: 18, paddingTop: 14, paddingBottom: 14, background: '#3187D1', boxShadow: '0px 1px 4px rgba(24.73, 32.61, 60.56, 0.08)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 3, display: 'flex'}}>
        <div className="Login" style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 20, wordWrap: 'break-word'}}>Login</div>
        <div className="Arrow" style={{width: 12, height: 12, position: 'relative'}}>
          <div className="ArrowRigth" style={{width: 8.40, height: 8.24, left: 1.80, top: 1.88, position: 'absolute'}}>
            <div className="Vector" style={{width: 4.32, height: 8.24, left: 4.08, top: -0, position: 'absolute', border: '1.29px white solid'}}></div>
            <div className="Vector" style={{width: 8.40, height: 0, left: 0, top: 4.12, position: 'absolute', border: '1.29px white solid'}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default NavBar;
