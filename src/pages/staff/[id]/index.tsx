import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { faker } from '@faker-js/faker/locale/pt_BR';

import { withAuth } from 'utils/withAuth';
import { Button } from 'components/Button';

import * as S from './index.styles';

const ChildrenId = () => {
  const [annotations, setAnnotations] = useState([
    { id: faker.datatype.number(), content: faker.lorem.paragraph() },
    { id: faker.datatype.number(), content: faker.lorem.paragraph() },
    { id: faker.datatype.number(), content: faker.lorem.paragraph() },
  ]);

  const child = {
    active: faker.helpers.arrayElement([true, false]),
    nome: faker.name.fullName(),
    sexo: faker.helpers.arrayElement(['Masculino', 'Feminino']),
    birthday: faker.date.past().toISOString(),
    family: [
      {
        id: Number(faker.random.numeric(3)),
        name: faker.name.fullName(),
        parentesco: faker.random.word(),
        contato: faker.phone.number('11 993##-####'),
      },
      {
        id: Number(faker.random.numeric(3)),
        name: faker.name.fullName(),
        parentesco: faker.random.word(),
        contato: faker.phone.number('11 993##-####'),
      },
    ],
    staff: [
      {
        id: Number(faker.random.numeric(3)),
        name: faker.name.fullName(),
        contato: faker.phone.number('11 993##-####'),
        role: faker.name.jobTitle(),
      },
      {
        id: Number(faker.random.numeric(3)),
        name: faker.name.fullName(),
        contato: faker.phone.number('11 993##-####'),
        role: faker.name.jobTitle(),
      },
    ],
    anotacoes: [],
  };

  const family = [
    {
      id: faker.datatype.number(),
      nome: faker.name.fullName(),
      role: faker.name.jobTitle(),
      contato: faker.phone.number('11 99###-####'),
    },
    {
      id: faker.datatype.number(),
      nome: faker.name.fullName(),
      role: faker.name.jobTitle(),
      contato: faker.phone.number('11 99###-####'),
    },
    {
      id: faker.datatype.number(),
      nome: faker.name.fullName(),
      role: faker.name.jobTitle(),
      contato: faker.phone.number('11 99###-####'),
    },
  ];

  const staff = [
    {
      id: faker.datatype.number(),
      nome: faker.name.fullName(),
      role: faker.name.jobTitle(),
      contato: faker.phone.number('11 99###-####'),
    },
    {
      id: faker.datatype.number(),
      nome: faker.name.fullName(),
      role: faker.name.jobTitle(),
      contato: faker.phone.number('11 99###-####'),
    },
    {
      id: faker.datatype.number(),
      nome: faker.name.fullName(),
      role: faker.name.jobTitle(),
      contato: faker.phone.number('11 99###-####'),
    },
  ];

  function handleAnnotationClick(id: number) {
    setAnnotations([
      ...annotations,
      { id: faker.datatype.number() + id, content: faker.lorem.paragraph() },
    ]);
    //TODO: abrir modal da anotação clicada, mostrando todo conteudo e se tiver permissão editar
  }

  const router = useRouter();
  const childrenId = router.query.id;

  return (
    <S.ChildInfoContainer>
      <S.ChildInfoHeader>
        <Link href={'/children'}>
          <h4>Crianças</h4>
        </Link>
        &nbsp;/&nbsp;
        <Link href={`/children/${childrenId}`}>
          <h4>{child.nome}</h4>
        </Link>
      </S.ChildInfoHeader>
      <S.ChildInfoContent>
        <div className="leftColumn">
          <div>Avaliação e intervenção</div>
        </div>
        <div className="rightColumn">
          <S.ChildAnnotations>
            <h4>Anotações</h4>
            {annotations.map((a) => {
              return (
                <div key={a.id} onClick={() => handleAnnotationClick(a.id)}>
                  {a.content.slice(0, 60)}...
                </div>
              );
            })}
            <Button>Editar Anotações</Button>
          </S.ChildAnnotations>
          <S.ChildFamily>
            <h4>Familia</h4>
            {family.map((f) => {
              return (
                <div key={f.id}>
                  {f.nome} / {f.contato} / <strong>{f.role}</strong>
                </div>
              );
            })}
            <Button>Editar familiares</Button>
          </S.ChildFamily>
          <S.ChildStaff>
            <h4>Profissionais</h4>
            {staff.map((s) => {
              return (
                <div key={s.id}>
                  <strong>{s.nome}</strong> ({s.role.slice(0, 10)}) / {s.contato}
                </div>
              );
            })}
            <Button>Editar profissionais</Button>
          </S.ChildStaff>
        </div>
      </S.ChildInfoContent>
    </S.ChildInfoContainer>
  );
};

export default withAuth(ChildrenId);
