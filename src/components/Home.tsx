import { Box, Card, CardContent, CardMedia, Chip, Container, Divider, Grid, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
// import Retreat2023 from '../assets/images/2023-retreat.jpg'

export default function Home() {
    const [meetingDetails, setMeetingDetails] = useState({
        semester: "Fall 2023",
        time: "TBD",
        room: "TBD",
    });

    const [decalDetails, setDecalDetails] = useState({
        semester: "Fall 2023",
        time: "TBD",
        room: "TBD",
    })

    return (
        <>
            <Grid container spacing={3} justifyContent="center" alignItems="stretch" mt={2}>
                <Grid item xs={11} sm={10} md={10}>
                    <Card>
                        <CardContent>
                            <Typography variant="h3" component="h2" mt={1}>
                                Rubik's Cube Club at Berkeley
                            </Typography>
                            <Typography variant="body1" mt={1}>
                                Welcome to the website of the Rubik's Cube Club at Berkeley! We are a student group that promotes the growth of speedcubing in the Bay Area, and of course, Berkeley itself. We welcome anyone of any skill level to come join our meetings, or if you're looking on learning how to solve the cube, please feel free to join our DeCal!
                            </Typography>
                            <Typography variant="body1" mt={1}>
                                Official membership is reserved for UC Berkeley students and alumni.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={11} sm={10} md={5} style={{ display: 'flex' }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="h3" mt={1}>
                                Meetings
                            </Typography>
                            <List>
                                <Divider>
                                    <Chip label="Semester"></Chip>
                                </Divider>
                                <ListItem>
                                    {/* Edit the semester */}
                                    <ListItemText primary={meetingDetails.semester} style={{ textAlign: 'center'}} /> 
                                </ListItem>
                                <Divider>
                                    <Chip label="Room"></Chip>
                                </Divider>
                                <ListItem>
                                    {/* Edit the room */}
                                    <ListItemText primary={meetingDetails.room} style={{ textAlign: 'center'}} /> 
                                </ListItem>
                                <Divider>
                                    <Chip label="Time"></Chip>
                                </Divider>
                                <ListItem>
                                    {/* Edit the time */}
                                    <ListItemText primary={meetingDetails.time} style={{ textAlign: 'center'}} /> 
                                </ListItem>
                                <Divider />
                            </List>
                            <Typography variant="body1" mt={1}>
                                Our weekly meetings consist of us cubing and hanging out each week! It's pretty fun, and we often learn new cubing techniques or simply just race each other.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={11} sm={10} md={5} style={{ display: 'flex' }}>
                    <Card>
                    <CardContent>
                            <Typography variant="h4" component="h3" mt={1}>
                                DeCal
                            </Typography>
                            <List>
                                <Divider>
                                    <Chip label="Semester"></Chip>
                                </Divider>
                                <ListItem>
                                    {/* Edit the semester */}
                                    <ListItemText primary={decalDetails.semester} style={{ textAlign: 'center'}} /> 
                                </ListItem>
                                <Divider>
                                    <Chip label="Room"></Chip>
                                </Divider>
                                <ListItem>
                                    {/* Edit the room */}
                                    <ListItemText primary={decalDetails.room} style={{ textAlign: 'center'}} /> 
                                </ListItem>
                                <Divider>
                                    <Chip label="Time"></Chip>
                                </Divider>
                                <ListItem>
                                    {/* Edit the time */}
                                    <ListItemText primary={decalDetails.time} style={{ textAlign: 'center'}} /> 
                                </ListItem>
                                <Divider />
                            </List>
                            <Typography variant="body1" mt={1}>
                                During the DeCal, people either learn to solve the Rubik's cube for the first time in the Beginner's section, or learn how to get faster/learn new techniques (for instance, blindfolded solving) in the Advanced section.

                                To find the syllabus and look for more details, feel free to look at the <a href="https://decal.rouxl.es">DeCal website</a> for more details.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={11} sm={10} md={5} style={{ display: 'flex' }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="h3" mt={1}>
                                Discord
                            </Typography>
                            <Typography variant="body1" mt={1}>
                                We mainly use Discord for communication. This can not only be about when meetings happen, or DeCal announcements, but also announcements about competitions as well as impromptu planning opportunities.
                            </Typography>
                            <Typography variant="body1" mt={1}>
                                <a href="https://discord.gg/vWgMpbxUKM">Link to our Discord server</a>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={11} sm={10} md={5} style={{ display: 'flex' }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="h3" mt={1}>
                                Contact
                            </Typography>
                            <Typography variant="body1" mt={1}>
                                Feel free to contact us at <a href="mailto:berkeleycubeclub@gmail.com">berkeleycubeclub@gmail.com</a> for any questions that you have.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={11} sm={10} md={10}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="h3" mt={1}>
                                Upcoming Bay Area Competitions
                            </Typography>
                            <Typography variant="body1" mt={1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, officiis! Sequi, corrupti reiciendis! Deserunt odio doloremque cupiditate vitae similique sit tempora laborum, omnis dolorum molestiae iusto facilis qui nesciunt, a, rerum neque excepturi laudantium repudiandae! Dolore placeat, dicta sed modi dignissimos dolores. Obcaecati laudantium hic ratione libero dolores voluptatum pariatur?
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}