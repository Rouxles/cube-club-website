import { useEffect, useState } from "react";
import { Member } from "../types/member";
import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import MemberCard from "./MemberCard";
import { WCARoot } from "../types/wca_api";

interface MembersProps {
    allIds: Member[];
}

export default function Members({ allIds }: MembersProps) {
    const [apiData, setApiData] = useState<WCARoot[]>([]);
    useEffect(() => {
        const apiLinks = allIds.map(entry => `https://www.worldcubeassociation.org/api/v0/persons/${entry.id}`)

        const fetchData = async () => {
            try {
                const responses = await Promise.all(apiLinks.map((url => fetch(url))));
                const data = await Promise.all(responses.map(response => response.json()));
                setApiData(data);
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [])

    const memberList = apiData.map((elem, index) => {
        return (
            <MemberCard
                name={allIds[index].name}
                wcaId={elem.person.wca_id}
                avatar={elem.person.avatar.is_default ? '':elem.person.avatar.url}
            />
        )
    })

    return (
        <>
            <Box m={2}>
                <Grid container spacing={3} justifyContent="center" alignItems="stretch" mt={2}>
                    {memberList}
                </Grid>
            </Box>   
        </>
    );
}