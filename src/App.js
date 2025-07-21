import React from 'react';
import 'antd/dist/antd.css'; // Import Ant Design styles
import SchemaBuilder from './SchemaBuilder';

function App() {
  return (
    <div className="App">
      <h1><center>JSON Schema Builder</center></h1>
      <SchemaBuilder />
    </div>
  );
}

export default App;