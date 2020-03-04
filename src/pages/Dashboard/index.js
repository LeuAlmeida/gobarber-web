import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import api from '~/services/api';

import { Container } from './styles';

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
    </Container>
  );
}

export default Dashboard;
