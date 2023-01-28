// TO-DO - Remove this line below
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Trash2 } from 'react-feather';
import Link from 'next/link';

import { faker } from '@faker-js/faker/locale/pt_BR';

import { Button, ButtonVariantEnum } from 'components/Button';
import { Input } from 'components/Input';
import { useDebounce } from 'hooks/useDebounce';
import { AnimatePresence } from 'framer-motion';

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
  const defaultChildren = [
    {
      id: 56083,
      name: 'Yasmin Melo',
      birthdate: '2022-08-30T22:13:56.198Z',
      sex: 'Feminino',
      staff: [
        {
          id: 44968,
          name: 'Emanuelly Macedo',
          contato: '11 99342-1683',
        },
        {
          id: 96427,
          name: 'Ana Júlia Moreira',
          contato: '11 99338-6751',
        },
      ],
      family: [
        {
          id: 14595,
          name: 'Sra. Esther Moraes',
          parentesco: 'Cambridgeshire',
          contato: '11 99333-9679',
        },
        {
          id: 35956,
          name: 'Emanuelly Pereira',
          parentesco: 'access',
          contato: '11 99395-8028',
        },
      ],
      ultimaChecagem: '2022-12-19T16:30:54.501Z',
    },
    {
      id: 91281,
      name: 'Nataniel Saraiva',
      birthdate: '2022-02-28T11:29:32.670Z',
      sex: 'Feminino',
      staff: [
        {
          id: 45373,
          name: 'Marcos Franco',
          contato: '11 99366-5355',
        },
        {
          id: 32884,
          name: 'Guilherme Carvalho',
          contato: '11 99333-4863',
        },
      ],
      family: [
        {
          id: 94988,
          name: 'Júlio Souza',
          parentesco: 'convergence',
          contato: '11 99350-2518',
        },
        {
          id: 44949,
          name: 'Ofélia Melo',
          parentesco: 'subsidiary',
          contato: '11 99300-3611',
        },
      ],
      ultimaChecagem: '2022-12-19T10:50:53.883Z',
    },
    {
      id: 15793,
      name: 'Esther Costa Jr.',
      birthdate: '2022-12-12T06:59:51.418Z',
      sex: 'Masculino',
      staff: [
        {
          id: 81920,
          name: 'Warley Nogueira Neto',
          contato: '11 99340-4895',
        },
        {
          id: 84872,
          name: 'Roberto Xavier',
          contato: '11 99392-9154',
        },
      ],
      family: [
        {
          id: 93241,
          name: 'Júlio Santos',
          parentesco: 'language',
          contato: '11 99301-5276',
        },
        {
          id: 8833,
          name: 'Bryan Franco',
          parentesco: 'Berkshire',
          contato: '11 99342-4338',
        },
      ],
      ultimaChecagem: '2022-12-19T12:33:47.100Z',
    },
    {
      id: 32581,
      name: 'Ricardo Costa',
      birthdate: '2022-08-18T06:57:09.719Z',
      sex: 'Feminino',
      staff: [
        {
          id: 44018,
          name: 'Gabriel Silva',
          contato: '11 99335-2764',
        },
        {
          id: 50170,
          name: 'Ana Luiza Martins',
          contato: '11 99352-7312',
        },
      ],
      family: [
        {
          id: 50042,
          name: 'Srta. Júlio Batista',
          parentesco: 'IB',
          contato: '11 99398-3453',
        },
        {
          id: 73742,
          name: 'Marina Barros',
          parentesco: 'forecast',
          contato: '11 99375-9058',
        },
      ],
      ultimaChecagem: '2022-12-19T21:01:09.208Z',
    },
    {
      id: 40209,
      name: 'Maria Alice Franco',
      birthdate: '2022-11-26T02:38:20.686Z',
      sex: 'Masculino',
      staff: [
        {
          id: 88054,
          name: 'Dr. Felícia Reis',
          contato: '11 99367-7280',
        },
        {
          id: 78551,
          name: 'Deneval Costa',
          contato: '11 99310-4809',
        },
      ],
      family: [
        {
          id: 26799,
          name: 'Antonella Reis',
          parentesco: 'Fabiano',
          contato: '11 99397-0763',
        },
        {
          id: 70874,
          name: 'Liz Martins',
          parentesco: 'Bedfordshire',
          contato: '11 99307-3462',
        },
      ],
      ultimaChecagem: '2022-12-19T10:00:16.383Z',
    },
    {
      id: 71469,
      name: 'Dr. Anthony Saraiva',
      birthdate: '2022-08-19T15:50:04.041Z',
      sex: 'Masculino',
      staff: [
        {
          id: 35599,
          name: 'Sophia Saraiva',
          contato: '11 99342-7405',
        },
        {
          id: 81667,
          name: 'Caio Moraes',
          contato: '11 99314-6287',
        },
      ],
      family: [
        {
          id: 12236,
          name: 'Enzo Nogueira',
          parentesco: 'Berkshire',
          contato: '11 99388-8044',
        },
        {
          id: 40147,
          name: 'Sra. Giovanna Xavier',
          parentesco: 'reboot',
          contato: '11 99345-2882',
        },
      ],
      ultimaChecagem: '2022-12-19T09:48:32.586Z',
    },
    {
      id: 73825,
      name: 'Deneval Oliveira',
      birthdate: '2022-07-17T13:58:10.367Z',
      sex: 'Masculino',
      staff: [
        {
          id: 42613,
          name: 'Maria Xavier',
          contato: '11 99331-5823',
        },
        {
          id: 66517,
          name: 'Hélio Melo',
          contato: '11 99365-7492',
        },
      ],
      family: [
        {
          id: 35633,
          name: 'Sílvia Santos',
          parentesco: 'Extended',
          contato: '11 99378-4845',
        },
        {
          id: 51917,
          name: 'Sra. Roberto Macedo',
          parentesco: 'Franklin',
          contato: '11 99373-4867',
        },
      ],
      ultimaChecagem: '2022-12-19T23:05:33.175Z',
    },
    {
      id: 34027,
      name: 'Nicolas Saraiva',
      birthdate: '2022-03-13T09:23:11.036Z',
      sex: 'Masculino',
      staff: [
        {
          id: 76960,
          name: 'Davi Lucca Moraes',
          contato: '11 99344-4427',
        },
        {
          id: 36251,
          name: 'Janaína Oliveira Jr.',
          contato: '11 99335-3165',
        },
      ],
      family: [
        {
          id: 19443,
          name: 'Núbia Nogueira',
          parentesco: 'winkle',
          contato: '11 99397-8384',
        },
        {
          id: 99595,
          name: 'Ana Luiza Carvalho',
          parentesco: 'Ogden',
          contato: '11 99391-0747',
        },
      ],
      ultimaChecagem: '2022-12-19T04:48:48.768Z',
    },
    {
      id: 55039,
      name: 'Cauã Franco Filho',
      birthdate: '2022-04-16T13:59:57.317Z',
      sex: 'Masculino',
      staff: [
        {
          id: 75055,
          name: 'Srta. Ofélia Franco',
          contato: '11 99344-1151',
        },
        {
          id: 92282,
          name: 'Márcia Braga',
          contato: '11 99305-8590',
        },
      ],
      family: [
        {
          id: 88797,
          name: 'Sarah Santos Neto',
          parentesco: 'Algodão',
          contato: '11 99374-6926',
        },
        {
          id: 91876,
          name: 'Eduarda Carvalho',
          parentesco: 'distributed',
          contato: '11 99386-0361',
        },
      ],
      ultimaChecagem: '2022-12-19T05:09:19.572Z',
    },
    {
      id: 36258,
      name: 'Mércia Xavier',
      birthdate: '2022-11-09T12:16:01.129Z',
      sex: 'Masculino',
      staff: [
        {
          id: 89630,
          name: 'Natália Saraiva',
          contato: '11 99382-7048',
        },
        {
          id: 90237,
          name: 'Maria Júlia Braga',
          contato: '11 99326-6094',
        },
      ],
      family: [
        {
          id: 48456,
          name: 'Dr. Janaína Macedo',
          parentesco: 'optical',
          contato: '11 99348-6466',
        },
        {
          id: 46582,
          name: 'Eloá Oliveira',
          parentesco: 'aboard',
          contato: '11 99388-8897',
        },
      ],
      ultimaChecagem: '2022-12-19T12:37:10.072Z',
    },
    {
      id: 9198,
      name: 'Elísio Souza Neto',
      birthdate: '2022-08-18T10:40:42.611Z',
      sex: 'Masculino',
      staff: [
        {
          id: 80896,
          name: 'Sara Souza',
          contato: '11 99342-3481',
        },
        {
          id: 91053,
          name: 'Noah Carvalho Jr.',
          contato: '11 99330-6548',
        },
      ],
      family: [
        {
          id: 75335,
          name: 'Ladislau Melo',
          parentesco: 'back',
          contato: '11 99343-0710',
        },
        {
          id: 96189,
          name: 'Luiza Costa',
          parentesco: 'Lúcia',
          contato: '11 99328-1430',
        },
      ],
      ultimaChecagem: '2022-12-19T03:40:46.535Z',
    },
  ];
  const [children, setChildren] = useState<ReturnType<typeof createRandomObject>[] | []>(
    defaultChildren
  );
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearchInput = useDebounce(searchInput, 600);

  useEffect(() => {
    if (debouncedSearchInput === '') {
      setChildren(defaultChildren);
    } else {
      const filteredChildren = defaultChildren.filter((child) =>
        child.name.toLowerCase().includes(debouncedSearchInput.toLowerCase().trim())
      );
      setChildren(filteredChildren);
    }
  }, [debouncedSearchInput]);

  const totalChildren = children.length;

  const addNewChild = useCallback(() => {
    setChildren((prevState) => [...prevState, createRandomObject()]);
  }, []);

  const handleSearch = (text: string) => {
    setSearchInput(text);
  };

  return (
    <S.ChildrenContainer>
      <S.ChildrenHeader>
        <h4>
          Crianças{' '}
          <span>
            {totalChildren}
            {debouncedSearchInput && ' de ' + defaultChildren.length}
          </span>
        </h4>
        <div className="searchBox">
          <Input
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar"
            name="SearchBox"
            withBorder
          />
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
        <AnimatePresence>
          {children.map((child) => {
            return (
              <S.ChildrenCard
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.7 }}
                exit={{ opacity: 0, scale: 0.6 }}
                key={child.id}
                layout
              >
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
                          {/* TODO: Trocar contato por um modal com todas informações quando clicado ou mostrar só depois de clicado */}
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
        </AnimatePresence>
      </S.ChildrenContent>
    </S.ChildrenContainer>
  );
};

export const ChildrenContent = memo(ChildrenContentBase);
