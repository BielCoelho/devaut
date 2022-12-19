import React, { useState } from 'react';
import Link from 'next/link';
import { Trash2 } from 'react-feather';

import { faker } from '@faker-js/faker/locale/pt_BR';

import { withAuth } from 'utils/withAuth';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { withSSRAuth } from 'utils/withSSRAuth';

import * as S from './index.styles';

const StaffMain = () => {
  const [staffs, setStaffs] = useState([
    {
      id: 1,
      name: 'Flavio de melo',
      role: 'Medico Terapeuta',
      birthdate: new Date().toISOString(),
      sex: 'Masculino',
      children: [
        {
          id: 1,
          name: 'Criança 1',
          parents: [
            {
              parentesco: 'Mae',
              nome: 'Maria do rosario',
              contatos: [
                { telefone: '11 99988-7758' },
                { email: 'mariadorosario@tse.gov.br' },
                { telefone: '11 99988-5758' },
              ],
            },
          ],
        },
      ],
      contato: [
        { tipo: faker.helpers.arrayElement(['email', 'telefone']), dado: faker.internet.email() },
        { tipo: faker.helpers.arrayElement(['email', 'telefone']), dado: faker.internet.email() },
        { tipo: faker.helpers.arrayElement(['email', 'telefone']), dado: faker.internet.email() },
      ],
    },
  ]);

  function createRandomObject() {
    return {
      id: Number(faker.random.numeric(3)),
      name: faker.name.fullName(),
      role: faker.name.jobTitle(),
      birthdate: faker.date.past().toISOString(),
      sex: faker.helpers.arrayElement(['Masculino', 'Feminino']),
      children: [
        {
          id: Number(faker.random.numeric(3)),
          name: faker.name.fullName(),
          parents: [
            {
              parentesco: faker.helpers.arrayElement(['Mãe', 'Pai']),
              nome: faker.name.fullName(),
              contatos: [
                {
                  telefone: faker.random.numeric(9),
                },
              ],
            },
          ],
        },
        {
          id: Number(faker.random.numeric(3)),
          name: faker.name.fullName(),
          parents: [
            {
              parentesco: faker.helpers.arrayElement(['Mãe', 'Pai']),
              nome: faker.name.fullName(),
              contatos: [
                {
                  telefone: faker.random.numeric(9),
                },
              ],
            },
          ],
        },
      ],
      contato: [
        { tipo: faker.helpers.arrayElement(['email', 'telefone']), dado: faker.internet.email() },
        { tipo: faker.helpers.arrayElement(['email', 'telefone']), dado: faker.internet.email() },
        { tipo: faker.helpers.arrayElement(['email', 'telefone']), dado: faker.internet.email() },
      ],
    };
  }

  function addNewStaff() {
    setStaffs([...staffs, createRandomObject()]);
  }

  //TODO: calculate total staff
  const totalChildren = staffs.length;

  return (
    <S.StaffContainer>
      <S.StaffHeader>
        <h4>
          Terapeutas <span>{totalChildren}</span>
        </h4>
        <div className="searchBox">
          <Input placeholder="Buscar" name="SearchBox" />
        </div>
        <div>
          <Button onClick={() => addNewStaff()}>Adicionar terapeuta</Button>
          <Link href={'children/new'}>
            <Button>Criar novo membro de equipe</Button>
          </Link>
        </div>
      </S.StaffHeader>
      <S.StaffContent>
        {staffs.map((staff) => {
          return (
            <S.CardStaff key={staff.id}>
              <S.CardHeader sex={staff.sex}>
                <div>
                  <h2>
                    <Link href={`/children/${staff.id}`}>{staff.name}</Link>
                  </h2>
                  <p className="sub">{staff.role}</p>
                </div>
                <div className="ball"></div>
              </S.CardHeader>
              <S.CardContent>
                <div className="children">
                  <h3>Crianças:</h3>
                  {staff.children.map((child) => {
                    return (
                      <div className="info" key={child.id}>
                        {/* TODO: Trocar contato por um modal com todas informações quando clicado */}
                        <strong>{child.name}</strong>
                      </div>
                    );
                  })}
                </div>
                <div className="family">
                  <h3>Contato:</h3>
                  {staff.contato.map((contato) => {
                    return (
                      <div className="info" key={contato.dado}>
                        {/* TODO: Trocar contato por um modal com todas informações quando clicado */}
                        {contato.dado}
                      </div>
                    );
                  })}
                </div>
              </S.CardContent>
              <S.CardFooter>
                <div></div>
                <div className="icon">
                  <Trash2 size={18} />
                </div>
              </S.CardFooter>
            </S.CardStaff>
          );
        })}
      </S.StaffContent>
    </S.StaffContainer>
  );
};

export default withAuth(StaffMain);
export const getServerSideProps = withSSRAuth();
