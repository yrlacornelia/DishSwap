import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
type BasicTabsProps = {
    instructions: string;
    ingredients: any; // Change the type to string
  };
  
function CustomTabPanel(props: TabPanelProps, ) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className='w-1/2'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box  sx={{ p:3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({instructions, ingredients}:BasicTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='w-1/2' label="Instructions" {...a11yProps(0)} />
          <Tab className='w-1/2'  label="Ingredients" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      {instructions}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
     {ingredients}
      </CustomTabPanel>

    </Box>
  );
}