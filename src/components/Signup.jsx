import React from 'react'
import styled from 'styled-components';
import card from "../images/card.png";
import signupBackground from "../images/card.png";


export default function Signup() {
  return <Section className='flex gap j-between'>
    <div className='content text-center'>
        <h2>
            Sign up with any bank account linking and card
        </h2>
    </div>
    <div className="image">
        <img src={card} alt="card" />
    </div>
    </Section>
  
}

const Section = styled.section`
    background-image: url(${signupBackground});
    background-size: contain;
    margin: 0;
    margin-bottom: 8rem;
    max-width: 100vw;
    overflow: hidden;
    .content {
        padding: 8rem;
        h2 {
            font-size: 2.4rem;
        }
    }

    .image{
        img {
            height: 100%;
        }
    }
`;
