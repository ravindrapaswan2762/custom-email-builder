import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './Sidebar';
import DropZone from './DropZone';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


// Multiple card editors
import TextEditOption from './TextEditOption';
import ImageEditOption from './ImageEditOption';
import ButtonEditOption from './ButtonEditOption';
import PageAttributes from './PageAttributesEditOption';
import WrapperAttributeEditOption from './WrapperAttributeEditOption';
import SectionEditOption from './SectionEditOption';

import PageAttribute from './PageAttribute';

const Builder = () => {
  const { selectedEditor } = useSelector((state) => state.cardToggle);
  console.log("selectedCard in builder: ", selectedEditor)

  const renderEditor = () => {
    switch (selectedEditor) {
      case 'pageAttribute':
        return <PageAttributes />;
      case 'wrapperAttribute':
        return <WrapperAttributeEditOption />;
      case 'sectionEditor':
        return <SectionEditOption />;
      case 'Text':
        return <TextEditOption />;
      case 'Button':
        return <ButtonEditOption />;
      case 'Image':
        return <ImageEditOption />;
      default:
        return <PageAttributes />;
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', gap: '5px', padding: '10px' }}>
        {/* Sidebar for draggable items */}
        <Sidebar />

        {/* Drop zone for placing items */}
        <PageAttribute />

        {/* Render Editor Conditionally */}
        {renderEditor()}
      </div>
    </DndProvider>
  );
};

export default Builder;
