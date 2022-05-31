import Container from "react-bootstrap/Container";
import React from "react";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function SinglePost() {
    const postId = useParams().postId;

    const postData = {
        1: {
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            src: 'https://picsum.photos/id/34/400/400'
        },
        2: {
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            src: 'https://picsum.photos/id/35/400/400'
        },
        3: {
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            src: 'https://picsum.photos/id/36/400/400'
        },
        4: {
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            src: 'https://picsum.photos/id/37/400/400'
        },
        5: {
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            src: 'https://picsum.photos/id/38/400/400'
        }
    };

    return (
        <Container>
            <div>
                <Image style={{ minWidth: '25%' }} src={postData[postId].src} />
                <article>
                    {postData[postId].description}
                </article>
            </div>
        </Container>
    );
}