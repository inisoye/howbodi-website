import React, { useState, useEffect } from 'react';
import Client from './Contentful';

// create context
const CompleteDataContext = React.createContext();

// create provider
const CompleteDataProvider = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterContent = (completeData) => {
    const filteredDataArray = completeData.map((eachItem) => {
      const id = eachItem.sys.id;
      const contentType = eachItem.sys.contentType.sys.id;
      const content = { ...eachItem.fields, id, contentType };

      return content;
    });

    return filteredDataArray;
  };

  useEffect(() => {
    setIsLoading(true);
    const getCompleteData = async () => {
      try {
        const completeDataEntries = await Client.getEntries();
        const filteredData = filterContent(completeDataEntries.items);

        setFilteredData(filteredData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getCompleteData();
  }, []);

  // created to pick out relevant data from all data based on content type
  const getRelevantArray = (completeData, relevantContentType) => {
    // object.values used to ensure completeData is an array before filter method is applied
    const relevantArray = Object.values(completeData).filter(
      (eachItem) => eachItem.contentType === relevantContentType
    );
    return relevantArray;
  };

  // created to pick out a single test based on its slug property
  const getSingleTest = (completeData, routerSlug) => {
    const allTestsArray = Object.values(completeData).filter(
      (eachItem) => eachItem.contentType === 'tests'
    );
    const singleTest = allTestsArray.find((test) => test.slug === routerSlug);
    return singleTest;
  };

  const getSingleTestIndex = (completeData, routerSlug) => {
    const allTestsArray = Object.values(completeData).filter(
      (eachItem) => eachItem.contentType === 'tests'
    );
    const singleTest = allTestsArray.findIndex(
      (test) => test.slug === routerSlug
    );
    return singleTest;
  };

  const cardColourClassesArray = [
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
    'test-1-color',
    'test-2-color',
    'test-3-color',
    'test-4-color',
    'test-5-color',
    'test-6-color',
  ];

  return (
    <CompleteDataContext.Provider
      value={{
        ...filteredData,
        isLoading: isLoading,
        getRelevantArray: getRelevantArray,
        getSingleTest: getSingleTest,
        getSingleTestIndex: getSingleTestIndex,
        cardColourClassesArray: cardColourClassesArray,
      }}
    >
      {props.children}
    </CompleteDataContext.Provider>
  );
};

// create consumer
const CompleteDataConsumer = CompleteDataContext.Consumer;

export { CompleteDataContext, CompleteDataProvider, CompleteDataConsumer };
