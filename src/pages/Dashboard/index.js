import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import api from '~/services/api';

import { Container, Time } from './styles';

function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Léu Almeida</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Léu Almeida</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Léu Almeida</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Léu Almeida</span>
        </Time>
      </ul>
    </Container>
  );
}

export default Dashboard;
