import React, { useEffect, useRef } from 'react';

const TableauDashboard = () => {
useEffect(() => {
    const vizContainer = document.getElementById('tableauViz');
    const vizUrl = 'https://public.tableau.com/views/Beehive/Dashboard1?:language=es-ES&:display_count=n&:origin=viz_share_link';
    
    
    const viz = new window.tableau.Viz(vizContainer, vizUrl);
  }, []);

  return (
    <div id="tableauViz" className='tableau-container'></div>
  );

};

export default TableauDashboard;
