//+++
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

function Header() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to="/"><Button>Avaleht</Button></Link>
        <Link to="/posts"><Button type="primary">Saada post</Button></Link>
        <Link to="/showposts"><Button type="primary">Kõik postitused</Button></Link>
        <Link to="/login"><Button type="primary">Sisselogimine</Button></Link>
        <Link to="/register"><Button type="primary">Registreerimine</Button></Link>
      </div>
    </div>
  );
}

export default Header;
