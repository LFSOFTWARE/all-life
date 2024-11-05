import styled from "styled-components";

interface PropsCell {
  color?: string
  hig?: boolean
}
export const Container = styled.div`
position: relative;
display: flex;
width: 100%;
justify-content: center;
`

export const Cell = styled.div<PropsCell>`
  width: 20px;
  height: 20px;
  border :${props => props.hig ? '2px' : '1px'} solid black;

  background-color:  ${props => props.color ? props.color : 'white'};
  margin-right: 5px;
  margin-bottom: 5px;

`

export const Line = styled.div`
display: flex;

`

export const Absolute = styled.div`
position: absolute;
transform: rotate(90deg);
left: 0;
top: 100px;
`

export const Year = styled.p`
  font-size: 15px;
  margin-right: 10px;
  width: 15px;
  align-self: right;
`
export const ContainerTable = styled.div``
export const Inputs = styled.div`
h2{
  margin-bottom: 15px;
}
width: 10%;
margin-top: 34px;
margin-left: 45px;
display: flex;
flex-direction: column;

.list{
  height: 200px;
  max-height: 200px;
  overflow-y: auto;
}

.list::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem */
}

/* Estilizando a "track" da barra de rolagem */
.list::-webkit-scrollbar-track {
  background: #f1f1f1; /* Cor de fundo da track */
  border-radius: 10px; /* Bordas arredondadas */
}

/* Estilizando o "thumb" da barra de rolagem */
.list::-webkit-scrollbar-thumb {
  background: #888; /* Cor do "thumb" */
  border-radius: 10px; /* Bordas arredondadas */
}

/* Mudança de cor ao passar o mouse */
.list::-webkit-scrollbar-thumb:hover {
  background: #555; /* Cor do "thumb" ao passar o mouse */
}
.inputs{
  margin-top: 25px;
}
input{
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  margin-bottom: 8px;
  transition: border-color 0.3s, box-shadow 0.3s;
}
input:focus {
  border-color: #4a90e2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
}

button {
  background-color: #4a90e2;
  color: white;
  border: none;
  margin-top: 10px;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #357ab8;
}

button:active {
  transform: scale(0.98);
}

button:focus {
  outline: none;
  box-shadow: 0 0 3px 2px rgba(74, 144, 226, 0.5);
}
`

export const ContainerNames = styled.div`
display: flex;
justify-content: space-between;
.infos{
  display: flex;
}

.delete:hover{
  cursor: pointer;
  
}

.delete{
  width: 15px;
  height: 15px;
}
`