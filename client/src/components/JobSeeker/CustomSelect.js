import React from 'react'
import Select from 'react-select';

const customStyles = {
    
    placeholder: (provided, state) => {
        const textAlign ="left";
        return { ...provided, textAlign };
      }
  }
  
    
const CustomSelect = ({ options, onChange }) => {
    return (
        <div>
            <Select isMulti={true} options={options} onChange={onChange} placeholder='Select skills...' styles={customStyles}/>
        </div>
    );
};

export default CustomSelect;