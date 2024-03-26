
// const heading=React.createElement("h1",{id:"heading"},"hello");

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


/**
 *   <div id="parent">
 *        <div id="child">
 *         <h1></h1>
 *        </div>  
 *   </div>                        -------> create this
 */


const parent=React.createElement('div',{id:"parent"},
          React.createElement('div',{id:"child"},
          React.createElement('h1',{id:"h1tag"},"Hello from nested h1")));

 const root=ReactDOM.createRoot(document.getElementById('root'));
 
 root.render(parent);