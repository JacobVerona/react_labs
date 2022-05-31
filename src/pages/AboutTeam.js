
import { Container } from "react-bootstrap";
import React from "react";
import { useParams } from "react-router-dom";
import team1 from "../assets/team_1.jpg"
import team2 from "../assets/team_2.jpg"
import team3 from "../assets/team_3.jpg"
import { Image } from "react-bootstrap"

export default function AboutTeam() {
    const teamId = useParams().teamId;

    const teamData = {
        1: {
            title: 'Developers',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            imgPath: team1
        },
        2: {
            title: 'Природознавці',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            imgPath: team2
        },
        3: {
            title: 'Маркетологи',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            imgPath: team3
        },
    };

    return (
        <Container>
            <div>
                <Image style={{ width: '30rem' }} src={teamData[teamId].imgPath} />
                <h1>{teamData[teamId].title}</h1>
                <p>{teamData[teamId].description}</p>
            </div>
        </Container >
    );
}