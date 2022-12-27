import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

const Title = styled.h1`
  font-size: 30px;
  margin: 20px 20px;
  color: rgb(102, 102, 135);
`;

const ContentText = styled.p`
  font-size: 16px;
  margin: 20px 20px;
  color: rgb(102, 102, 135);
  line-height: 25px;
`;

const Link = styled.a`
margin-left: 5px;
`;

const Home = () => {

  return (
    <div>
      <Title>Administrator Dashboard</Title>
      <ContentText>
        Welcome to Journey! Feel free to update content and data in the content manager tab to be shown externally
        in the app. For more questions and inquiries kindly contact support through facebook 
        <Link target="_blank" href="https://www.facebook.com/messages/t/101131125493565">My Journey Limited Chat</Link>.
      </ContentText>
    </div>
  );
};

export default memo(Home);