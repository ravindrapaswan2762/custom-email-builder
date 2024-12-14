// =================================Original=================================-//
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './Sidebar';
import DropZone from './DropZone';

import { useSelector } from 'react-redux';

// here multiple cardEditor
import TextEditOption from './TextEditOption';
import ImageEditOption from './ImageEditOption';
import ButtonEditOption from './ButtonEditOption';
import PageAttributes from './PageAttributesEditOption';
import WrapperAttributeEditOption from './WrapperAttributeEditOption';

import PageAttribute from './PageAttribute';
import SectionEditOption from './SectionEditOption';


const Builder = () => {

  const {selectedCard} = useSelector((state) => state.cardToggle);

  const renderEditor = () => {
    switch (selectedCard) {

      case "pageAttribute":
        return <PageAttributes />;
      case "wrapperAttribute":
        return <WrapperAttributeEditOption />;
      case "sectionEditor":
        return <SectionEditOption />;
      case "Text Field":
        return <TextEditOption />;
      case "Button":
        return <ButtonEditOption />;
      case "Image":
        return <ImageEditOption />;
      case "pageAttribute":
        return <PageAttributes />;


      default:
        return <PageAttributes />;
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>wefew ggh </div>
      <div>wefew ggh </div>
      <div style={{ display: 'flex', gap: '5px', padding: '10px' }}>
        {/* Sidebar for draggable items */}
        <Sidebar />

        {/* Drop zone for placing items */}
        {/* <DropZone /> */}
        <PageAttribute />

        {/* need to be render here conditionally */}
        {renderEditor()}
      </div>
    </DndProvider>
  );
};

export default Builder;
