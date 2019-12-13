/// external modules ///
import React from 'react';
import styled from 'styled-components'

/***************************************
  COMPONENTS
***************************************/

const Item = styled.li `
  flex: 1 0 auto;
  margin: 8px;
  border: 1px solid White;
  border-radius: 8px;
  padding: 4px;
  color: White;
  background: #4299E1;
`;

const DataList = styled.ul `
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Data = styled.li `
  flex: 1 0 auto;
  margin: 4px;
  border: 1px solid White;
  border-radius: 4px;
  padding: 2px;
  color: White;

  display: flex;
  flex-flow: row-nowrap;
`;

const DataLabel = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 4px;
  color: White;
`

const DataValue = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 4px 8px;
  color: #4299E1;
  background: White;
`

/***************************************
  MAIN
***************************************/

const Smurf = ({ smurf = {}, props }) => {
  return (
    <Item className='Smurf'><DataList>
      {['name', 'age', 'height'].map ((label) => (
        <Data key={label}>
          <DataLabel>{label}</DataLabel>
          <DataValue>{smurf[label]}</DataValue>
        </Data>
      ))}
    </DataList></Item>
  );
};

/**************************************/

export default Smurf;
