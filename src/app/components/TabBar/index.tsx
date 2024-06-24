
import * as React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from "@/app/components/TabPanel";

export default function TabBar() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value}
                      onChange={handleChange} centered
                      textColor="black"
                      indicatorColor="secondary">
                    <Tab label="Following" />
                    <Tab label="For You" />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </>
    )
}