import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { faker } from '@faker-js/faker/locale/pt_BR';

import { withAuth } from 'utils/withAuth';
import { Button } from 'components/Button';
import { Input } from 'components/Input';

import * as S from './index.styles';

const ChildrenId = () => {
  const [annotations, setAnnotations] = useState([
    { id: faker.datatype.number(), content: faker.lorem.paragraph() },
    { id: faker.datatype.number(), content: faker.lorem.paragraph() },
    { id: faker.datatype.number(), content: faker.lorem.paragraph() },
  ]);

  const child = {
    active: faker.datatype.boolean(),
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
    <S.ChildContainer>
      <S.ChildHeader>
        <Link href={'/children'}>
          <h4>Crianças</h4>
        </Link>
        &nbsp;/&nbsp;
        <Link href={`/children/${childrenId}`}>
          <h4>{child.nome}</h4>
        </Link>
      </S.ChildHeader>
      <S.ChildContent>
        <div className="leftColumn">
          <S.ChildInfo>
            <h3>Dados da criança</h3>
            <div>
              <label>Ativo</label>
              <Input name="ativo" type="checkbox" value={String(child.active)} />
            </div>
            <div>
              <label>Nome</label>
              <Input name="nome" value={child.nome} readOnly />
            </div>
            <div>
              {/* TODO: Transformar esse input em do tipo radio*/}
              <label>Sexo</label>
              <Input name="sexo" value={child.sexo} />
            </div>
            <div>
              <label>Data de nascimento</label>
              <Input name="nascimento" value={child.birthday} />
            </div>
            <div>
              <label>Video das sessoes</label>
              <Input name="videos" />
            </div>
            <Button>Salvar</Button>
          </S.ChildInfo>
          <div>
            <h3>Avaliação e intervenção</h3>
          </div>
        </div>
        <div className="rightColumn">
          <S.ChildAnnotations>
            <h3>Anotações</h3>
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
            <h3>Familia</h3>
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
            <h3>Profissionais</h3>
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
      </S.ChildContent>
    </S.ChildContainer>
  );
};

export default withAuth(ChildrenId);
