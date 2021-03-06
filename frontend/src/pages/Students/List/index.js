import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import Table from '~/components/Table';
import Pagination from '~/components/Pagination';

import { InputGroup, ListHeader } from './styles';

export default function StudentList({
  students,
  search,
  onChangePage,
  currentPage,
  numPages,
}) {
  const headers = [
    { key: 'name', title: 'NOME', align: 'left' },
    { key: 'email', title: 'E-MAIL', align: 'left' },
    { key: 'age', title: 'IDADE', align: 'center' },
    { key: 'actions', title: '', align: 'right' },
  ];

  return (
    <>
      <ListHeader>
        <h1>Gerenciando Alunos</h1>
        <div>
          <Link
            to={{ pathname: '/students', state: { edit: true } }}
            type="button"
          >
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </Link>
          <InputGroup>
            <MdSearch size={16} color="#999" />
            <input type="text" placeholder="Buscar aluno" onChange={search} />
          </InputGroup>
        </div>
      </ListHeader>

      <Table data={students} headers={headers} keyExtractor={item => item.id} />

      <Pagination
        onChangePage={onChangePage}
        currentPage={currentPage}
        numPages={numPages}
      />
    </>
  );
}

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.age,
      actions: PropTypes.element,
    })
  ),
  search: PropTypes.func.isRequired,
  onChangePage: PropTypes.func,
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
};

StudentList.defaultProps = {
  students: [],
  onChangePage: () => {},
  currentPage: 1,
  numPages: 1,
};
