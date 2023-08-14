import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TabsBodyProps } from '@material-tailwind/react';
interface TabPanelProps {
 ingredients: any,
 instructions: any,
}
export default function LabTabs({ingredients, instructions}: TabPanelProps) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>    <div className='md:hidden'>
      
    <Box sx={{ width: '100%', typography: 'body1', backgroundColor:"#E7EEE3"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            style={{ display: 'flex', width: '100%', backgroundColor:"" }} // Added width to TabList
            aria-label="lab API tabs example"
          >
            <Tab style={{ flex: 1, margin:"auto" }} label="Instructions" value="1" /> {/* Removed width, added flex */}
            <Tab style={{ flex: 1, margin:"auto"}}  label="Ingredients" value="2" /> {/* Removed width, added flex */}
          </TabList>
        </Box>
        <div className='bg-white-light'>
        <TabPanel value="1"> <div className='px-5 py-4'>{instructions}</div></TabPanel>
        <TabPanel value="2"> <div className='px-5 py-4'>{ingredients}</div></TabPanel></div>
      </TabContext>
    </Box>
  </div>
  <div className='hidden md:flex justify-center gap-8'>
    <div className='w-1/2 py-4 px-8' >
      <h4 className='mb-3'>Directions</h4>
    {instructions}</div>
    
    <div className='bg-white-light py-4 px-20 h-96 min-h-min'>
    <h4 className='mb-3'>Ingredients</h4>
    {ingredients}</div>

  </div>
  
  </>

  

  );

}
