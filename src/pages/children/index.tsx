import React, { useState } from 'react';
import Link from 'next/link';
import { Trash2 } from 'react-feather';

import { faker } from '@faker-js/faker/locale/pt_BR';

import { withAuth } from 'utils/withAuth';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

import * as S from './index.styles';

const ChildrenMain = () => {
  const [children, setChildren] = useState([
    {
      id: faker.datatype.number(),
      name: 'Flavio de melo',
      birthdate: new Date().toISOString(),
      sex: 'Masculino',
      staff: [
        { id: 1, name: 'medico 1', contato: '67 99213-2131' },
        { id: 2, name: 'medico 2', contato: '11 99213-2431' },
      ],
      family: [
        { id: 1, name: 'Maria', parentesco: 'Mãe', contato: '67 99999-9999' },
        { id: 2, name: 'Marcos', parentesco: 'Pai', contato: '67 99999-9999' },
      ],
      ultimaChecagem: new Date().toISOString(),
    },
  ]);

  function createRandomObject() {
    return {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
      birthdate: faker.date.past().toISOString(),
      sex: faker.helpers.arrayElement(['Masculino', 'Feminino']),
      staff: [
        {
          id: faker.datatype.number(),
          name: faker.name.fullName(),
          contato: faker.phone.number('11 993##-####'),
        },
        {
          id: faker.datatype.number(),
          name: faker.name.fullName(),
          contato: faker.phone.number('11 993##-####'),
        },
      ],
      family: [
        {
          id: faker.datatype.number(),
          name: faker.name.fullName(),
          parentesco: faker.random.word(),
          contato: faker.phone.number('11 993##-####'),
        },
        {
          id: faker.datatype.number(),
          name: faker.name.fullName(),
          parentesco: faker.random.word(),
          contato: faker.phone.number('11 993##-####'),
        },
      ],
      ultimaChecagem: faker.date.recent().toISOString(),
    };
  }

  function addNewChild() {
    setChildren([...children, createRandomObject()]);
  }

  const totalChildren = children.length;

  return (
    <S.ChildrenContainer>
      <S.ChildrenHeader>
        <h4>
          Crianças <span>{totalChildren}</span>
        </h4>
        <div className="searchBox">
          <Input placeholder="Buscar" name="SearchBox" />
        </div>
        <div>
          <Button onClick={() => addNewChild()}>Adicionar Criança</Button>
          <Link href={'staff/new'}>
            <Button>Criar Criança</Button>
          </Link>
        </div>
      </S.ChildrenHeader>
      <S.ChildrenContent>
        {children.map((child) => {
          return (
            <S.ChildrenCard key={child.id}>
              <S.CardHeader sex={child.sex}>
                <div>
                  <h2>
                    <Link href={`/children/${child.id}`}>{child.name}</Link>
                  </h2>
                  <p className="sub">{new Date(child.birthdate).toLocaleString()}</p>
                </div>
                <div className="ball"></div>
              </S.CardHeader>
              <S.CardContent>
                <div>
                  <h3>Profissionais:</h3>
                  {child.staff.map((staff) => {
                    return (
                      <div className="info" key={staff.id}>
                        {/* TODO: Trocar contato por um modal com todas informações quando clicado */}
                        <strong>{staff.name}</strong> | <span>{staff.contato}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="family">
                  <h3>Familia:</h3>
                  {child.family.map((family) => {
                    return (
                      <div className="info" key={family.id}>
                        {/* TODO: Trocar contato por um modal com todas informações quando clicado */}
                        <strong>{family.name} </strong>({family.parentesco}) | {family.contato}
                      </div>
                    );
                  })}
                </div>
              </S.CardContent>
              <S.CardFooter>
                <div>Ultima intervenção: {child.ultimaChecagem}</div>
                <div className="icon">
                  <Trash2 size={18} />
                </div>
              </S.CardFooter>
            </S.ChildrenCard>
          );
        })}
      </S.ChildrenContent>
    </S.ChildrenContainer>
  );
};

export default withAuth(ChildrenMain);
