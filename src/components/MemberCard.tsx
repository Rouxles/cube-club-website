
import { Avatar, Card, CardContent, Grid } from '@mui/material';
import React from 'react';

interface MemberCardProps {
  name: string;
  wcaId: string;
  avatar: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, wcaId, avatar }) => {
  const cardStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
  };

  const avatarContainerStyles: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
    aspectRatio: '1/1',
  };

  const avatarStyles: React.CSSProperties = {
    width: '65%',
    height: '100%',
    maxHeight: '30vh',
  };

  return (
    <Grid item xs={6} sm={4} md={3} style={{ display: 'flex' }}>
      <Card style={cardStyles}>
        <CardContent>
          <div style={avatarContainerStyles}>
            <Avatar style={avatarStyles} src={avatar} alt={name} variant="rounded" />
          </div>
          <div>
            <h2>{name}</h2>
            <a href={`https://www.worldcubeassociation.org/persons/${wcaId}`} target="blank" rel="noreferrer noopener"><p>{`WCA ID: ${wcaId}`}</p></a>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MemberCard;
