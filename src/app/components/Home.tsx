'use client'
import React, { useEffect, useState } from 'react';
import { Absolute, Cell, Container, ContainerNames, ContainerTable, Inputs, Line, Year } from './styled';
import { Data } from './Data';

interface Person {
  name: string;
  age: number;
  color: string;
}

export default function HomeContent() {
  const [matrix, setMatrix] = useState<any>(Data);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [colorMouseOver, setColorMouseOver] = useState<string>("");
  const [people, setPeople] = useState<Person[]>([
  
  ]);

//   function generateRandomColor() {
//     // Gera um valor hexadecimal aleatório entre 0 e 255
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     return `#${randomColor.padStart(6, '0')}`;
// }
function getRandomColor() {
  const colors = [
    '#5F9EA0', '#E9967A', '#008080', '#FFFFE0', '#FF4500', 
    '#48D1CC', '#EEE8AA', '#D2691E', '#9370DB', '#FFEFD5', 
    '#EE82EE', '#C0C0C0', '#3CB371', '#7CFC00', '#F08080', 
    '#FFFFFF', '#FF69B4', '#C71585', '#8B4513', '#FFFF00', 
    '#DAA520', '#FAFAD2', '#FAEBD7', '#FFD700', '#F0F8FF', 
    '#778899', '#4169E1', '#556B2F', '#FFA500', '#66CDAA'
  ];
  
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

  const getColorByAge = (age: number): string | undefined => {
    const person = people.find((item: Person) => age <= item.age);
    return person?.color;
  };
  const handleAddPerson = () => {
    const newPerson: Person = { name, age: parseInt(age), color: getRandomColor() };
    const updatedPeople = [...people, newPerson].sort((a, b) => a.age - b.age);
    setPeople(updatedPeople);
    setAge("");
    setName("");
  };

  useEffect(() => {
    console.log(colorMouseOver);
    
  }, [colorMouseOver]);

  return (
    <Container>
      <ContainerTable>
        <p style={{ marginBottom: "15px" }}>Week of Year ---{">"} </p>
        {matrix.map((row: any, rowIndex: number) => (
          <Line key={rowIndex}>
            {(rowIndex % 5 === 0 || rowIndex === 0 || rowIndex === 89) ? <Year>{rowIndex}</Year> : <Year></Year>}
            {row.map((item: any, colIndex: number) => (
              <Cell hig={getColorByAge(rowIndex) == colorMouseOver}  key={colIndex} color={getColorByAge(rowIndex)} />
            ))}
          </Line>
        ))}
      </ContainerTable>
      <Inputs>
        {people.map((person: Person, index: number) => (
          <ContainerNames key={index} onMouseOver={() => setColorMouseOver(person.color)} onMouseOut={() => setColorMouseOver("")}>
            <Cell hig={person.color  == colorMouseOver} color={person.color} />
            <p>{person.name}</p>
            <p> {person.age}</p>
          </ContainerNames>
        ))}

        <input
          placeholder='Name'
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <div>
        <input
          placeholder="Age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        </div>
        <button type='button' onClick={handleAddPerson}>Add</button>
      </Inputs>
    </Container>
  );
}
