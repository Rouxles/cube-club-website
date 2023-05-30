import { Card, CardContent, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function Resources() {
    const [activeTab, setActiveTab] = useState(0);
    
    const handleTabChange = (event: any, newValue: number) => {
        setActiveTab(newValue);
    }

    return (
        <>
            <Grid container spacing={3} justifyContent="center" alignItems="stretch" mt={2}>
                <Grid item xs={11} sm={10} md={10}>
                    <Card>
                        <CardContent>
                            <Typography variant="h3" component="h2" mt={1}>
                                Resources
                            </Typography>
                            <Typography variant="body1" mt={1}>
                            On this page we provide resources for cubers of all skill levels. You will see resources for different methods, as well as a section specifically for DeCal students that can be updated by DeCal instructors.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={11} sm={10} md={10}>
                    <Card>
                        <CardContent>
                        <Tabs value={activeTab} onChange={handleTabChange} centered>
                            <Tab label="CFOP" />
                            <Tab label="Roux" />
                            <Tab label="ZZ" />
                            <Tab label="3BLD" />
                        </Tabs>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}