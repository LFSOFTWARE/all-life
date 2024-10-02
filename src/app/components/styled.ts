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
  border :${ props => props.hig ? '2px' : '1px' } solid black;

  background-color:  ${ props => props.color ? props.color : 'white' };
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
width: 10%;
margin-top: 34px;
margin-left: 2%;
`

export const ContainerNames = styled.div`
display: flex;
`