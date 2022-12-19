// TO-DO - Remove this line below
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useCallback, useState } from 'react';
import { Trash2 } from 'react-feather';
import Link from 'next/link';

import { faker } from '@faker-js/faker/locale/pt_BR';

import { Button, ButtonVariantEnum } from 'components/Button';
import { Input } from 'components/Input';

import * as S from './Children.styles';

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

const ChildrenContentBase = () => {
  const [children, setChildren] = useState<Array<any>>([]);
  const totalChildren = children.length;

  const addNewChild = useCallback(() => {
    setChildren((prevState) => [...prevState, createRandomObject()]);
  }, []);

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
          <Button onClick={() => addNewChild()} variant={ButtonVariantEnum.SECONDARY}>
            Adicionar Criança
          </Button>
          <Link href={'staff/new'}>
            <Button variant={ButtonVariantEnum.SECONDARY}>Criar Criança</Button>
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
                  {child.staff.map((staff: any) => {
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
                  {child.family.map((family: any) => {
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

export const ChildrenContent = memo(ChildrenContentBase);
