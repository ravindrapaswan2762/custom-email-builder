// =================================Original=================================-//
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './Sidebar';
import DropZone from './DropZone';

import TextEditOption from './TextEditOption';
import ImageEditOption from './ImageEditOption';
import ButtonEditOption from './ButtonEditOption';

const Builder = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {/* Sidebar for draggable items */}
        <Sidebar />

        {/* Drop zone for placing items */}
        <DropZone />


        <TextEditOption />
      </div>
    </DndProvider>
  );
};

export default Builder;
