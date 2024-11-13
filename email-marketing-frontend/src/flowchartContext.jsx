import React, { createContext, useReducer, useContext } from 'react';

// Initial flowchart state
const initialState = {
  nodes: [],
  edges: [],
};

// Reducer function to update flowchart state
const flowchartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FLOWCHART':
      return { ...state, nodes: action.nodes, edges: action.edges };
    case 'UPDATE_FLOWCHART':
      return { ...state, nodes: action.nodes, edges: action.edges };
    default:
      return state;
  }
};

// Create FlowchartContext to provide the state
const FlowchartContext = createContext();

// Custom hook to use FlowchartContext
export const useFlowchart = () => useContext(FlowchartContext);

// FlowchartProvider to wrap around the app to provide context
export const FlowchartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(flowchartReducer, initialState);

  return (
    <FlowchartContext.Provider value={{ state, dispatch }}>
      {children}
    </FlowchartContext.Provider>
  );
};
